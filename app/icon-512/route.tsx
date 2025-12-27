import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FACC15',
          borderRadius: '102px',
        }}
      >
        <div
          style={{
            fontSize: '320px',
            fontWeight: 900,
            color: '#1a1a1a',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          M
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
