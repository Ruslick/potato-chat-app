### Здесь описаны правила для работы с кодом в нашем проекте. (Можно дополнять по необходимости)

### Неймы файлов
1. Для файлов стилей: name-name.styled.ts
2. Для файлов компонентов: name-name.component.tsx
3. Для файлов страниц: name-name.page.tsx
4. Для файлов контейнеров: name-name.container.tsx
5. Для файлов с типами: name-name.model.ts
6. Для вспомогательных файлов с функциями: name-name.helper.ts

### Экспорты
В проекте используем только Named exports
export const component = () => {}
или export {example} = objectName

Далее обязательно экспортим его из ближайшего index.ts файла как публичный интерфейс

index.ts
  import { component } from './component';
  export { component };

  или для типа:
  import { type } from './model/type';
  export type { type };

и используем его в других слоях уже из этого index.ts файла

### Неймы в коде
1. Для компонентов: NameNameComponent
2. Для страниц: NameNamePage
3. Для контейнеров: NameNameContainer
4. Для пропсов: NameNameProps
5. Для стилей: NameNameStyled
