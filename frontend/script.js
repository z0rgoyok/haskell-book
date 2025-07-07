// Chapter content data
const chapters = {
    intro: {
        title: "Введение",
        content: `
            <h1>🚀 Haskell для мобильного разработчика</h1>
            <h2>Углубите понимание функционального программирования</h2>
            
            <div class="intro-highlight">
                <h3>🎯 Вы уже используете функциональные концепции!</h3>
                <p>Современная мобильная разработка полна функциональных идей:</p>
                <ul>
                    <li>🛡️ <strong>Kotlin null safety</strong> - Optional из функциональных языков</li>
                    <li>⚡ <strong>Swift Combine, Kotlin Flow</strong> - монады в действии</li>
                    <li>🔄 <strong>Redux, MVI паттерны</strong> - иммутабельные трансформации</li>
                    <li>🎨 <strong>SwiftUI, Compose</strong> - декларативный подход</li>
                    <li>🧩 <strong>Корутины, async/await</strong> - функциональная многопоточность</li>
                </ul>
                <p><em>Но что если понять эти концепции на глубинном уровне и применять еще эффективнее?</em></p>
            </div>

            <h2>🎯 Haskell - ваше секретное оружие</h2>
            
            <h3>Что такое Haskell?</h3>
            <p><strong>Haskell</strong> - это язык <em>чисто функционального программирования</em>, где:</p>
            <ul>
                <li>🔒 <strong>Иммутабельность</strong> - данные не изменяются, только создаются новые</li>
                <li>✨ <strong>Чистые функции</strong> - одинаковый вход всегда дает одинаковый выход</li>
                <li>🛡️ <strong>Типобезопасность</strong> - компилятор ловит ошибки до запуска</li>
                <li>🔗 <strong>Композиция</strong> - сложная логика строится из простых частей</li>
            </ul>

            <h3>🎪 Магия в действии</h3>
            <p>Представьте: вы пишете код, где <strong>невозможно</strong> получить NPE, где многопоточность <strong>безопасна по умолчанию</strong>, где баги <strong>ловятся на этапе компиляции</strong>!</p>

            <h2>💡 Зачем Haskell мобильному разработчику?</h2>

            <h3>🧠 Эволюция мышления</h3>
            <div class="comparison-block">
                <div class="before-after">
                    <div class="before">
                        <h4>✅ Современный Kotlin (уже хорошо):</h4>
                        <pre><code class="language-kotlin">// Kotlin - null safety и корутины
suspend fun loadUsers(): List<User> {
    return try {
        val response = apiService.getUsers()
        response.map { it.toUser() }
    } catch (e: Exception) {
        emptyList()
    }
}</code></pre>
                    </div>
                    <div class="after">
                        <h4>🚀 Haskell стиль (еще элегантнее):</h4>
                        <pre><code class="language-haskell">-- Haskell - композиция и выразительность
loadUsers :: IO (Either ApiError [User])
loadUsers = do
  response <- getUsers
  return $ fmap parseUser <$> response
  -- Ошибки в типах, композиция функций</code></pre>
                    </div>
                </div>
            </div>

            <h3>🔄 Углубление существующих знаний</h3>
            
            <div class="application-examples">
                <div class="example-card">
                    <h4>📱 State Management</h4>
                    <p>Уже используете <strong>Redux, MVI, Compose State</strong>? Haskell покажет математическую основу этих паттернов и научит создавать свои.</p>
                </div>
                
                <div class="example-card">
                    <h4>🌊 Reactive Programming</h4>
                    <p>Работаете с <strong>Flow, Combine, RxJava</strong>? Поймете, что такое монады на самом деле и как их применять эффективнее.</p>
                </div>
                
                <div class="example-card">
                    <h4>🎨 Декларативный UI</h4>
                    <p>Знакомы с <strong>SwiftUI, Jetpack Compose</strong>? Изучите принципы, которые сделали их возможными.</p>
                </div>
                
                <div class="example-card">
                    <h4>🔒 Типобезопасность</h4>
                    <p>Используете <strong>Kotlin null safety, Swift Optionals</strong>? Откройте для себя еще более мощные типовые системы.</p>
                </div>
            </div>

            <h2>🎯 Что вы получите после курса?</h2>

            <div class="benefits-grid">
                <div class="benefit">
                    <h4>🧩 Архитектурное мастерство</h4>
                    <p>Научитесь видеть паттерны за Redux, MVI и другими архитектурами, создавать свои элегантные решения</p>
                </div>
                
                <div class="benefit">
                    <h4>🛡️ Типовое моделирование</h4>
                    <p>Освоите advanced типы, которые делают невозможные состояния невыразимыми в коде</p>
                </div>
                
                <div class="benefit">
                    <h4>⚡ Функциональные абстракции</h4>
                    <p>Поймете монады, функторы и аппликативы не как магию, а как практические инструменты</p>
                </div>
                
                <div class="benefit">
                    <h4>🔧 Реальный проект</h4>
                    <p>Создадите <strong>Mobile Development Assistant</strong> - мощную CLI утилиту на чистом Haskell</p>
                </div>
            </div>

            <h2>🚦 Путешествие начинается</h2>
            
            <div class="journey-roadmap">
                <div class="roadmap-step">
                    <span class="step-number">1️⃣</span>
                    <div class="step-content">
                        <h4>Основы Haskell</h4>
                        <p>Синтаксис, типы, функции - строим фундамент</p>
                    </div>
                </div>
                
                <div class="roadmap-step">
                    <span class="step-number">2️⃣</span>
                    <div class="step-content">
                        <h4>Функциональное мышление</h4>
                        <p>Иммутабельность, композиция, высшие абстракции</p>
                    </div>
                </div>
                
                <div class="roadmap-step">
                    <span class="step-number">3️⃣</span>
                    <div class="step-content">
                        <h4>Практическое применение</h4>
                        <p>Парсинг, IO, создание реального приложения</p>
                    </div>
                </div>
                
                <div class="roadmap-step">
                    <span class="step-number">4️⃣</span>
                    <div class="step-content">
                        <h4>Мост в мобильную разработку</h4>
                        <p>Применение концепций в iOS, Android, Flutter</p>
                    </div>
                </div>
            </div>

            <div class="call-to-action">
                <h3>🎬 Готовы углубить мастерство?</h3>
                <p>Вы уже хороший разработчик. Теперь станьте <strong>великолепным</strong>! Поймите математические основы того, что уже используете каждый день.</p>
                <p><em>Добро пожаловать в мир элегантного кода!</em> 🚀</p>
            </div>

            <div class="pro-tip">
                <h4>💡 Совет профессионала</h4>
                <p>Haskell дополнит ваши знания Kotlin/Swift, а не заменит их. Каждая изученная концепция сделает вас лучше в вашем основном языке. Наслаждайтесь процессом открытия новых паттернов!</p>
            </div>
        `
    },
    ch1: {
        title: "1. Hello, Web Server",
        content: `
            <h1>1. Hello, Web Server</h1>
            <p>🎯 <strong>Цель:</strong> Создать самый простой веб-сервер на Haskell</p>
            
            <h2>🚀 Что мы будем строить</h2>
            <p>В этом курсе мы пошагово создадим веб-сервер для нашей книги по Haskell. Каждая глава добавит новую функциональность:</p>
            
            <div class="roadmap-step">
                <span class="step-number">📚</span>
                <div class="step-content">
                    <h4>Финальный результат</h4>
                    <p>Полноценный веб-сервер с API для управления главами, прогрессом и пользователями</p>
                </div>
            </div>

            <h2>🔧 Установка окружения</h2>
            <p>Для работы нам понадобится:</p>
            <ul>
                <li><strong>GHC</strong> - компилятор Haskell</li>
                <li><strong>Cabal</strong> - менеджер пакетов</li>
                <li><strong>Stack</strong> - инструмент для проектов</li>
            </ul>

            <h3>Установка через GHCup</h3>
            <pre><code class="language-bash"># Установка GHCup (менеджер версий Haskell)
curl --proto '=https' --tlsv1.2 -sSf https://get-ghcup.haskell.org | sh

# Перезапуск терминала, затем:
ghcup install ghc 9.4.7
ghcup install cabal 3.8.1.0
ghcup install stack 2.11.1</code></pre>

            <h2>🎯 Наша первая программа</h2>
            <p>Создадим простейший веб-сервер, который отвечает "Hello, World!":</p>
            
            <pre><code class="language-haskell">-- Main.hs
{-# LANGUAGE OverloadedStrings #-}
import Network.HTTP.Simple

main :: IO ()
main = do
    putStrLn "🚀 Запускаем веб-сервер..."
    putStrLn "Сервер доступен на http://localhost:8080"
    -- Пока что просто выводим сообщение
    putStrLn "Hello, Web Server!"</code></pre>

            <h2>🏗️ Структура проекта</h2>
            <p>Создадим структуру для нашего веб-сервера:</p>
            
            <pre><code class="language-bash">mkdir haskell-book-server
cd haskell-book-server
cabal init --simple
</code></pre>

            <div class="pro-tip">
                <h4>💡 Что дальше?</h4>
                <p>В следующей главе мы изучим функции и типы, которые понадобятся для создания API endpoints. Каждый endpoint будет функцией, которая принимает запрос и возвращает ответ!</p>
            </div>

            <h2>🎪 Попробуйте сами</h2>
            <p>Компилируем и запускаем:</p>
            <pre><code class="language-bash">ghc Main.hs
./Main</code></pre>
        `
    },
    ch2: {
        title: "2. Функции для API",
        content: `
            <h1>2. Функции для API</h1>
            <p>🎯 <strong>Цель:</strong> Изучить функции и типы для создания API endpoints</p>
            
            <h2>🔧 Функции как строительные блоки</h2>
            <p>Каждый API endpoint - это функция, которая:</p>
            <ul>
                <li>Принимает HTTP запрос</li>
                <li>Обрабатывает данные</li>
                <li>Возвращает HTTP ответ</li>
            </ul>

            <h3>Основные типы для веб-сервера</h3>
            <pre><code class="language-haskell">-- Типы для веб-приложения
type UserId = Int
type ChapterId = String
type Title = String
type Content = String

-- Функция для получения главы
getChapter :: ChapterId -> IO (Maybe Content)
getChapter chapterId = do
    -- Пока что возвращаем заглушку
    return $ Just "Содержимое главы"

-- Функция для API endpoint
handleChapterRequest :: ChapterId -> IO String
handleChapterRequest chapterId = do
    maybeContent <- getChapter chapterId
    case maybeContent of
        Just content -> return content
        Nothing -> return "Глава не найдена"</code></pre>

            <h2>🎨 Объявление функций</h2>
            <p>В Haskell функции объявляются очень просто:</p>
            
            <pre><code class="language-haskell">-- Тип функции указывается отдельно
greetUser :: String -> String
greetUser name = "Привет, " ++ name ++ "!"

-- Функция для API приветствия
apiGreeting :: String -> IO String
apiGreeting name = do
    let message = greetUser name
    putStrLn ("Обрабатываем запрос для: " ++ name)
    return message</code></pre>

            <h2>🔄 Функции с несколькими параметрами</h2>
            <p>Функции в Haskell каррированы - это означает, что можно применять их частично:</p>
            
            <pre><code class="language-haskell">-- Функция для создания ответа API
createResponse :: Int -> String -> String -> String
createResponse statusCode message body = 
    "Status: " ++ show statusCode ++ 
    ", Message: " ++ message ++ 
    ", Body: " ++ body

-- Частичное применение для создания готовых функций
successResponse :: String -> String -> String
successResponse = createResponse 200

errorResponse :: String -> String -> String
errorResponse = createResponse 400

-- Использование
userCreated = successResponse "User created" "{'id': 123}"
invalidData = errorResponse "Invalid data" "{'error': 'missing name'}"</code></pre>

            <h2>🧩 Композиция функций</h2>
            <p>Функции можно комбинировать для создания более сложных операций:</p>
            
            <pre><code class="language-haskell">-- Функции для обработки данных
validateUser :: String -> Bool
validateUser name = length name > 0

formatResponse :: String -> String
formatResponse content = "{'data': '" ++ content ++ "'}"

-- Композиция функций
processUserData :: String -> String
processUserData name = 
    if validateUser name 
    then formatResponse name
    else "{'error': 'Invalid user name'}"

-- Используя оператор композиции (.)
upperCaseResponse :: String -> String
upperCaseResponse = formatResponse . map toUpper</code></pre>

            <div class="application-examples">
                <div class="example-card">
                    <h4>🌐 Мобильная аналогия</h4>
                    <p>Функции в Haskell похожи на <strong>чистые функции в Redux</strong> - они принимают данные, обрабатывают их и возвращают результат без побочных эффектов.</p>
                </div>
            </div>

            <h2>🏗️ Строим первый endpoint</h2>
            <p>Создадим простую функцию для обработки запроса к API:</p>
            
            <pre><code class="language-haskell">-- Тип для HTTP метода
data HttpMethod = GET | POST | PUT | DELETE deriving (Show, Eq)

-- Тип для запроса
data Request = Request 
    { method :: HttpMethod
    , path :: String
    , body :: String
    } deriving (Show)

-- Функция для маршрутизации
routeRequest :: Request -> IO String
routeRequest req = case (method req, path req) of
    (GET, "/") -> return "Welcome to Haskell Book API!"
    (GET, "/chapters") -> return "List of chapters"
    (GET, path) -> if "/chapter/" \`isPrefixOf\` path
        then return "Chapter content"
        else return "404 Not Found"
    _ -> return "Method not allowed"

            <div class="pro-tip">
                <h4>💡 Что дальше?</h4>
                <p>В следующей главе мы изучим списки и JSON данные. Научимся работать с коллекциями данных, которые приходят в HTTP запросах!</p>
            </div>

            <h2>🎪 Попробуйте сами</h2>
            <pre><code class="language-haskell">-- Создайте функцию для обработки пользователей
handleUser :: String -> String -> String
handleUser action username = 
    "Action: " ++ action ++ ", User: " ++ username

-- Попробуйте:
-- handleUser "create" "john"
-- handleUser "delete" "jane"</code></pre>
        `
    },
    ch3: {
        title: "3. Списки и JSON данные",
        content: `
            <h1>3. Списки и JSON данные</h1>
            <p>🎯 <strong>Цель:</strong> Научиться работать с коллекциями данных для API</p>
            
            <h2>📋 Списки - основа данных API</h2>
            <p>В веб-API мы постоянно работаем с коллекциями:</p>
            <ul>
                <li>Список пользователей</li>
                <li>Список глав книги</li>
                <li>Список прогресса обучения</li>
            </ul>

            <h3>Работа со списками</h3>
            <pre><code class="language-haskell">-- Список глав
chapters :: [String]
chapters = ["intro", "ch1", "ch2", "ch3"]

-- Список пользователей
users :: [String]
users = ["alice", "bob", "charlie"]

-- Основные операции со списками
firstChapter = head chapters     -- "intro"
restChapters = tail chapters     -- ["ch1", "ch2", "ch3"]
chapterCount = length chapters   -- 4
isEmpty = null chapters          -- False</code></pre>

            <h2>🔄 Функции высшего порядка</h2>
            <p>Эти функции - основа для обработки API данных:</p>
            
            <pre><code class="language-haskell">-- map - преобразует каждый элемент (как в JS/Kotlin)
chapterTitles = map ("Chapter " ++) chapters
-- ["Chapter intro", "Chapter ch1", "Chapter ch2", "Chapter ch3"]

-- filter - фильтрует элементы
completedChapters = filter (\\ch -> length ch > 3) chapters
-- ["intro"]

-- Поиск элемента
findChapter :: String -> [String] -> Maybe String
findChapter target list = find (== target) list</code></pre>

            <h2>🏗️ Моделирование данных для API</h2>
            <p>Создадим типы данных для нашего API:</p>
            
            <pre><code class="language-haskell">-- Тип для главы
data Chapter = Chapter
    { chapterId :: String
    , chapterTitle :: String
    , chapterContent :: String
    , chapterCompleted :: Bool
    } deriving (Show)

-- Тип для пользователя
data User = User
    { userId :: Int
    , userName :: String
    , userProgress :: [String]  -- список изученных глав
    } deriving (Show)

-- Создаем данные
sampleChapters :: [Chapter]
sampleChapters = 
    [ Chapter "intro" "Введение" "Содержание введения" False
    , Chapter "ch1" "Hello World" "Первая программа" True
    , Chapter "ch2" "Функции" "Изучаем функции" False
    ]

sampleUsers :: [User]
sampleUsers = 
    [ User 1 "alice" ["intro", "ch1"]
    , User 2 "bob" ["intro"]
    ]</code></pre>

            <h2>🎨 API функции для работы с данными</h2>
            <p>Создадим функции для обработки запросов к API:</p>
            
            <pre><code class="language-haskell">-- Получить все главы
getAllChapters :: [Chapter] -> [Chapter]
getAllChapters = id  -- просто возвращаем все главы

-- Получить главу по ID
getChapterById :: String -> [Chapter] -> Maybe Chapter
getChapterById targetId chapters = 
    find (\\ch -> chapterId ch == targetId) chapters

-- Получить завершенные главы
getCompletedChapters :: [Chapter] -> [Chapter]
getCompletedChapters = filter chapterCompleted

-- Получить пользователя по ID
getUserById :: Int -> [User] -> Maybe User
getUserById targetId users = 
    find (\\u -> userId u == targetId) users

-- Получить прогресс пользователя
getUserProgress :: Int -> [User] -> [String]
getUserProgress targetId users = 
    case getUserById targetId users of
        Just user -> userProgress user
        Nothing -> []</code></pre>

            <div class="application-examples">
                <div class="example-card">
                    <h4>📱 Мобильная аналогия</h4>
                    <p>Функции map, filter, find в Haskell работают точно так же, как в <strong>Kotlin/Swift collections</strong>. Разница в том, что они чистые и иммутабельные!</p>
                </div>
            </div>

            <h2>🔗 Комбинирование операций</h2>
            <p>Объединяем функции для создания сложной логики:</p>
            
            <pre><code class="language-haskell">-- Получить названия незавершенных глав
getIncompleteChapterTitles :: [Chapter] -> [String]
getIncompleteChapterTitles chapters = 
    map chapterTitle $           -- извлекаем названия
    filter (not . chapterCompleted) $  -- берем незавершенные
    chapters

-- Получить статистику пользователя
getUserStats :: Int -> [User] -> [Chapter] -> String
getUserStats targetId users chapters = 
    let userChapters = getUserProgress targetId users
        totalChapters = length chapters
        completedCount = length userChapters
    in "Пользователь прошел " ++ show completedCount ++ 
       " из " ++ show totalChapters ++ " глав"</code></pre>

            <h2>🎪 Попробуйте сами</h2>
            <p>Поэкспериментируйте с функциями:</p>
            
            <pre><code class="language-haskell">-- Попробуйте эти выражения:
map (*2) [1, 2, 3, 4]
filter even [1, 2, 3, 4, 5, 6]
length [1, 2, 3]
head [1, 2, 3]
tail [1, 2, 3]
[1, 2] ++ [3, 4]</code></pre>

            <div class="pro-tip">
                <h4>💡 Что дальше?</h4>
                <p>В следующей главе мы изучим IO и монады. Научимся делать настоящие HTTP запросы и сохранять данные в файлы!</p>
            </div>
        `
    },
    ch4: {
        title: "4. Сопоставление с паттернами и guard-выражения",
        content: `
            <h1>4. Сопоставление с паттернами и guard-выражения</h1>
            <h2>Паттерн-матчинг</h2>
            <pre><code class="language-haskell">-- Сопоставление с паттернами
describe :: Int -> String
describe 0 = "Zero"
describe 1 = "One"
describe n = "Other number"</code></pre>
            <h2>Guard-выражения</h2>
            <pre><code class="language-haskell">-- Guard-выражения
grade :: Int -> String
grade score
    | score >= 90 = "A"
    | score >= 80 = "B"
    | score >= 70 = "C"
    | otherwise   = "F"</code></pre>
        `
    },
    ch5: {
        title: "5. Модули и импорт",
        content: `
            <h1>5. Модули и импорт</h1>
            <h2>Импорт модулей</h2>
            <pre><code class="language-haskell">-- Импорт всего модуля
import Data.List

-- Импорт конкретных функций
import Data.List (sort, reverse)

-- Импорт с алиасом
import qualified Data.Map as Map</code></pre>
            <h2>Создание модулей</h2>
            <pre><code class="language-haskell">-- MyModule.hs
module MyModule (myFunction, MyType) where

myFunction :: Int -> Int
myFunction x = x * 2</code></pre>
        `
    },
    ch6: {
        title: "6. Иммутабельность",
        content: `
            <h1>6. Иммутабельность</h1>
            <ul>
                <li>Переменные как в val из Kotlin или let в Swift</li>
                <li>Побочные эффекты — враг стабильности</li>
            </ul>
            <h2>Неизменяемые значения</h2>
            <p>В Haskell все значения неизменяемы по умолчанию. Это означает, что после создания значения его нельзя изменить.</p>
            <pre><code class="language-haskell">-- Значения неизменяемы
x = 42
-- x = 43  -- Ошибка компиляции!

-- Создание новых значений
numbers = [1, 2, 3]
moreNumbers = 0 : numbers  -- [0, 1, 2, 3]
-- numbers остается [1, 2, 3]</code></pre>
        `
    },
    ch7: {
        title: "7. Первый веб-сервер",
        content: `
            <h1>7. Первый веб-сервер</h1>
            <p>🎯 <strong>Цель:</strong> Создать настоящий HTTP сервер на Haskell</p>
            
            <h2>🚀 Момент истины!</h2>
            <p>Пора создать настоящий веб-сервер! Мы будем использовать библиотеку <strong>Scotty</strong> - простой и понятный веб-фреймворк для Haskell.</p>

            <h3>Настройка проекта</h3>
            <p>Создадим cabal проект и добавим зависимости:</p>
            
            <pre><code class="language-bash"># Создаем проект
mkdir haskell-book-server
cd haskell-book-server
cabal init --simple</code></pre>

            <h3>Файл cabal конфигурации</h3>
            <pre><code class="language-cabal">name: haskell-book-server
version: 0.1.0.0
build-type: Simple

executable haskell-book-server
    main-is: Main.hs
    build-depends: 
        base >=4.7 && <5,
        scotty,
        text,
        aeson,
        wai-cors
    default-language: Haskell2010</code></pre>

            <h2>📡 Создаем сервер</h2>
            <p>Наш первый веб-сервер с API для книги:</p>
            
            <pre><code class="language-haskell">{-# LANGUAGE OverloadedStrings #-}
module Main where

import Web.Scotty
import Data.Text.Lazy (Text)
import qualified Data.Text.Lazy as T
import Network.Wai.Middleware.Cors

-- Главная функция
main :: IO ()
main = do
    putStrLn "🚀 Запускаем Haskell Book Server..."
    putStrLn "Сервер доступен на: http://localhost:8080"
    scotty 8080 $ do
        -- Включаем CORS для фронтенда
        middleware $ cors $ const $ Just simpleCorsResourcePolicy
        
        -- Главная страница
        get "/" $ do
            html "Welcome to Haskell Book API!"
        
        -- API для получения всех глав
        get "/api/chapters" $ do
            json allChapters
        
        -- API для получения конкретной главы
        get "/api/chapters/:id" $ do
            chapterId <- param "id"
            case findChapter chapterId allChapters of
                Just chapter -> json chapter
                Nothing -> do
                    status notFound404
                    json ("Chapter not found" :: Text)
        
        -- API для получения прогресса
        get "/api/progress" $ do
            json userProgress</code></pre>

            <h2>🗄️ Данные для API</h2>
            <p>Создадим структуры данных для нашего API:</p>
            
            <pre><code class="language-haskell">{-# LANGUAGE DeriveGeneric #-}
import GHC.Generics
import Data.Aeson

-- Тип для главы
data Chapter = Chapter
    { chapterId :: String
    , chapterTitle :: String
    , chapterContent :: String
    , chapterCompleted :: Bool
    } deriving (Show, Generic)

-- Автоматическая генерация JSON сериализации
instance ToJSON Chapter
instance FromJSON Chapter

-- Тип для прогресса пользователя
data Progress = Progress
    { completedChapters :: [String]
    , totalChapters :: Int
    , progressPercentage :: Float
    } deriving (Show, Generic)

instance ToJSON Progress
instance FromJSON Progress</code></pre>

            <h2>📚 Данные глав</h2>
            <p>Создадим список глав для нашего API:</p>
            
            <pre><code class="language-haskell">-- Список всех глав
allChapters :: [Chapter]
allChapters = 
    [ Chapter "intro" "Введение" "Введение в Haskell" False
    , Chapter "ch1" "Hello, Web Server" "Первый веб-сервер" True
    , Chapter "ch2" "Функции для API" "Изучаем функции" False
    , Chapter "ch3" "Списки и JSON" "Работа с данными" False
    , Chapter "ch7" "Первый веб-сервер" "Создаем настоящий сервер" False
    ]

-- Поиск главы по ID
findChapter :: String -> [Chapter] -> Maybe Chapter
findChapter targetId chapters = 
    find (\ch -> chapterId ch == targetId) chapters

-- Прогресс пользователя (заглушка)
userProgress :: Progress
userProgress = Progress
    { completedChapters = ["intro", "ch1"]
    , totalChapters = length allChapters
    , progressPercentage = 40.0
    }</code></pre>

            <div class="application-examples">
                <div class="example-card">
                    <h4>🌐 Мобильная аналогия</h4>
                    <p>Этот веб-сервер работает как <strong>backend для мобильного приложения</strong>. API endpoints возвращают JSON данные, которые может использовать любой клиент!</p>
                </div>
            </div>

            <h2>🎪 Запускаем сервер</h2>
            <p>Установим зависимости и запустим:</p>
            
            <pre><code class="language-bash"># Устанавливаем зависимости
cabal build

# Запускаем сервер
cabal run

# Теперь можно протестировать API:
curl http://localhost:8080/api/chapters
curl http://localhost:8080/api/chapters/intro
curl http://localhost:8080/api/progress</code></pre>

            <h2>🔧 Тестирование API</h2>
            <p>Наш сервер отвечает на запросы:</p>
            
            <ul>
                <li><code>GET /</code> - Главная страница</li>
                <li><code>GET /api/chapters</code> - Список всех глав</li>
                <li><code>GET /api/chapters/:id</code> - Конкретная глава</li>
                <li><code>GET /api/progress</code> - Прогресс пользователя</li>
            </ul>

            <div class="pro-tip">
                <h4>💡 Что дальше?</h4>
                <p>В следующей главе мы добавим маршрутизацию и создадим полноценный REST API с поддержкой POST, PUT и DELETE запросов!</p>
            </div>

            <div class="call-to-action">
                <h3>🎉 Поздравляем!</h3>
                <p>Вы создали свой первый веб-сервер на Haskell! Теперь у вас есть работающий HTTP сервер, который может обслуживать API запросы.</p>
            </div>
        `
    },
    ch8: {
        title: "8. Алгебраические типы данных (ADT)",
        content: `
            <h1>8. Алгебраические типы данных (ADT)</h1>
            <ul>
                <li>data, type, newtype</li>
                <li>Конструкторы: data Result = Ok Int | Error String</li>
                <li>Аналогия с sealed class в Kotlin</li>
            </ul>
            <h2>Создание новых типов</h2>
            <pre><code class="language-haskell">-- Простой тип данных
data Color = Red | Green | Blue

-- Тип с параметрами
data Point = Point Double Double

-- Тип с несколькими конструкторами
data Shape = Circle Double | Rectangle Double Double</code></pre>
            <h2>Maybe и Either</h2>
            <pre><code class="language-haskell">-- Maybe для опциональных значений
data Maybe a = Nothing | Just a

-- Either для результатов с ошибками
data Either a b = Left a | Right b</code></pre>
        `
    },
    ch9: {
        title: "9. Паттерны в архитектуре",
        content: `
            <h1>9. Паттерны в архитектуре</h1>
            <ul>
                <li>Functor, Applicative, Monad: зачем и как</li>
                <li>Аналогия с RxSwift, Flow, Coroutines</li>
            </ul>
            <h2>Functor</h2>
            <pre><code class="language-haskell">-- Functor позволяет применять функции к значениям в контексте
fmap :: (a -> b) -> f a -> f b

-- Примеры
fmap (+1) (Just 5)     -- Just 6
fmap (*2) [1, 2, 3]    -- [2, 4, 6]</code></pre>
            <h2>Monad</h2>
            <pre><code class="language-haskell">-- Monad для работы с вычислениями в контексте
return :: a -> m a
(>>=) :: m a -> (a -> m b) -> m b</code></pre>
        `
    },
    ch10: {
        title: "10. IO и чистота",
        content: `
            <h1>10. IO и чистота</h1>
            <ul>
                <li>Почему IO — особенный</li>
                <li>Работа с файлами, консолью</li>
                <li>Чтение и запись как эффекты</li>
            </ul>
            <h2>IO-операции</h2>
            <pre><code class="language-haskell">-- Чтение из консоли
main :: IO ()
main = do
    putStrLn "Как тебя зовут?"
    name <- getLine
    putStrLn ("Привет, " ++ name ++ "!")

-- Работа с файлами
readFileContent :: FilePath -> IO String
readFileContent path = readFile path</code></pre>
        `
    },
    ch11: {
        title: "11. Парсинг и сериализация",
        content: `
            <h1>11. Парсинг и сериализация</h1>
            <ul>
                <li>Библиотека aeson</li>
                <li>JSON-парсинг: сравнение с Gson/Moshi/Swift Codable</li>
            </ul>
            <h2>Работа с JSON</h2>
            <pre><code class="language-haskell">-- Пример с aeson
{-# LANGUAGE DeriveGeneric #-}
import GHC.Generics
import Data.Aeson

data Person = Person
    { name :: String
    , age :: Int
    } deriving (Generic, Show)

instance ToJSON Person
instance FromJSON Person</code></pre>
        `
    },
    ch12: {
        title: "12. Пример мини-приложения CLI",
        content: `
            <h1>12. Пример мини-приложения CLI</h1>
            <ul>
                <li>TODO manager в терминале</li>
                <li>Структура проекта</li>
                <li>Чтение/запись JSON</li>
            </ul>
            <h2>Структура приложения</h2>
            <pre><code class="language-haskell">-- Main.hs
module Main where

import System.Environment
import Data.Aeson
import qualified Data.ByteString.Lazy as B

data Task = Task
    { taskId :: Int
    , taskText :: String
    , taskDone :: Bool
    } deriving (Show, Generic)

instance ToJSON Task
instance FromJSON Task

main :: IO ()
main = do
    args <- getArgs
    case args of
        ["add", task] -> addTask task
        ["list"] -> listTasks
        ["done", taskId] -> markDone (read taskId)
        _ -> putStrLn "Usage: todo [add|list|done]"</code></pre>
        `
    },
    ch13: {
        title: "13. Связывание Haskell с мобильной платформой",
        content: `
            <h1>13. Связывание Haskell с мобильной платформой</h1>
            <ul>
                <li>Что такое GHCJS и Haskell-to-JS</li>
                <li>Haskell в качестве генератора логики</li>
                <li>Возможность писать бизнес-логику, генерировать shared-модули</li>
            </ul>
            <h2>GHCJS</h2>
            <p>GHCJS компилирует Haskell код в JavaScript, позволяя использовать Haskell в веб-приложениях.</p>
            <h2>Генерация кода</h2>
            <p>Haskell может генерировать код для мобильных платформ, обеспечивая единую бизнес-логику.</p>
        `
    },
    ch14: {
        title: "14. FRP (Functional Reactive Programming)",
        content: `
            <h1>14. FRP (Functional Reactive Programming)</h1>
            <ul>
                <li>Что такое FRP</li>
                <li>Сравнение с RxSwift и Kotlin Flow</li>
                <li>Библиотеки: reflex, reactive-banana</li>
            </ul>
            <h2>Основы FRP</h2>
            <p>FRP — это парадигма программирования для работы с асинхронными событиями и потоками данных.</p>
            <h2>Сравнение с мобильными платформами</h2>
            <p>FRP в Haskell аналогично RxSwift в iOS и Kotlin Flow в Android — позволяет элегантно работать с асинхронными операциями.</p>
        `
    },
    ch15: {
        title: "15. Где применять Haskell?",
        content: `
            <h1>15. Где применять Haskell?</h1>
            <ul>
                <li>Парсеры, компиляторы, анализаторы логики</li>
                <li>Инструменты для CI/CD и DevOps</li>
                <li>Генераторы кода и логику для общего кода</li>
            </ul>
            <h2>Практические применения</h2>
            <p>Haskell отлично подходит для задач, требующих высокой надежности и корректности:</p>
            <ul>
                <li>Финансовые системы</li>
                <li>Криптография</li>
                <li>Системы автоматизации</li>
                <li>Инструменты разработки</li>
            </ul>
        `
    },
    ch16: {
        title: "16. Ресурсы",
        content: `
            <h1>16. Ресурсы</h1>
            <ul>
                <li>Книги: "Learn You a Haskell", "Real World Haskell"</li>
                <li>Курсы: Haskell MOOC, Exercism</li>
                <li>Практика: Advent of Code, Codewars</li>
            </ul>
            <h2>Рекомендуемые материалы</h2>
            <h3>Книги</h3>
            <ul>
                <li><strong>Learn You a Haskell for Great Good!</strong> — отличная книга для начинающих</li>
                <li><strong>Real World Haskell</strong> — практические примеры применения</li>
                <li><strong>Haskell Programming from First Principles</strong> — глубокое изучение</li>
            </ul>
            <h3>Онлайн-курсы</h3>
            <ul>
                <li><strong>Haskell MOOC</strong> — University of Helsinki</li>
                <li><strong>Exercism</strong> — практические упражнения</li>
            </ul>
            <h3>Для практики</h3>
            <ul>
                <li><strong>Advent of Code</strong> — ежегодные задачи по программированию</li>
                <li><strong>Codewars</strong> — задачи разного уровня сложности</li>
            </ul>
        `
    }
};

