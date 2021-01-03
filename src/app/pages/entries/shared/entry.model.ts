import { Category } from '../../categories/shared/category.model';

export class Entry {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public paid?: boolean,
    public date?: string,
    public amount?: string,
    public categoryId?: number,
    public catergory?: Category
  ) {}

  static types = {
    expense: 'Despesa',
    revenue: 'Receita',
  };

  getPaidText(): string {
    return this.paid ? 'Pago' : 'Pendente';
  }
}
