import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '36px',
        }}
      >
        <div
          style={{
            fontSize: '110px',
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
      ...size,
    }
  );
}
