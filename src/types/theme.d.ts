import {} from '@material-ui/core/styles/createPalette';
declare module '@material/ui/core/styles/createPalette'{
    interface PaletteOptions{
        dispDate?:CstmPaletteColorOptions;
        button?:CstmPaletteColorOptions;
        itemName?:CstmPaletteColorOptions;
        plan?:CstmPaletteColorOptions;
        record?:CstmPaletteColorOptions;
        result?:CstmPaletteColorOptions;
    }
    interface Palette{
        dispDate:CstmPaletteColor;
        button:CstmPaletteColor;
        itemName:CstmPaletteColor;
        plan:CstmPaletteColor;
        record:CstmPaletteColor;
        result:CstmPaletteColor;
    }
    interface CstmPaletteColorOptions{
        main:string;
        second?:string;
    }
    interface CstmPaletteColor{
        main:string;
        second?:string;
    }
}