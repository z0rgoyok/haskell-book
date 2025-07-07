{-# LANGUAGE OverloadedStrings #-}

module Data.User where

import Api.Types (User(..), Progress(..))
import Data.Time (UTCTime, getCurrentTime)
import System.IO.Unsafe (unsafePerformIO)

-- | Создание времени для примера (в реальном коде так не делают!)
sampleTime :: UTCTime
sampleTime = unsafePerformIO getCurrentTime

-- | Тестовые пользователи
sampleUsers :: [User]
sampleUsers = 
    [ User 
        { userId = 1
        , userName = "alice"
        , userEmail = "alice@example.com"
        , userProgress = ["intro", "ch1", "ch7"]
        , userBookmarks = ["ch2", "ch5"]
        , userCreatedAt = sampleTime
        }
    , User 
        { userId = 2
        , userName = "bob"
        , userEmail = "bob@example.com"
        , userProgress = ["intro", "ch1"]
        , userBookmarks = ["ch3"]
        , userCreatedAt = sampleTime
        }
    , User 
        { userId = 3
        , userName = "charlie"
        , userEmail = "charlie@example.com"
        , userProgress = ["intro"]
        , userBookmarks = ["ch1", "ch2", "ch7"]
        , userCreatedAt = sampleTime
        }
    ]

-- | Пример прогресса для API
sampleProgress :: Progress
sampleProgress = Progress
    { progressUserId = 1
    , progressCompleted = ["intro", "ch1", "ch7"]
    , progressBookmarks = ["ch2", "ch5"]
    , progressTotal = 13  -- общее количество глав
    , progressPercentage = 23.1  -- 3 из 13 глав = ~23%
    }

-- | Найти пользователя по ID
findUserById :: Int -> [User] -> Maybe User
findUserById targetId users = 
    case filter (\u -> userId u == targetId) users of
        [user] -> Just user
        _ -> Nothing

-- | Получить прогресс пользователя
getUserProgressData :: Int -> [User] -> Maybe Progress
getUserProgressData targetId users = 
    case findUserById targetId users of
        Just user -> Just $ Progress
            { progressUserId = targetId
            , progressCompleted = userProgress user
            , progressBookmarks = userBookmarks user
            , progressTotal = 13
            , progressPercentage = calculateProgress (userProgress user)
            }
        Nothing -> Nothing

-- | Вычислить процент завершения
calculateProgress :: [String] -> Float
calculateProgress completed = 
    let completedCount = fromIntegral $ length completed
        totalChapters = 13.0  -- общее количество глав
    in (completedCount / totalChapters) * 100

-- | Добавить главу в прогресс пользователя
addChapterToProgress :: Int -> String -> [User] -> [User]
addChapterToProgress targetId chapterId users = 
    map updateUser users
  where
    updateUser user
        | userId user == targetId = user 
            { userProgress = chapterId : filter (/= chapterId) (userProgress user) }
        | otherwise = user

-- | Добавить закладку
addBookmark :: Int -> String -> [User] -> [User]
addBookmark targetId chapterId users = 
    map updateUser users
  where
    updateUser user
        | userId user == targetId = user 
            { userBookmarks = chapterId : filter (/= chapterId) (userBookmarks user) }
        | otherwise = user

-- | Удалить закладку
removeBookmark :: Int -> String -> [User] -> [User]
removeBookmark targetId chapterId users = 
    map updateUser users
  where
    updateUser user
        | userId user == targetId = user 
            { userBookmarks = filter (/= chapterId) (userBookmarks user) }
        | otherwise = user 