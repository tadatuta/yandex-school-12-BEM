# yandex-school-12-BEM

## Архитектура
В приложении существует общий код (уровень переопределения block) и три уровня переопределения для разработки и сборки проекта под разные устройства - mobile, desktop и tablet.


## Проблема
В dev-режиме все работает отлично, однако при сборке css из всех уровней переопределения сливается между собой. Перепробовал все что мог, начиная от сравнения с другими работами, до смены верии node.js, но несколько часов раскопок не привели к решению проблемы (((. Не помогает даже отключение уровней в .bemrc.js, их стили все равно попадают в сборку. 

В результате. чтобы нормально собрать dev, я, например, для сборки desktop, удалял папки mobile и tablet, и так по кругу. 