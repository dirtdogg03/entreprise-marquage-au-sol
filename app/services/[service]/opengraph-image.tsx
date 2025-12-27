import { ImageResponse } from 'next/og';
import { services } from '@/lib/data/services';

export const runtime = 'edge';

export const alt = 'Service de marquage au sol';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export async function generateImageMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const serviceData = services.find((s) => s.slug === service);

  return [
    {
      id: service,
      alt: serviceData ? `${serviceData.name} - Marquage au Sol` : 'Service de marquage',
      size,
      contentType,
    },
  ];
}

export default async function Image({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const serviceData = services.find((s) => s.slug === service);
  const serviceName = serviceData?.name || 'Service de marquage au sol';
  const serviceDescription = serviceData?.description?.substring(0, 100) + '...' || '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          position: 'relative',
        }}
      >
        {/* Safety stripes at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '16px',
            background: 'repeating-linear-gradient(45deg, #FACC15, #FACC15 15px, #1a1a1a 15px, #1a1a1a 30px)',
          }}
        />

        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: 0,
            bottom: '16px',
            width: '8px',
            backgroundColor: '#FACC15',
          }}
        />

        {/* Safety stripes at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '16px',
            background: 'repeating-linear-gradient(45deg, #FACC15, #FACC15 15px, #1a1a1a 15px, #1a1a1a 30px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            paddingLeft: '100px',
            height: '100%',
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: 'flex',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                backgroundColor: '#FACC15',
                padding: '8px 20px',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 700,
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Service
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            {serviceName}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            {serviceDescription}
          </div>

          {/* Company branding */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '48px',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#FACC15',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 900,
                color: '#1a1a1a',
              }}
            >
              M
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#FACC15',
                fontWeight: 600,
              }}
            >
              entreprise-marquage-au-sol.fr
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
