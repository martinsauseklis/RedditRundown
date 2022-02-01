import { headerStyle, logoStyle, nameStyle, hamburgerStyle } from './styles/headerStyle';

export const Header = () => {
    
    return (
        <div style={headerStyle}>
            <svg style={logoStyle} width="102" height="44" viewBox="0 0 102 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0585 1C27.3716 19.2675 52.1982 51.9342 101 36.4605" stroke="white" stroke-width="5"/>
                <path d="M12.2494 1.64471C19.2408 19.8321 46.7348 52.3553 100.78 36.9495" stroke="white" stroke-width="5"/>
                <path d="M3 1.64471C9.99138 19.8321 37.4854 52.3553 91.5303 36.9495" stroke="white" stroke-width="5"/>
            </svg>
            <svg style={nameStyle} width="111" height="29" viewBox="0 0 111 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00574 23.24C7.42574 23.24 5.89574 23 4.41574 22.52C2.95574 22.02 1.80574 21.38 0.965741 20.6L2.07574 18.26C2.87574 18.98 3.89574 19.57 5.13574 20.03C6.39574 20.47 7.68574 20.69 9.00574 20.69C10.7457 20.69 12.0457 20.4 12.9057 19.82C13.7657 19.22 14.1957 18.43 14.1957 17.45C14.1957 16.73 13.9557 16.15 13.4757 15.71C13.0157 15.25 12.4357 14.9 11.7357 14.66C11.0557 14.42 10.0857 14.15 8.82574 13.85C7.24574 13.47 5.96574 13.09 4.98574 12.71C4.02574 12.33 3.19574 11.75 2.49574 10.97C1.81574 10.17 1.47574 9.1 1.47574 7.76C1.47574 6.64 1.76574 5.63 2.34574 4.73C2.94574 3.83 3.84574 3.11 5.04574 2.57C6.24574 2.03 7.73574 1.76 9.51574 1.76C10.7557 1.76 11.9757 1.92 13.1757 2.24C14.3757 2.56 15.4057 3.02 16.2657 3.62L15.2757 6.02C14.3957 5.46 13.4557 5.04 12.4557 4.76C11.4557 4.46 10.4757 4.31 9.51574 4.31C7.81574 4.31 6.53574 4.62 5.67574 5.24C4.83574 5.86 4.41574 6.66 4.41574 7.64C4.41574 8.36 4.65574 8.95 5.13574 9.41C5.61574 9.85 6.20574 10.2 6.90574 10.46C7.62574 10.7 8.59574 10.96 9.81574 11.24C11.3957 11.62 12.6657 12 13.6257 12.38C14.5857 12.76 15.4057 13.34 16.0857 14.12C16.7857 14.9 17.1357 15.95 17.1357 17.27C17.1357 18.37 16.8357 19.38 16.2357 20.3C15.6357 21.2 14.7257 21.92 13.5057 22.46C12.2857 22.98 10.7857 23.24 9.00574 23.24ZM44.4156 7.1L38.4756 23H35.7156L31.1256 10.94L26.4756 23H23.7156L17.8056 7.1H20.5356L25.1556 19.76L29.9556 7.1H32.3856L37.0956 19.82L41.8356 7.1H44.4156ZM46.888 7.1H49.768V23H46.888V7.1ZM48.328 4.04C47.768 4.04 47.298 3.86 46.918 3.5C46.558 3.14 46.378 2.7 46.378 2.18C46.378 1.66 46.558 1.22 46.918 0.859999C47.298 0.479999 47.768 0.289999 48.328 0.289999C48.888 0.289999 49.348 0.469999 49.708 0.829999C50.088 1.17 50.278 1.6 50.278 2.12C50.278 2.66 50.088 3.12 49.708 3.5C49.348 3.86 48.888 4.04 48.328 4.04ZM63.2469 6.95C64.7869 6.95 66.1669 7.29 67.3869 7.97C68.6069 8.65 69.5569 9.6 70.2369 10.82C70.9369 12.04 71.2869 13.45 71.2869 15.05C71.2869 16.65 70.9369 18.07 70.2369 19.31C69.5569 20.53 68.6069 21.48 67.3869 22.16C66.1669 22.84 64.7869 23.18 63.2469 23.18C62.1069 23.18 61.0569 22.96 60.0969 22.52C59.1569 22.08 58.3569 21.44 57.6969 20.6V28.82H54.8169V7.1H57.5769V9.62C58.2169 8.74 59.0269 8.08 60.0069 7.64C60.9869 7.18 62.0669 6.95 63.2469 6.95ZM63.0069 20.66C64.0269 20.66 64.9369 20.43 65.7369 19.97C66.5569 19.49 67.1969 18.83 67.6569 17.99C68.1369 17.13 68.3769 16.15 68.3769 15.05C68.3769 13.95 68.1369 12.98 67.6569 12.14C67.1969 11.28 66.5569 10.62 65.7369 10.16C64.9369 9.7 64.0269 9.47 63.0069 9.47C62.0069 9.47 61.0969 9.71 60.2769 10.19C59.4769 10.65 58.8369 11.3 58.3569 12.14C57.8969 12.98 57.6669 13.95 57.6669 15.05C57.6669 16.15 57.8969 17.13 58.3569 17.99C58.8169 18.83 59.4569 19.49 60.2769 19.97C61.0969 20.43 62.0069 20.66 63.0069 20.66ZM89.1861 15.14C89.1861 15.36 89.1661 15.65 89.1261 16.01H76.2261C76.4061 17.41 77.0161 18.54 78.0561 19.4C79.1161 20.24 80.4261 20.66 81.9861 20.66C83.8861 20.66 85.4161 20.02 86.5761 18.74L88.1661 20.6C87.4461 21.44 86.5461 22.08 85.4661 22.52C84.4061 22.96 83.2161 23.18 81.8961 23.18C80.2161 23.18 78.7261 22.84 77.4261 22.16C76.1261 21.46 75.1161 20.49 74.3961 19.25C73.6961 18.01 73.3461 16.61 73.3461 15.05C73.3461 13.51 73.6861 12.12 74.3661 10.88C75.0661 9.64 76.0161 8.68 77.2161 8C78.4361 7.3 79.8061 6.95 81.3261 6.95C82.8461 6.95 84.1961 7.3 85.3761 8C86.5761 8.68 87.5061 9.64 88.1661 10.88C88.8461 12.12 89.1861 13.54 89.1861 15.14ZM81.3261 9.38C79.9461 9.38 78.7861 9.8 77.8461 10.64C76.9261 11.48 76.3861 12.58 76.2261 13.94H86.4261C86.2661 12.6 85.7161 11.51 84.7761 10.67C83.8561 9.81 82.7061 9.38 81.3261 9.38ZM93.1553 2H96.1553V23H93.1553V2ZM110.512 22.07C110.092 22.43 109.572 22.71 108.952 22.91C108.332 23.09 107.692 23.18 107.032 23.18C105.432 23.18 104.192 22.75 103.312 21.89C102.432 21.03 101.992 19.8 101.992 18.2V9.47H99.2924V7.1H101.992V3.62H104.872V7.1H109.432V9.47H104.872V18.08C104.872 18.94 105.082 19.6 105.502 20.06C105.942 20.52 106.562 20.75 107.362 20.75C108.242 20.75 108.992 20.5 109.612 20L110.512 22.07Z" fill="white"/>
            </svg>
            <svg style={hamburgerStyle} width="55" height="36" viewBox="0 0 55 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-2.5" x2="54.0008" y2="-2.5" transform="matrix(0.999985 -0.00552478 -0.00552478 -0.999985 0 30.7293)" stroke="white" stroke-width="5"/>
                <line y1="-2.5" x2="54.0008" y2="-2.5" transform="matrix(0.999985 -0.00552478 -0.00552478 -0.999985 0 15.5138)" stroke="white" stroke-width="5"/>
                <line y1="-2.5" x2="54.0008" y2="-2.5" transform="matrix(0.999985 -0.00552478 -0.00552478 -0.999985 0 0.29834)" stroke="white" stroke-width="5"/>
            </svg>

        </div>
    )
}