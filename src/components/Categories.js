import { categoriesStyle, title, windowStyle, tr, table, th, arrowDown, arrowUp, firstCol, secondCol, button, viewMore, plus, content } from "./styles/categoriesStyle"


export const Categories = props => {
    return (
        <div style={categoriesStyle}>
            <h1 style={title}>CATEGORIES</h1>
            <div style={windowStyle}>

                <table style={table}>
                    <tr style={tr}>
                        <th style={th}>
                            Your Reddit Categories
                        </th>
                        
                    </tr>
                    <tr style={content}>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.24264 13.2634C0.26633 14.2397 0.26633 15.8226 1.24264 16.7989C2.21895 17.7752 3.80186 17.7752 4.77817 16.7989L1.24264 13.2634ZM16.799 4.77811C17.7753 3.8018 17.7753 2.21889 16.799 1.24258C15.8227 0.266267 14.2398 0.266266 13.2635 1.24258L16.799 4.77811ZM13.2635 16.7989C14.2398 17.7752 15.8227 17.7752 16.799 16.7989C17.7753 15.8226 17.7753 14.2397 16.799 13.2634L13.2635 16.7989ZM4.77817 1.24258C3.80186 0.266267 2.21895 0.266267 1.24264 1.24258C0.26633 2.21889 0.26633 3.8018 1.24264 4.77811L4.77817 1.24258ZM4.77817 16.7989L10.7886 10.7885L7.25305 7.25299L1.24264 13.2634L4.77817 16.7989ZM10.7886 10.7885L16.799 4.77811L13.2635 1.24258L7.25305 7.25299L10.7886 10.7885ZM16.799 13.2634L10.7886 7.25299L7.25305 10.7885L13.2635 16.7989L16.799 13.2634ZM10.7886 7.25299L4.77817 1.24258L1.24264 4.77811L7.25305 10.7885L10.7886 7.25299Z" fill="#BCBCBC"/>
                            </svg>
                        </td>
                        
                    </tr>
                    <tr style={content}>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.24264 13.2634C0.26633 14.2397 0.26633 15.8226 1.24264 16.7989C2.21895 17.7752 3.80186 17.7752 4.77817 16.7989L1.24264 13.2634ZM16.799 4.77811C17.7753 3.8018 17.7753 2.21889 16.799 1.24258C15.8227 0.266267 14.2398 0.266266 13.2635 1.24258L16.799 4.77811ZM13.2635 16.7989C14.2398 17.7752 15.8227 17.7752 16.799 16.7989C17.7753 15.8226 17.7753 14.2397 16.799 13.2634L13.2635 16.7989ZM4.77817 1.24258C3.80186 0.266267 2.21895 0.266267 1.24264 1.24258C0.26633 2.21889 0.26633 3.8018 1.24264 4.77811L4.77817 1.24258ZM4.77817 16.7989L10.7886 10.7885L7.25305 7.25299L1.24264 13.2634L4.77817 16.7989ZM10.7886 10.7885L16.799 4.77811L13.2635 1.24258L7.25305 7.25299L10.7886 10.7885ZM16.799 13.2634L10.7886 7.25299L7.25305 10.7885L13.2635 16.7989L16.799 13.2634ZM10.7886 7.25299L4.77817 1.24258L1.24264 4.77811L7.25305 10.7885L10.7886 7.25299Z" fill="#BCBCBC"/>
                            </svg>
                        </td>
                        
                    </tr>
                    <tr>
                        <td style={firstCol}>Lorem ipsum</td>
                        <td style={secondCol}>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.24264 13.2634C0.26633 14.2397 0.26633 15.8226 1.24264 16.7989C2.21895 17.7752 3.80186 17.7752 4.77817 16.7989L1.24264 13.2634ZM16.799 4.77811C17.7753 3.8018 17.7753 2.21889 16.799 1.24258C15.8227 0.266267 14.2398 0.266266 13.2635 1.24258L16.799 4.77811ZM13.2635 16.7989C14.2398 17.7752 15.8227 17.7752 16.799 16.7989C17.7753 15.8226 17.7753 14.2397 16.799 13.2634L13.2635 16.7989ZM4.77817 1.24258C3.80186 0.266267 2.21895 0.266267 1.24264 1.24258C0.26633 2.21889 0.26633 3.8018 1.24264 4.77811L4.77817 1.24258ZM4.77817 16.7989L10.7886 10.7885L7.25305 7.25299L1.24264 13.2634L4.77817 16.7989ZM10.7886 10.7885L16.799 4.77811L13.2635 1.24258L7.25305 7.25299L10.7886 10.7885ZM16.799 13.2634L10.7886 7.25299L7.25305 10.7885L13.2635 16.7989L16.799 13.2634ZM10.7886 7.25299L4.77817 1.24258L1.24264 4.77811L7.25305 10.7885L10.7886 7.25299Z" fill="#BCBCBC"/>
</svg>
</td>
                        
                    </tr>
                </table>
                
            </div>
       </div>)
}