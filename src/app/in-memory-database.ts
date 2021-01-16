import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 0, name: 'Pagamentos', description: 'Pagamentos de contas' },
      { id: 1, name: 'Saúde', description: 'Plano de saúde e remédios' },
      { id: 2, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
      { id: 3, name: 'Salário', description: 'Recebimento do salário' },
      { id: 4, name: 'Freelas', description: 'Trabalhos como freelancer' },
    ];

    const entries: Entry[] = [
      new Entry(
        0,
        'Netflix',
        'Assinatura de streaming',
        '22,90',
        '07/01/2021',
        'expense',
        true,
        categories[2].id,
        categories[2]
      ),
      new Entry(
        1,
        'Gas de cozinha',
        'compra de gas',
        '70,5',
        '08/01/2021',
        'expense',
        true,
        categories[0].id,
        categories[0]
      ),
      new Entry(
        2,
        'Cinema',
        'Cinema com a familia',
        '135,90',
        '11/01/2021',
        'expense',
        true,
        categories[0].id,
        categories[0]
      ),
      new Entry(
        3,
        'Salário',
        'Recebimento do salário',
        '25.000,00',
        '11/01/2021',
        'revenue',
        true,
        categories[0].id,
        categories[0]
      ),
      new Entry(
        4,
        'Cartão de crédito',
        'Pagamento de cartão de crédito',
        '470,59',
        '15/01/2021',
        'expense',
        false,
        categories[0].id,
        categories[0]
      ),

    ];

    return { categories, entries };
  }
}
