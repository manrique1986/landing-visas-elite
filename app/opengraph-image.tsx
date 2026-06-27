import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Visas Elite — Acompañamiento premium para la visa de tus padres';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d1b4b 0%, #152160 55%, #1a2a7a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 100px',
          gap: 0,
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, letterSpacing: '0.2em', color: '#c9a44a', marginBottom: 24 }}>
          VISAS ELITE
        </div>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 900, color: '#ffffff', textAlign: 'center', lineHeight: 1.1, marginBottom: 32, maxWidth: 900 }}>
          Trae a tus padres a EE.UU. con garantía
        </div>
        <div style={{ display: 'flex', width: 80, height: 4, background: 'linear-gradient(90deg, #c9a44a, #f0d780)', borderRadius: 9999, marginBottom: 40 }} />
        <div style={{ display: 'flex', gap: 60, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: '#ffffff' }}>+1.000</span>
            <span style={{ fontSize: 18, color: '#94a3b8' }}>familias</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: '#ffffff' }}>10+</span>
            <span style={{ fontSize: 18, color: '#94a3b8' }}>años de experiencia</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 36, fontWeight: 900, color: '#ffffff' }}>8 sem.</span>
            <span style={{ fontSize: 18, color: '#94a3b8' }}>garantía</span>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 48, fontSize: 20, color: '#c9a44a', letterSpacing: '0.05em' }}>
          visaelite.netlify.app
        </div>
      </div>
    ),
    { ...size }
  );
}
