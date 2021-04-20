import {} from '@material-ui/core/styles/createPalette';
declare module '@material-ui/core/styles/createPalette'{
    interface PaletteOptions{
        dispDate?:CstmPaletteColorOptions;
        button?:CstmPaletteColorOptions;
        title?:CstmPaletteColorOptions;
        detail?:CstmPaletteColorOptions;
    }
    interface Palette{
        dispDate:CstmPaletteColor;
        button:CstmPaletteColor;
        title:CstmPaletteColor;
        detail:CstmPaletteColor;
    }
    interface CstmPaletteColorOptions{
        main:string;
        font?:string;
    }
    interface CstmPaletteColor{
        main:string;
        font?:string;
    }
}