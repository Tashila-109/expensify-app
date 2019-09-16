import selectedExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectedExpensesTotal([]);
    expect(0).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectedExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const res = selectedExpensesTotal(expenses);
    expect(res).toBe(114195);
});