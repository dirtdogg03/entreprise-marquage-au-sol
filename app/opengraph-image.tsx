import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Entreprise Marquage au Sol - Ile-de-France';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          position: 'relative',
        }}
      >
        {/* Safety stripes pattern at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '24px',
            background: 'repeating-linear-gradient(45deg, #FACC15, #FACC15 20px, #1a1a1a 20px, #1a1a1a 40px)',
          }}
        />

        {/* Safety stripes pattern at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '24px',
            background: 'repeating-linear-gradient(45deg, #FACC15, #FACC15 20px, #1a1a1a 20px, #1a1a1a 40px)',
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(250, 204, 21, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 204, 21, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              width: '120px',
              height: '120px',
              backgroundColor: '#FACC15',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              fontSize: '60px',
              fontWeight: 900,
              color: '#1a1a1a',
            }}
          >
            M
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: '#ffffff',
              textAlign: 'center',
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '-2px',
            }}
          >
            Entreprise Marquage au Sol
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              color: '#FACC15',
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            Specialiste du marquage au sol en Ile-de-France
          </div>

          {/* Services badges */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            {['Parking', 'Entrepot', 'Industriel', 'PMR'].map((service) => (
              <div
                key={service}
                style={{
                  backgroundColor: 'rgba(250, 204, 21, 0.15)',
                  border: '2px solid #FACC15',
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '18px',
                  color: '#FACC15',
                  fontWeight: 600,
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
