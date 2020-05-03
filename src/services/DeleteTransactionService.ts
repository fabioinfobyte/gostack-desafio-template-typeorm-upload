import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsReprository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsReprository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transactions does not exist.');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
