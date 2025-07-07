{-# LANGUAGE OverloadedStrings #-}

module Data.Chapter where

import Api.Types (Chapter(..))
import Data.List (find)

-- | Список всех глав книги
sampleChapters :: [Chapter]
sampleChapters = 
    [ Chapter 
        { chapterId = "intro"
        , chapterTitle = "Введение"
        , chapterContent = "Введение в функциональное программирование на Haskell"
        , chapterOrder = 0
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch1"
        , chapterTitle = "1. Hello, Web Server"
        , chapterContent = "Создание первого веб-сервера на Haskell"
        , chapterOrder = 1
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch2"
        , chapterTitle = "2. Функции для API"
        , chapterContent = "Изучение функций и типов для создания API"
        , chapterOrder = 2
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch3"
        , chapterTitle = "3. Списки и JSON данные"
        , chapterContent = "Работа с коллекциями данных для API"
        , chapterOrder = 3
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch4"
        , chapterTitle = "4. IO и монады"
        , chapterContent = "Взаимодействие с внешним миром"
        , chapterOrder = 4
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch5"
        , chapterTitle = "5. Типы данных"
        , chapterContent = "Моделирование предметной области"
        , chapterOrder = 5
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch6"
        , chapterTitle = "6. Парсинг и сериализация"
        , chapterContent = "Работа с JSON и HTTP"
        , chapterOrder = 6
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch7"
        , chapterTitle = "7. Первый веб-сервер"
        , chapterContent = "Создание настоящего HTTP сервера"
        , chapterOrder = 7
        , chapterCompleted = True
        }
    , Chapter 
        { chapterId = "ch8"
        , chapterTitle = "8. Маршрутизация и REST API"
        , chapterContent = "Полноценные API endpoints"
        , chapterOrder = 8
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch9"
        , chapterTitle = "9. База данных"
        , chapterContent = "Сохранение состояния и персистентность"
        , chapterOrder = 9
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch10"
        , chapterTitle = "10. Аутентификация"
        , chapterContent = "Безопасность и авторизация"
        , chapterOrder = 10
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch11"
        , chapterTitle = "11. Тестирование"
        , chapterContent = "Качество кода и автотесты"
        , chapterOrder = 11
        , chapterCompleted = False
        }
    , Chapter 
        { chapterId = "ch12"
        , chapterTitle = "12. Финальный проект"
        , chapterContent = "Книга как веб-сервер"
        , chapterOrder = 12
        , chapterCompleted = False
        }
    ]

-- | Найти главу по ID
findChapterById :: String -> [Chapter] -> Maybe Chapter
findChapterById targetId chapters = 
    find (\ch -> chapterId ch == targetId) chapters

-- | Получить завершенные главы
getCompletedChapters :: [Chapter] -> [Chapter]
getCompletedChapters = filter chapterCompleted

-- | Получить количество завершенных глав
getCompletedCount :: [Chapter] -> Int
getCompletedCount = length . getCompletedChapters

-- | Вычислить процент завершения
getCompletionPercentage :: [Chapter] -> Float
getCompletionPercentage chapters = 
    let completed = fromIntegral $ getCompletedCount chapters
        total = fromIntegral $ length chapters
    in if total > 0 then (completed / total) * 100 else 0 