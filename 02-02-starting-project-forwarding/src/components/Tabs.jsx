function Tabs({buttons, children, buttonsContainer='menu'}) {
    const ButtonsConainter = buttonsContainer;
    return (
        <>
            <ButtonsConainter>
                {buttons}
            </ButtonsConainter>
            {children}
        </>
    );
}

export default Tabs;