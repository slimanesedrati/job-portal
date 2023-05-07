type JobCompanyType = {
    name: string;
    location: number;
    logo: string;
}
export type SafeJobType = {
    id: number;
    title: string;
    salary: string;
    description: string;
    offer_type: string;
    sector: string;
    educationLevel: string;

    company: JobCompanyType;
    

    created_at: Date;
}