// App state
let currentChapter = 'intro';
let progress = JSON.parse(localStorage.getItem('haskell-progress') || '{}');
let bookmarks = JSON.parse(localStorage.getItem('haskell-bookmarks') || '[]');

// Chapter order
const chapterOrder = ['intro', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6', 'ch7', 'ch8', 'ch9', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14', 'ch15', 'ch16'];

// DOM elements
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menu-toggle');
const chapterContent = document.getElementById('chapter-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const completeBtn = document.getElementById('complete-btn');
const bookmarkBtn = document.getElementById('bookmark-btn');
const progressFill = document.getElementById('overall-progress');
const progressText = document.getElementById('progress-text');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadChapter(currentChapter);
    updateProgress();
    updateNavigationButtons();
    bindEvents();
});

// Load chapter content
function loadChapter(chapterId) {
    const chapter = chapters[chapterId];
    if (!chapter) return;

    currentChapter = chapterId;
    chapterContent.innerHTML = chapter.content;

    // Update active navigation item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-chapter="${chapterId}"]`).classList.add('active');

    // Update action buttons
    updateActionButtons();
    updateNavigationButtons();

    // Close mobile menu
    sidebar.classList.remove('open');

    // Scroll to top
    window.scrollTo(0, 0);

    // Re-highlight syntax with Prism.js
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // Add "Try" buttons to code examples
    addTryButtons();
}

