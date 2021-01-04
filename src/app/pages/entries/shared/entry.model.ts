import { Category } from '../../categories/shared/category.model';

export class Entry {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public amount?: string,
    public date?: string,
    public type?: string,
    public paid?: boolean,
    public categoryId?: number,
    public catergory?: Category
  ) {}

  static types = {
    expense: 'Despesa',
    revenue: 'Receita',
  };

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}
