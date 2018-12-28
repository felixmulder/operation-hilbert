{-# LANGUAGE OverloadedStrings #-}
import           Hakyll

main :: IO ()
main = hakyll $ do
  match "images/*" $ do
    route   idRoute
    compile copyFileCompiler

  match "js/*" $ do
    route   idRoute
    compile copyFileCompiler

  match "css/*" $ do
    route   idRoute
    compile compressCssCompiler

  match "posts/*" $ do
    route $ setExtension "html"
    compile $ pandocCompiler
      >>= loadAndApplyTemplate "templates/post.html"    postCtx
      >>= loadAndApplyTemplate "templates/default.html" postCtx
      >>= relativizeUrls

  match "*.md" $ do
    route $ setExtension "html"
    compile $ pandocCompiler
      >>= applyAsTemplate defaultContext
      >>= loadAndApplyTemplate "templates/default.html" defaultContext
      >>= relativizeUrls

  match "survey.html" $ do
    route idRoute
    compile $ getResourceBody
      >>= applyAsTemplate defaultContext
      >>= loadAndApplyTemplate "templates/survey.html" defaultContext
      >>= relativizeUrls

  match "templates/*" $ compile templateCompiler

postCtx :: Context String
postCtx =
  dateField "date" "%B %e, %Y" <> defaultContext
