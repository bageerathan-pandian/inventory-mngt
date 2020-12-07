class PurchaseReturnReportModel {

    constructor(purchaseReturnReportModel?: PurchaseReturnReportModel) {
        this.name = purchaseReturnReportModel ? purchaseReturnReportModel.name : '';
        this.age = purchaseReturnReportModel ? purchaseReturnReportModel.age : '';
        this.hoppies = purchaseReturnReportModel ? purchaseReturnReportModel.hoppies : [];
    }
    name: string;
    age: string;
    hoppies: any[]
    colors: ColorsListModel[]
}

class ColorsListModel {

    constructor(colorsListModel?: ColorsListModel) {
        this.colorName = colorsListModel ? colorsListModel.colorName : '';
    }
    colorName: string;
}

export { PurchaseReturnReportModel, ColorsListModel }