import ArticleList from "./article-list";
import React from 'react';

function Articles() {
    return (
        <div className="flex flex-col gap-2 w-[60%]">
            <ArticleList />
            <ArticleList />
            <ArticleList />
        </div>
    );
}

export default Articles;