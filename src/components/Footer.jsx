import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Barlow font from Google */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,800;0,900;1,800;1,900&family=Barlow:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .font-barlow { font-family: 'Barlow', sans-serif; }
        .font-barlow-condensed { font-family: 'Barlow Condensed', sans-serif; }

        @keyframes gh-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-gh-spin { animation: gh-spin 18s linear infinite; }

        .gh-btn-mail:hover .gh-mail-icon-inner {
          background: #ffffff !important;
          color: #1A1A1A !important;
        }
      `}</style>

      {/* ===========================
          MOBILE FOOTER (below sm)
      =========================== */}
      <div className="flex sm:hidden flex-col items-center font-barlow text-[#1A1A1A]"
        style={{ background: '#E2DDCF', padding: '32px 24px 24px' }}>

        {/* Logo */}
        <img
          src="https://i.ibb.co.com/kjHRSqT/a.png"
          alt="GetHyped logo"
          style={{ width: '200px', objectFit: 'contain', marginBottom: '24px' }}
        />

        {/* CTA Button */}
        <button
          className="flex items-center gap-2 font-barlow font-bold text-white"
          style={{
            background: '#F05A28',
            borderRadius: '12px',
            padding: '10px 10px 10px 22px',
            fontSize: '15px',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '24px',
          }}
        >
          Get Hyped! Neem contact op
          <span
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '34px', height: '34px',
              borderRadius: '8px',
              background: 'white',
              color: '#F05A28',
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
            </svg>
          </span>
        </button>

        {/* Nav Pills */}
        <div className="flex gap-2 flex-wrap justify-center" style={{ marginBottom: '20px' }}>
          {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              className="font-barlow font-bold text-[#1A1A1A]"
              style={{
                background: 'white',
                border: 'none',
                padding: '9px 16px',
                borderRadius: '10px',
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2.5" style={{ marginBottom: '24px' }}>
          {/* LinkedIn */}
          <button className="flex items-center justify-center flex-shrink-0"
            style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#1A1A1A', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.13h.05c.53-1 1.84-2.13 3.78-2.13 4.04 0 4.79 2.66 4.79 6.12V24h-4v-8.56c0-2.04-.04-4.67-2.85-4.67-2.85 0-3.29 2.22-3.29 4.52V24h-4V8.5z" />
            </svg>
          </button>
          {/* TikTok */}
          <button className="flex items-center justify-center flex-shrink-0"
            style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#1A1A1A', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.77a4.85 4.85 0 01-1.02-.08z" />
            </svg>
          </button>
          {/* Instagram */}
          <button className="flex items-center justify-center flex-shrink-0"
            style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#1A1A1A', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </button>
          {/* YouTube */}
          <button className="flex items-center justify-center flex-shrink-0"
            style={{ width: '40px', height: '40px', background: 'white', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#1A1A1A', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
          </button>
        </div>

        {/* Contact Info */}
        <div className="font-barlow font-medium text-center" style={{ fontSize: '14px', opacity: 0.7, lineHeight: '1.8', marginBottom: '20px' }}>
          info@gethyped.nl<br />
          +31 6 1533 7496<br /><br />
          Beltrumsestraat 6,<br />
          7141 AL Groenlo
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-1 font-barlow font-bold uppercase"
          style={{ fontSize: '10.5px', letterSpacing: '0.13em', color: 'rgba(0,0,0,0.35)' }}>
          <span style={{ cursor: 'pointer' }}>Privacyvoorwaarden</span>
          <span>© 2025 Get Hyped</span>
          <span>© Design by Dylan</span>
        </div>
      </div>


      {/* ===========================
          DESKTOP FOOTER (sm and above)
      =========================== */}
      <footer
        className="relative hidden sm:block mx-6 md:mx-10 m-auto overflow-hidden font-barlow text-[#1A1A1A]"
        style={{ paddingTop: '80px' }}
      >

        {/* Diagonal beige background */}
        <div
          className="absolute bottom-0 rounded-t-3xl left-0 w-full z-0"
          style={{
            height: '58%',
            background: '#E2DDCF',
            clipPath: 'polygon(0 75%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        />

        <div className="relative z-10">

          {/* ── CTA Section ── */}
          <div className="flex flex-col items-center text-center pb-9">
            <h1
              className="font-barlow font-semibold tracking-[-1px] mb-10 text-[#1A1A1A]"
              style={{ fontSize: 'clamp(56px, 7.5vw, 108px)', lineHeight: 0.95 }}
            >
              Let's Get Hyped!
            </h1>
            <div className="flex gap-3 items-center flex-wrap justify-center">

              {/* Mail button */}
              <button
                className="gh-btn-mail group flex items-center gap-2 text-gray-700 border border-black/15 rounded-[11px] pl-[18px] pr-[6px] py-[5px] font-barlow font-semibold text-[15px] cursor-pointer transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white hover:scale-[1.05] active:scale-[0.97] whitespace-nowrap"
              >
                Mail ons direct
                <span className="gh-mail-icon-inner flex items-center justify-center w-[32px] h-[32px] rounded-[8px] bg-[#1A1A1A] text-white transition-all duration-300 flex-shrink-0 group-hover:bg-white group-hover:text-black group-hover:rotate-12">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
              </button>

              {/* Get Results button */}
              <button
                className="group flex items-center gap-2 bg-[#F05A28] text-white rounded-[11px] pl-[18px] pr-[6px] py-[5px] font-barlow font-semibold text-[15px] cursor-pointer transition-all duration-300 hover:scale-[1.05] active:scale-[0.97] hover:shadow-lg whitespace-nowrap"
              >
                Get Results
                <span className="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] bg-white text-[#F05A28] flex-shrink-0 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                  </svg>
                </span>
              </button>

            </div>
          </div>

          {/* ── Spinning Pink Badge (absolute top-right) ── */}
          <div className="absolute top-24 right-20 z-20">
            <div
              className="animate-gh-spin relative flex items-center justify-center w-[114px] h-[114px] rounded-full border border-[#1A1A1A]"
              style={{ background: '#F4BAFF' }}
            >
              <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                <defs>
                  <path
                    id="gh-circle-path"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fill: '#1A1A1A',
                  }}
                >
                  <textPath href="#gh-circle-path">
                    GET RESULTS • GET HYPED • GET NOTICED •
                  </textPath>
                </text>
              </svg>

              <span
                className="font-barlow-condensed font-black italic z-10 leading-none select-none"
                style={{
                  fontSize: '42px',
                  letterSpacing: '-2px',
                  transform: 'rotate(-10deg)',
                  color: '#1A1A1A',
                }}
              >
                GH
              </span>
            </div>
          </div>

          {/* ── Bottom: Giant Logo + Right Info ── */}
          <div className="flex items-end justify-between">

            {/* Giant GETHYPED logo */}
            <img
              src="https://i.ibb.co.com/kjHRSqT/a.png"
              alt="logo"
              className="h-10 md:h-16 lg:h-24 m-[-40px] ml-0 w-auto object-contain transition-all duration-300 hover:scale-105"
            />

            {/* Right info panel */}
            <div className="flex items-end gap-12 md:gap-18 pb-4">

              {/* Nav pills + Social */}
              <div className="flex flex-col gap-4">
                {/* Nav pills */}
                <div className="flex gap-2 flex-wrap">
                  {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
                    <button
                      key={item}
                      className="bg-white border-none px-4 py-2 rounded-[10px] font-barlow font-bold text-[14px] text-[#1A1A1A] cursor-pointer shadow-sm transition-all hover:bg-[#1A1A1A] hover:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Social row */}
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-[16px] mr-0.5">Follow us</span>

                  {/* LinkedIn */}
                  <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-none cursor-pointer text-[#1A1A1A] shadow-sm transition-all hover:bg-[#1A1A1A] hover:text-white flex-shrink-0">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.13h.05c.53-1 1.84-2.13 3.78-2.13 4.04 0 4.79 2.66 4.79 6.12V24h-4v-8.56c0-2.04-.04-4.67-2.85-4.67-2.85 0-3.29 2.22-3.29 4.52V24h-4V8.5z" />
                    </svg>
                  </button>

                  {/* TikTok */}
                  <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-none cursor-pointer text-[#1A1A1A] shadow-sm transition-all hover:bg-[#1A1A1A] hover:text-white flex-shrink-0">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.54V6.77a4.85 4.85 0 01-1.02-.08z" />
                    </svg>
                  </button>

                  {/* Instagram */}
                  <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-none cursor-pointer text-[#1A1A1A] shadow-sm transition-all hover:bg-[#1A1A1A] hover:text-white flex-shrink-0">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </button>

                  {/* YouTube */}
                  <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full border-none cursor-pointer text-[#1A1A1A] shadow-sm transition-all hover:bg-[#1A1A1A] hover:text-white flex-shrink-0">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contact + Adres */}
              <div className="flex flex-col gap-2 min-w-[172px]">
                <div>
                  <p className="font-bold text-[15px] mb-1">Contact</p>
                  <p className="text-[14px] font-medium opacity-60 leading-relaxed">
                    info@gethyped.nl<br />+31 6 1533 7496
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[15px] mb-1">Adres</p>
                  <p className="text-[14px] font-medium opacity-60 leading-relaxed">
                    Beltrumsestraat 6,<br />7141 AL Groenlo
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── Copyright Bar ── */}
          <div className="flex justify-end items-center pt-4 pb-4 text-[10.5px] font-bold uppercase tracking-[0.13em] text-black/35 flex-wrap gap-1.5">
            <div className="flex pr-12 gap-9 md:gap-12">
              <span>© 2025 Get Hyped</span>
              <span>© Design by Dylan</span>
              <span className="cursor-pointer transition-colors hover:text-[#1A1A1A]">
                Privacyvoorwaarden
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;