export interface Pest{
  pest_name: string;
  management: string;
}

export interface PestImg{
  pest_name: string;
  img_path: string;
}

export interface PestSymptom{
  pest_name: string;
  symptom: string;
}

export interface Disease{
  disease_name: string;
  disease_type: string;
  causal_organism: string;
  management: string;
}

export interface DiseaseType{
  disease_type: string;
}

export interface DiseaseImg{
  disease_name: string;
  img_path: string;
}

export interface DiseaseSymptom{
  disease_name: string;
  symptom: string;
}

export interface SymptomCatagory{
  symptom: string;
  catagory: string;
}

export interface Symptom{
  symptom : string[];
}
