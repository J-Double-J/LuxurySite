// Takes any component and just inserts into the grid.
function FooterGridCustom({ children, footerGridArea = "" }) {
    const gridAreaStyling = footerGridArea !== "" ? { gridArea: footerGridArea } : {};

    return (
        <div style={gridAreaStyling} >
            {children}
        </div>
  );
}

export default FooterGridCustom;