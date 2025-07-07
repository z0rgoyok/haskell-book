{-# LANGUAGE OverloadedStrings #-}

module Api.Handlers where

import Web.Scotty
import Data.Text.Lazy (Text)
import qualified Data.Text.Lazy as T
import Control.Monad.IO.Class (liftIO)

import Api.Types
import Data.Chapter (sampleChapters, findChapterById)
import Data.User (sampleUsers, sampleProgress)

-- | Настройка всех API маршрутов
setupRoutes :: ScottyM ()
setupRoutes = do
    -- API для глав
    get "/api/chapters" handleGetAllChapters
    get "/api/chapters/:id" handleGetChapter
    
    -- API для пользователей
    get "/api/users/:id" handleGetUser
    get "/api/users/:id/progress" handleGetUserProgress
    
    -- API для прогресса
    get "/api/progress" handleGetProgress
    post "/api/progress/update" handleUpdateProgress
    
    -- API информация
    get "/api" handleApiInfo

-- | Получить все главы
handleGetAllChapters :: ActionM ()
handleGetAllChapters = do
    liftIO $ putStrLn "📚 Запрос всех глав"
    json $ ApiResponse sampleChapters "Список всех глав получен успешно"

-- | Получить конкретную главу по ID
handleGetChapter :: ActionM ()
handleGetChapter = do
    chapterId <- param "id"
    liftIO $ putStrLn $ "📖 Запрос главы: " ++ chapterId
    
    case findChapterById chapterId sampleChapters of
        Just chapter -> json $ ApiResponse chapter "Глава найдена"
        Nothing -> do
            status notFound404
            json $ ApiError "Глава не найдена" 404

-- | Получить информацию о пользователе
handleGetUser :: ActionM ()
handleGetUser = do
    userId <- param "id"
    liftIO $ putStrLn $ "👤 Запрос пользователя: " ++ show (userId :: Int)
    
    case filter (\u -> Data.User.userId u == userId) sampleUsers of
        [user] -> json $ ApiResponse user "Пользователь найден"
        [] -> do
            status notFound404
            json $ ApiError "Пользователь не найден" 404
        _ -> do
            status internalServerError500
            json $ ApiError "Внутренняя ошибка сервера" 500

-- | Получить прогресс пользователя
handleGetUserProgress :: ActionM ()
handleGetUserProgress = do
    userId <- param "id"
    liftIO $ putStrLn $ "📊 Запрос прогресса пользователя: " ++ show (userId :: Int)
    
    -- В реальном приложении здесь был бы запрос к БД
    json $ ApiResponse sampleProgress "Прогресс получен успешно"

-- | Получить общий прогресс
handleGetProgress :: ActionM ()
handleGetProgress = do
    liftIO $ putStrLn "📈 Запрос общего прогресса"
    json $ ApiResponse sampleProgress "Прогресс получен успешно"

-- | Обновить прогресс
handleUpdateProgress :: ActionM ()
handleUpdateProgress = do
    liftIO $ putStrLn "✏️ Обновление прогресса"
    
    -- Получаем данные из POST запроса
    updateData <- jsonData :: ActionM ProgressUpdate
    
    -- В реальном приложении здесь было бы обновление в БД
    liftIO $ putStrLn $ "Обновляем главу: " ++ updateChapterId updateData
    
    json $ ApiResponse ("Прогресс обновлен" :: Text) "Успешно"

-- | Информация об API
handleApiInfo :: ActionM ()
handleApiInfo = do
    liftIO $ putStrLn "ℹ️ Запрос информации об API"
    html $ T.concat
        [ "<h1>📚 Haskell Book API</h1>"
        , "<h2>Доступные endpoints:</h2>"
        , "<h3>Главы:</h3>"
        , "<ul>"
        , "<li><strong>GET</strong> <code>/api/chapters</code> - Получить все главы</li>"
        , "<li><strong>GET</strong> <code>/api/chapters/:id</code> - Получить главу по ID</li>"
        , "</ul>"
        , "<h3>Пользователи:</h3>"
        , "<ul>"
        , "<li><strong>GET</strong> <code>/api/users/:id</code> - Получить пользователя</li>"
        , "<li><strong>GET</strong> <code>/api/users/:id/progress</code> - Получить прогресс пользователя</li>"
        , "</ul>"
        , "<h3>Прогресс:</h3>"
        , "<ul>"
        , "<li><strong>GET</strong> <code>/api/progress</code> - Получить общий прогресс</li>"
        , "<li><strong>POST</strong> <code>/api/progress/update</code> - Обновить прогресс</li>"
        , "</ul>"
        , "<h3>Примеры запросов:</h3>"
        , "<ul>"
        , "<li><a href='/api/chapters'>Все главы</a></li>"
        , "<li><a href='/api/chapters/intro'>Глава 'intro'</a></li>"
        , "<li><a href='/api/progress'>Прогресс</a></li>"
        , "</ul>"
        ] 