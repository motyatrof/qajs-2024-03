import { test, expect } from '@playwright/test';

test('Успешной авторизации', async ({ page }) => {
  await page.visit('https://appmost.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Номер телефона').click();
  await page.getByPlaceholder('Номер телефона').press('PageUp');
  await page.getByPlaceholder('Номер телефона').press('NumLock');
  await page.getByPlaceholder('Номер телефона').fill('+7 (914) 261-10-57');
  await page.getByLabel('Я соглашаюсь с Пользовательским соглашением и Политикой обработки персональных д').check();
  await page.getByRole('button', { name: 'Войти' }).click();
  await page.getByPlaceholder('Проверочный код').click();
  await page.getByPlaceholder('Проверочный код').fill('4839');
  await page.getByRole('button', { name: 'Подтвердить' }).click();
  await page.getByRole('button', { name: 'Да' }).click();
});

test('Смена геопозиции', async ({ page }) => {
  await page.goto('https://appmost.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Номер телефона').click();
  await page.getByPlaceholder('Номер телефона').fill('+7 (914) 261-10-57');
  await page.getByLabel('Я соглашаюсь с Пользовательским соглашением и Политикой обработки персональных д').check();
  await page.getByRole('button', { name: 'Войти' }).click();
  await page.getByPlaceholder('Проверочный код').click();
  await page.getByPlaceholder('Проверочный код').fill('4839');
  await page.getByRole('button', { name: 'Подтвердить' }).click();
  await page.getByRole('button', { name: 'Якутск' }).click();
  await page.getByRole('button', { name: 'Выбрать другое' }).click();
  await page.locator('#btnGeo').getByPlaceholder('Поиск').click();
  await page.locator('#btnGeo').getByPlaceholder('Поиск').fill('Покровск');
  await page.getByRole('button', { name: 'Хангаласский улус Покровск' }).click();
  });

  test('Результаты поиска', async ({ page }) => {
    await page.goto('https://appmost.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByPlaceholder('Номер телефона').click();
    await page.getByPlaceholder('Номер телефона').fill('+7 (914) 261-10-57');
    await page.getByLabel('Я соглашаюсь с Пользовательским соглашением и Политикой обработки персональных д').check();
    await page.getByRole('button', { name: 'Войти' }).click();
    await page.getByPlaceholder('Проверочный код').click();
    await page.getByPlaceholder('Проверочный код').fill('4839');
    await page.getByRole('button', { name: 'Подтвердить' }).click();
    await page.getByPlaceholder('Поиск').click();
    await page.getByRole('button', { name: 'Да' }).click();
    await page.locator('#headerMain').getByRole('link', { name: 'Афиша' }).click();
    await page.getByPlaceholder('Поиск').click();
    await page.getByPlaceholder('Поиск').fill('most fest');
    await page.getByPlaceholder('Поиск').press('Enter');
  });

  test('Страница партнера', async ({ page }) => {
    await page.goto('https://appmost.ru/');
    await page.getByRole('button', { name: 'Да' }).click();
    await page.getByRole('link', { name: 'Акции Наслаждайтесь выгодными покупками service-img' }).click();
    await page.locator('#headerCategory').getByRole('img').first().click();
    await page.getByRole('link', { name: 'Красота и уход' }).nth(1).click();
    await page.getByRole('link', { name: 'KINI Красота и уход' }).click();
  });

  test('Покупка подарочного сертфиката', async ({ page }) => {
    await page.goto('https://appmost.ru/');
    await page.locator('#headerMain').getByRole('link', { name: 'Сертификаты' }).click();
    await page.getByRole('main').getByRole('button', { name: 'Подарить сертификат' }).click();
    await page.getByPlaceholder('Номер телефона').click();
    await page.getByPlaceholder('Номер телефона').fill('+7 (914) 261-10-57');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('.bg-gray-bg > div:nth-child(2) > .flex').click();
    const page1 = await page1Promise;
    await page.getByLabel('Я соглашаюсь с Пользовательским соглашением и Политикой обработки персональных д').check();
    await page.getByRole('button', { name: 'Войти' }).click();
    await page.getByPlaceholder('Проверочный код').click();
    await page.getByPlaceholder('Проверочный код').fill('4839');
    await page.getByRole('button', { name: 'Подтвердить' }).click();
    await page.getByRole('main').getByRole('button', { name: 'Подарить сертификат' }).click();
    await page.locator('.design-image').click();
    await page.locator('.design-image').click();
    await page.getByRole('button', { name: 'дизайн' }).click();
    await page.locator('.certificate-next').click();
    await page.locator('.certificate-next').click();
    await page.getByRole('button', { name: 'Выбрать' }).click();
    await page.getByRole('textbox', { name: '0', exact: true }).click();
    await page.getByRole('textbox', { name: '0', exact: true }).fill('15000');
    await page.getByLabel('Я соглашаюсь с Пользовательским соглашением').check();
    await page.getByText('Оплатить Я соглашаюсь с Пользовательским соглашением').click();
    await page.getByRole('textbox', { name: 'Имя контактного лица' }).click();
    await page.getByRole('textbox', { name: 'Имя контактного лица' }).fill('Мотя');
    await page.getByRole('textbox', { name: 'Имя контактного лица' }).press('Tab');
    await page.getByRole('textbox', { name: 'Номер получателя' }).fill('+7 (914) 261-10-57');
    await page.getByRole('textbox', { name: 'Номер получателя' }).press('Tab');
    await page.getByRole('textbox', { name: 'Е-mail получателя' }).fill('antmotal@mail.ru');
    await page.getByRole('textbox', { name: 'Е-mail получателя' }).press('Tab');
    await page.getByRole('textbox', { name: 'Введите текст поздравления' }).press('Tab');
    await page.getByRole('link', { name: 'Принимаю' }).click();
    await page.getByRole('textbox', { name: 'Введите e-mail' }).click();
    await page.getByRole('textbox', { name: 'Е-mail получателя' }).click();
    await page.getByRole('textbox', { name: 'Введите e-mail' }).click();
    await page.getByRole('textbox', { name: 'Введите e-mail' }).fill('antmotal@mail.ru');
    await page.getByRole('button', { name: 'Оплатить' }).click();
  });
