{-# LANGUAGE OverloadedStrings #-}

module Main where

import Web.Scotty
import Data.Text.Lazy (Text)
import Network.Wai.Middleware.Cors

import Api.Handlers (setupRoutes)
import Data.Chapter (sampleChapters)

-- | Главная функция приложения
main :: IO ()
main = do
    putStrLn "🚀 Запускаем Haskell Book Server..."
    putStrLn "Сервер доступен на: http://localhost:8080"
    putStrLn "API документация: http://localhost:8080/api"
    
    scotty 8080 $ do
        -- Включаем CORS для фронтенда
        middleware $ cors $ const $ Just simpleCorsResourcePolicy
            { corsRequestHeaders = ["Content-Type"]
            , corsMethods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
            }
        
        -- Главная страница
        get "/" $ do
            html $ mconcat
                [ "<h1>🚀 Haskell Book API</h1>"
                , "<p>Добро пожаловать в API сервер книги по Haskell!</p>"
                , "<h2>Доступные endpoints:</h2>"
                , "<ul>"
                , "<li><a href='/api/chapters'>GET /api/chapters</a> - Все главы</li>"
                , "<li>GET /api/chapters/:id - Конкретная глава</li>"
                , "<li>GET /api/progress - Прогресс пользователя</li>"
                , "</ul>"
                ]
        
        -- Настраиваем все API маршруты
        setupRoutes 