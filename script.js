// Chapter content data
const chapters = {
    intro: {
        title: "Введение",
        content: `
            <h1>Введение</h1>
            <ul>
                <li><strong>Что такое Haskell</strong>: язык чисто функционального программирования</li>
                <li><strong>Зачем он мобильному разработчику</strong>:
                    <ul>
                        <li>Лучше понять функции высшего порядка, чистоту, иммутабельность</li>
                        <li>Применять в архитектуре (MVVM, FRP)</li>
                        <li>Развить мышление, устойчивое к багам</li>
                    </ul>
                </li>
            </ul>
        `
    },
    ch1: {
        title: "1. Hello, Haskell",
        content: `
            <h1>1. Hello, Haskell</h1>
            <ul>
                <li>Установка GHC и GHCi</li>
                <li><code>main = putStrLn "Hello, World!"</code></li>
                <li>ghci как REPL</li>
            </ul>
            <h2>Установка</h2>
            <p>Для начала работы с Haskell нужно установить GHC (Glasgow Haskell Compiler) и GHCi (интерактивную оболочку).</p>
            <pre><code>-- Простейшая программа на Haskell
main :: IO ()
main = putStrLn "Hello, World!"</code></pre>
        `
    },
    ch2: {
        title: "2. Типы данных",
        content: `
            <h1>2. Типы данных</h1>
            <ul>
                <li>Int, Float, Bool, Char, String</li>
                <li>List: [Int], head, tail, map, filter</li>
                <li>Tuple: (Int, String)</li>
            </ul>
            <h2>Основные типы</h2>
            <pre><code>-- Числа
age :: Int
age = 25

price :: Float
price = 19.99

-- Булевы значения
isReady :: Bool
isReady = True

-- Символы и строки
initial :: Char
initial = 'D'

name :: String
name = "Denis"</code></pre>
            <h2>Списки</h2>
            <pre><code>-- Список чисел
numbers :: [Int]
numbers = [1, 2, 3, 4, 5]

-- Операции со списками
firstNumber = head numbers  -- 1
restNumbers = tail numbers  -- [2, 3, 4, 5]</code></pre>
        `
    },
    ch3: {
        title: "3. Функции",
        content: `
            <h1>3. Функции</h1>
            <ul>
                <li>Объявление функций</li>
                <li>Паттерн-матчинг</li>
                <li>Рекурсия vs циклы (аналог for, while)</li>
                <li>Частичное применение, каррирование</li>
            </ul>
            <h2>Объявление функций</h2>
            <pre><code>-- Простая функция
double :: Int -> Int
double x = x * 2

-- Функция с несколькими параметрами
add :: Int -> Int -> Int
add x y = x + y</code></pre>
            <h2>Рекурсия</h2>
            <pre><code>-- Факториал
factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n - 1)</code></pre>
        `
    },
    ch4: {
        title: "4. Сопоставление с паттернами и guard-выражения",
        content: `
            <h1>4. Сопоставление с паттернами и guard-выражения</h1>
            <h2>Паттерн-матчинг</h2>
            <pre><code>-- Сопоставление с паттернами
describe :: Int -> String
describe 0 = "Zero"
describe 1 = "One"
describe n = "Other number"</code></pre>
            <h2>Guard-выражения</h2>
            <pre><code>-- Guard-выражения
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
            <pre><code>-- Импорт всего модуля
import Data.List

-- Импорт конкретных функций
import Data.List (sort, reverse)

-- Импорт с алиасом
import qualified Data.Map as Map</code></pre>
            <h2>Создание модулей</h2>
            <pre><code>-- MyModule.hs
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
            <pre><code>-- Значения неизменяемы
x = 42
-- x = 43  -- Ошибка компиляции!

-- Создание новых значений
numbers = [1, 2, 3]
moreNumbers = 0 : numbers  -- [0, 1, 2, 3]
-- numbers остается [1, 2, 3]</code></pre>
        `
    },
    ch7: {
        title: "7. Функции высшего порядка",
        content: `
            <h1>7. Функции высшего порядка</h1>
            <ul>
                <li>map, filter, foldr и foldl</li>
                <li>Анонимные функции (\\x -> x + 1)</li>
                <li>Композиция функций ((.)</li>
            </ul>
            <h2>Основные функции</h2>
            <pre><code>-- map применяет функцию к каждому элементу списка
doubled = map (*2) [1, 2, 3, 4]  -- [2, 4, 6, 8]

-- filter отбирает элементы по условию
evens = filter even [1, 2, 3, 4, 5, 6]  -- [2, 4, 6]

-- fold сворачивает список в одно значение
sum' = foldl (+) 0 [1, 2, 3, 4]  -- 10</code></pre>
            <h2>Анонимные функции</h2>
            <pre><code>-- Lambda-функции
increment = map (\\x -> x + 1) [1, 2, 3]  -- [2, 3, 4]</code></pre>
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
            <pre><code>-- Простой тип данных
data Color = Red | Green | Blue

-- Тип с параметрами
data Point = Point Double Double

-- Тип с несколькими конструкторами
data Shape = Circle Double | Rectangle Double Double</code></pre>
            <h2>Maybe и Either</h2>
            <pre><code>-- Maybe для опциональных значений
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
            <pre><code>-- Functor позволяет применять функции к значениям в контексте
fmap :: (a -> b) -> f a -> f b

-- Примеры
fmap (+1) (Just 5)     -- Just 6
fmap (*2) [1, 2, 3]    -- [2, 4, 6]</code></pre>
            <h2>Monad</h2>
            <pre><code>-- Monad для работы с вычислениями в контексте
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
            <pre><code>-- Чтение из консоли
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
            <pre><code>-- Пример с aeson
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
            <pre><code>-- Main.hs
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