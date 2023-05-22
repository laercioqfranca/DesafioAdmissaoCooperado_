import { InfoCooperadoData } from './infoCooperadoData';

export interface InfoCooperadoApiRest {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: InfoCooperadoData[];
}
