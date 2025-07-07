{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE OverloadedStrings #-}

module Api.Types where

import GHC.Generics (Generic)
import Data.Aeson (ToJSON, FromJSON)
import Data.Time (UTCTime)

-- | Информация о главе
data Chapter = Chapter
    { chapterId :: String          -- ^ Уникальный идентификатор главы
    , chapterTitle :: String       -- ^ Заголовок главы
    , chapterContent :: String     -- ^ Содержимое главы (HTML)
    , chapterOrder :: Int          -- ^ Порядковый номер
    , chapterCompleted :: Bool     -- ^ Завершена ли глава пользователем
    } deriving (Show, Eq, Generic)

instance ToJSON Chapter
instance FromJSON Chapter

-- | Информация о пользователе
data User = User
    { userId :: Int                -- ^ Уникальный идентификатор пользователя
    , userName :: String           -- ^ Имя пользователя
    , userEmail :: String          -- ^ Email пользователя
    , userProgress :: [String]     -- ^ Список завершенных глав
    , userBookmarks :: [String]    -- ^ Список закладок
    , userCreatedAt :: UTCTime     -- ^ Время создания аккаунта
    } deriving (Show, Eq, Generic)

instance ToJSON User
instance FromJSON User

-- | Прогресс изучения
data Progress = Progress
    { progressUserId :: Int        -- ^ ID пользователя
    , progressCompleted :: [String] -- ^ Завершенные главы
    , progressBookmarks :: [String] -- ^ Закладки
    , progressTotal :: Int         -- ^ Общее количество глав
    , progressPercentage :: Float  -- ^ Процент завершения
    } deriving (Show, Eq, Generic)

instance ToJSON Progress
instance FromJSON Progress

-- | Запрос на обновление прогресса
data ProgressUpdate = ProgressUpdate
    { updateChapterId :: String    -- ^ ID главы для обновления
    , updateCompleted :: Bool      -- ^ Завершена ли глава
    , updateBookmarked :: Bool     -- ^ Добавлена ли в закладки
    } deriving (Show, Eq, Generic)

instance ToJSON ProgressUpdate
instance FromJSON ProgressUpdate

-- | Ответ API с ошибкой
data ApiError = ApiError
    { errorMessage :: String       -- ^ Сообщение об ошибке
    , errorCode :: Int            -- ^ Код ошибки
    } deriving (Show, Eq, Generic)

instance ToJSON ApiError
instance FromJSON ApiError

-- | Успешный ответ API
data ApiResponse a = ApiResponse
    { responseData :: a            -- ^ Данные ответа
    , responseMessage :: String    -- ^ Сообщение
    } deriving (Show, Eq, Generic)

instance ToJSON a => ToJSON (ApiResponse a)
instance FromJSON a => FromJSON (ApiResponse a) 