// Update action buttons
function updateActionButtons() {
    const isCompleted = progress[currentChapter];
    const isBookmarked = bookmarks.includes(currentChapter);

    completeBtn.classList.toggle('completed', isCompleted);
    completeBtn.innerHTML = isCompleted
        ? '<i class="fas fa-check"></i> Изучено'
        : '<i class="fas fa-check"></i> Отметить как изученное';

    bookmarkBtn.classList.toggle('bookmarked', isBookmarked);
    bookmarkBtn.innerHTML = isBookmarked
        ? '<i class="fas fa-bookmark"></i> Убрать закладку'
        : '<i class="fas fa-bookmark"></i> Закладка';
}

// Update navigation buttons
function updateNavigationButtons() {
    const currentIndex = chapterOrder.indexOf(currentChapter);

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === chapterOrder.length - 1;
}

// Update progress
function updateProgress() {
    const completedCount = Object.keys(progress).filter(key => progress[key]).length;
    const totalCount = chapterOrder.length;
    const percentage = (completedCount / totalCount) * 100;

    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${completedCount} / ${totalCount} завершено`;

    // Update chapter status indicators
    chapterOrder.forEach(chapterId => {
        const statusElement = document.getElementById(`status-${chapterId}`);
        if (statusElement) {
            statusElement.classList.remove('completed', 'bookmarked');
            if (progress[chapterId]) {
                statusElement.classList.add('completed');
            } else if (bookmarks.includes(chapterId)) {
                statusElement.classList.add('bookmarked');
            }
        }
    });
}

// Save progress
function saveProgress() {
    localStorage.setItem('haskell-progress', JSON.stringify(progress));
    localStorage.setItem('haskell-bookmarks', JSON.stringify(bookmarks));
}

// Bind events
function bindEvents() {
    // Menu toggle
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const chapterId = item.dataset.chapter;
            loadChapter(chapterId);
        });
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        const currentIndex = chapterOrder.indexOf(currentChapter);
        if (currentIndex > 0) {
            loadChapter(chapterOrder[currentIndex - 1]);
        }
    });

    nextBtn.addEventListener('click', () => {
        const currentIndex = chapterOrder.indexOf(currentChapter);
        if (currentIndex < chapterOrder.length - 1) {
            loadChapter(chapterOrder[currentIndex + 1]);
        }
    });

    // Complete button
    completeBtn.addEventListener('click', () => {
        progress[currentChapter] = !progress[currentChapter];
        updateProgress();
        updateActionButtons();
        saveProgress();
    });

    // Bookmark button
    bookmarkBtn.addEventListener('click', () => {
        const index = bookmarks.indexOf(currentChapter);
        if (index > -1) {
            bookmarks.splice(index, 1);
        } else {
            bookmarks.push(currentChapter);
        }
        updateProgress();
        updateActionButtons();
        saveProgress();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key) {
            case 'ArrowLeft':
                if (!prevBtn.disabled) {
                    prevBtn.click();
                }
                break;
            case 'ArrowRight':
                if (!nextBtn.disabled) {
                    nextBtn.click();
                }
                break;
            case ' ':
                e.preventDefault();
                completeBtn.click();
                break;
            case 'b':
                bookmarkBtn.click();
                break;
        }
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
});

// Interactive REPL functionality
class HaskellREPL {
    constructor() {
        this.history = [];
        this.initializeREPL();
    }

    initializeREPL() {
        const replToggle = document.getElementById('repl-toggle');
        const replContainer = document.getElementById('repl-container');
        const replInput = document.getElementById('repl-input');
        const replSubmit = document.getElementById('repl-submit');
        const replClear = document.getElementById('repl-clear');
        const replHelp = document.getElementById('repl-help');

        // Toggle REPL visibility
        replToggle.addEventListener('click', () => {
            replContainer.classList.toggle('active');
            const isActive = replContainer.classList.contains('active');
            replToggle.innerHTML = isActive
                ? '<i class="fas fa-times"></i> Закрыть REPL'
                : '<i class="fas fa-code"></i> Попробовать код';
        });

        // Submit expression
        const submitExpression = () => {
            const expression = replInput.value.trim();
            if (expression) {
                this.evaluateExpression(expression);
                replInput.value = '';
            }
        };

        replSubmit.addEventListener('click', submitExpression);
        replInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitExpression();
            }
        });

        // Clear output
        replClear.addEventListener('click', () => {
            const replOutput = document.getElementById('repl-output');
            replOutput.innerHTML = `
                <div class="repl-welcome">
                    <p>🎉 Добро пожаловать в интерактивный Haskell REPL!</p>
                    <p>Попробуйте ввести: <code>2 + 3</code> или <code>map (*2) [1,2,3]</code></p>
                </div>
            `;
            this.history = [];
        });

        // Show help
        replHelp.addEventListener('click', () => {
            this.showHelp();
        });
    }

    evaluateExpression(expr) {
        const replOutput = document.getElementById('repl-output');

        // Add command to output
        const commandDiv = document.createElement('div');
        commandDiv.className = 'repl-entry';
        commandDiv.innerHTML = `
            <div class="repl-command">
                <span class="repl-prompt">ghci&gt;</span>
                <span>${this.escapeHtml(expr)}</span>
            </div>
        `;
        replOutput.appendChild(commandDiv);

        try {
            const result = this.evaluate(expr);
            const resultDiv = document.createElement('div');
            resultDiv.className = 'repl-result';
            resultDiv.textContent = result;
            replOutput.appendChild(resultDiv);
        } catch (error) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'repl-error';
            errorDiv.textContent = `Error: ${error.message}`;
            replOutput.appendChild(errorDiv);
        }

        // Auto-scroll to bottom
        replOutput.scrollTop = replOutput.scrollHeight;
        this.history.push(expr);
    }

    evaluate(expr) {
        // Simple Haskell expression evaluator
        expr = expr.trim();

        // Handle basic arithmetic
        if (/^\d+\s*[\+\-\*\/]\s*\d+$/.test(expr)) {
            return eval(expr).toString();
        }

        // Handle lists
        if (expr.match(/^\[[\d,\s]*\]$/)) {
            return expr;
        }

        // Handle simple function applications
        if (expr.includes('map')) {
            return this.evaluateMap(expr);
        }

        if (expr.includes('filter')) {
            return this.evaluateFilter(expr);
        }

        if (expr.includes('length')) {
            return this.evaluateLength(expr);
        }

        if (expr.includes('head')) {
            return this.evaluateHead(expr);
        }

        if (expr.includes('tail')) {
            return this.evaluateTail(expr);
        }

        // Handle basic values
        if (/^\d+$/.test(expr)) {
            return expr;
        }

        if (expr === 'True' || expr === 'False') {
            return expr;
        }

        if (expr.startsWith('"') && expr.endsWith('"')) {
            return expr;
        }

        // Handle simple expressions
        if (expr.includes('++')) {
            return this.evaluateConcat(expr);
        }

        // Default case
        throw new Error('Expression not supported in this simple REPL');
    }

    evaluateMap(expr) {
        // Simple map implementation: map (*2) [1,2,3]
        const mapMatch = expr.match(/map\s*\(\*(\d+)\)\s*(\[[\d,\s]*\])/);
        if (mapMatch) {
            const multiplier = parseInt(mapMatch[1]);
            const list = JSON.parse(mapMatch[2].replace(/\s/g, ''));
            const result = list.map(x => x * multiplier);
            return `[${result.join(',')}]`;
        }

        const mapAdd = expr.match(/map\s*\(\+(\d+)\)\s*(\[[\d,\s]*\])/);
        if (mapAdd) {
            const addend = parseInt(mapAdd[1]);
            const list = JSON.parse(mapAdd[2].replace(/\s/g, ''));
            const result = list.map(x => x + addend);
            return `[${result.join(',')}]`;
        }

        return 'map: function not fully implemented';
    }

    evaluateFilter(expr) {
        // Simple filter implementation: filter even [1,2,3,4]
        const evenMatch = expr.match(/filter\s+even\s*(\[[\d,\s]*\])/);
        if (evenMatch) {
            const list = JSON.parse(evenMatch[1].replace(/\s/g, ''));
            const result = list.filter(x => x % 2 === 0);
            return `[${result.join(',')}]`;
        }

        const oddMatch = expr.match(/filter\s+odd\s*(\[[\d,\s]*\])/);
        if (oddMatch) {
            const list = JSON.parse(oddMatch[1].replace(/\s/g, ''));
            const result = list.filter(x => x % 2 === 1);
            return `[${result.join(',')}]`;
        }

        return 'filter: function not fully implemented';
    }

    evaluateLength(expr) {
        const lengthMatch = expr.match(/length\s*(\[[\d,\s]*\])/);
        if (lengthMatch) {
            const list = JSON.parse(lengthMatch[1].replace(/\s/g, ''));
            return list.length.toString();
        }
        return 'length: invalid list';
    }

    evaluateHead(expr) {
        const headMatch = expr.match(/head\s*(\[[\d,\s]*\])/);
        if (headMatch) {
            const list = JSON.parse(headMatch[1].replace(/\s/g, ''));
            if (list.length === 0) throw new Error('empty list');
            return list[0].toString();
        }
        return 'head: invalid list';
    }

    evaluateTail(expr) {
        const tailMatch = expr.match(/tail\s*(\[[\d,\s]*\])/);
        if (tailMatch) {
            const list = JSON.parse(tailMatch[1].replace(/\s/g, ''));
            if (list.length === 0) throw new Error('empty list');
            const result = list.slice(1);
            return `[${result.join(',')}]`;
        }
        return 'tail: invalid list';
    }

    evaluateConcat(expr) {
        const concatMatch = expr.match(/(\[[\d,\s]*\])\s*\+\+\s*(\[[\d,\s]*\])/);
        if (concatMatch) {
            const list1 = JSON.parse(concatMatch[1].replace(/\s/g, ''));
            const list2 = JSON.parse(concatMatch[2].replace(/\s/g, ''));
            const result = list1.concat(list2);
            return `[${result.join(',')}]`;
        }
        return '++: invalid lists';
    }

    showHelp() {
        const replOutput = document.getElementById('repl-output');
        const helpDiv = document.createElement('div');
        helpDiv.className = 'repl-entry';
        helpDiv.innerHTML = `
            <div class="repl-welcome">
                <p><strong>📚 Доступные команды:</strong></p>
                <p><code>2 + 3</code> - Арифметические операции</p>
                <p><code>[1,2,3]</code> - Списки</p>
                <p><code>map (*2) [1,2,3]</code> - Применение функции к списку</p>
                <p><code>filter even [1,2,3,4]</code> - Фильтрация списка</p>
                <p><code>length [1,2,3]</code> - Длина списка</p>
                <p><code>head [1,2,3]</code> - Первый элемент</p>
                <p><code>tail [1,2,3]</code> - Все элементы кроме первого</p>
                <p><code>[1,2] ++ [3,4]</code> - Конкатенация списков</p>
            </div>
        `;
        replOutput.appendChild(helpDiv);
        replOutput.scrollTop = replOutput.scrollHeight;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Add interactive "Try" buttons to code examples
function addTryButtons() {
    const codeBlocks = document.querySelectorAll('pre code.language-haskell');

    codeBlocks.forEach((codeBlock, index) => {
        const pre = codeBlock.parentElement;

        // Skip if button already exists
        if (pre.querySelector('.try-code-btn')) return;

        const code = codeBlock.textContent.trim();

        // Only add button for simple, executable expressions
        const isExecutable = isExecutableCode(code);

        if (isExecutable) {
            const wrapper = document.createElement('div');
            wrapper.className = 'code-example-wrapper';

            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            const tryButton = document.createElement('button');
            tryButton.className = 'try-code-btn';
            tryButton.innerHTML = '<i class="fas fa-play"></i> Попробовать';
            tryButton.onclick = () => tryCode(getExecutableExpression(code));

            wrapper.appendChild(tryButton);
        }
    });
}

function isExecutableCode(code) {
    // Remove comments and extra whitespace
    const cleanCode = code.replace(/--.*$/gm, '').trim();

    // Check for simple expressions that can be executed
    const executablePatterns = [
        /^\d+\s*[\+\-\*\/]\s*\d+/,  // Arithmetic
        /^map\s*\(/,                 // map functions
        /^filter\s+/,                // filter functions
        /^length\s+/,                // length function
        /^head\s+/,                  // head function
        /^tail\s+/,                  // tail function
        /^\[[\d,\s]*\]\s*\+\+/,     // list concatenation
        /^\[[\d,\s]*\]$/,           // simple lists
        /^\d+$/,                     // numbers
        /^True|False$/               // booleans
    ];

    return executablePatterns.some(pattern => pattern.test(cleanCode));
}

function getExecutableExpression(code) {
    // Extract the first executable line from code
    const lines = code.split('\n');

    for (const line of lines) {
        const cleanLine = line.replace(/--.*$/, '').trim();
        if (cleanLine && !cleanLine.startsWith('--') && isExecutableCode(cleanLine)) {
            return cleanLine;
        }
    }

    return code.trim();
}

function tryCode(expression) {
    // Open REPL if not already open
    const replContainer = document.getElementById('repl-container');
    const replToggle = document.getElementById('repl-toggle');

    if (!replContainer.classList.contains('active')) {
        replContainer.classList.add('active');
        replToggle.innerHTML = '<i class="fas fa-times"></i> Закрыть REPL';
    }

    // Fill input and focus
    const replInput = document.getElementById('repl-input');
    replInput.value = expression;
    replInput.focus();

    // Scroll to REPL
    document.getElementById('repl-section').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });

    // Highlight the input briefly
    replInput.style.background = 'rgba(59, 130, 246, 0.2)';
    setTimeout(() => {
        replInput.style.background = 'transparent';
    }, 1000);
}

// Initialize REPL when page loads
document.addEventListener('DOMContentLoaded', () => {
    new HaskellREPL();
}); 