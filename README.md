# React + ReduxToolkit + Styled-components + Typescript

### Структура проекта: 

- shared — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.(например, UIKit, libs, API)
- entities (сущности) — бизнес-сущности.(например, User, Product, Order)
- features (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.(например, SendComment, AddToCart, UsersSearch)
- widgets (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки(например, IssuesList, UserProfile).
- pages (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
- app — настройки, стили и провайдеры для всего приложения.

### Как разворачивать проект

git clone https://github.com/PotatoChat/PotatoChatApp.git -> npm install -> npm start