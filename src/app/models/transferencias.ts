export class Transferencias {
    id?: number;
    banco_emisor: string;
    bank_id: number;
    fecha_transferencia: Date;
    referencia: string;
    monto: number;
    estado: string;
    service_id: number;
    user_id: number;
    created_at?: Date;
    updated_at?: Date;
}
