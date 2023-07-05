export enum SelectedPage {
  Home = 'inicio',
  Benefits = 'beneficios', 
  OurClasses = 'nossasaulas',
  ContactUs = 'contato'
} 

export interface BenefitType {
  icon:JSX.Element;
  title:string;
  description:string;
}

export interface ClassType{
  name:string;
  description?:string;
  image:string;
}