export interface ContactGegevens {
  ContactNaam: string;
  ContactAdres: string;
}

export interface ContactInformation {
  ContactGegevens: ContactGegevens;
}

export interface Algemeen {
  Standaardeenheid: string;
  // Aantal-porties-per-verpakking: string;
}

export interface Voedingswaarden {
  Algemeen: Algemeen;
}

export interface NutritionInformation {
  Voedingswaarden: Voedingswaarden;
}

export interface Bewaaradviezen {
  Bewaaradvies: string;
}

export interface StorageConditions {
  Bewaaradviezen: Bewaaradviezen;
}

export interface ProductAllergen {
  AllergenDescription: string;
  AllergenText: string;
}

export interface ProductIngredient {
  Text: string;
}

export interface ProductDeclaration {
  ContactInformation: ContactInformation;
  NutritionInformation: NutritionInformation;
  StorageConditions: StorageConditions;
  PreparationInstructions?: any;
  ServingSugestions?: any;
  ExplicitNotations?: any;
  Claims?: any;
  LandOfOrigin?: any;
  UsageAdvice?: any;
  ProductAllergens: ProductAllergen[];
  ProductIngredients: ProductIngredient[];
}

export interface ProductBarcode {
  Barcode: string;
}

export interface Tax {
  TaxID: number;
  Description: string;
  Percentage: number;
}

export interface BrandInfo {
  BrandID: number;
  Description: string;
}

export interface ProductPicture {
  Url: string;
  IsPrimary: boolean;
}

export interface ProductPrice {
  PriceID: number;
  StoreID: number;
  ProductID: number;
  Price: number;
  RegularPrice: number;
  PricePerKilo?: any;
  PricePerDefaultUnit: number;
  DefaultUnit: string;
  IsActionPrice: boolean;
  TaxID: number;
  StartDate: Date;
  EndDate: Date;
  PriceLineCode: number;
}

export interface Logo {
  LogoID: number;
  Description: string;
  Url: string;
  Position: number;
  Info?: any;
  IsDirk: boolean;
  IsDeka: boolean;
}

export interface WebDepartment {
  WebDepartmentID: number;
  Position: number;
  Description: string;
}

export interface WebGroup {
  WebGroupID: number;
  Position: number;
  Description: string;
  WebDepartment: WebDepartment;
}

export interface WebSubGroup {
  WebSubGroupID: number;
  Position: number;
  Description: string;
  WebGroup: WebGroup;
}

export interface MainValue {
  NutritionID: number;
  Description: string;
  Text: string;
  ReferenceIntake?: any;
  ValueAsSold: string;
  ValueAsPortion?: any;
  ValueWhenPrepared?: any;
}

export interface SubValue {
  NutritionID: number;
  Description: string;
  Text: string;
  ReferenceIntake?: any;
  ValueAsSold: string;
  ValueAsPortion?: any;
  ValueWhenPrepared?: any;
}

export interface Nutrition {
  MainValue: MainValue;
  SubValues: SubValue[];
}

export interface SubGroup {
  SubGroupID: number;
  ExcludeFromPaas: boolean;
  Description: string;
  Hoofdgroepen?: any;
}

export interface Product {
  ProductID: number;
  CreatedAt: Date;
  ModifiedAt: Date;
  Number: string;
  MainDescription: string;
  SubDescription?: any;
  ExtraDescription?: any;
  CommercialContent: string;
  CommodityLawName: string;
  MinimumAge: number;
  AlcoholPercentage?: any;
  Durability: number;
  ScaleIndicator: boolean;
  WeightArticle: boolean;
  DepositMoney?: any;
  TaxID: number;
  OwnBrand: boolean;
  TemporaryNotAvailable: boolean;
  ProductOnline: boolean;
  ContentCE: number;
  CodeContentCE: number;
  UnitContentCE: string;
  PiecesInWeight?: any;
  WeightOfPeicesInWeight?: any;
  Biological: boolean;
  MinTemperature?: any;
  MaxTemperature?: any;
  FromPersons?: any;
  ToPersons?: any;
  Brand: string;
  MaxPerCustomer?: any;
  Location?: any;
  PublicationAfter?: any;
  ProductOffers: any[];
  ProductDeclarations: ProductDeclaration[];
  ProductBarcodes: ProductBarcode[];
  Tax: Tax;
  BrandInfo: BrandInfo;
  ProductPictures: ProductPicture[];
  ProductPrices: ProductPrice[];
  Logos: Logo[];
  WebSubGroups: WebSubGroup[];
  Nutrition: Nutrition[];
  SubGroup: SubGroup;
}
