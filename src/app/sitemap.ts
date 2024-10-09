import { getPosts, getProjects } from '@/app/utils'
import { baseURL } from '@/app/resources'

export default async function sitemap() {
    let blogs = getPosts().map((post) => ({
        url: `${baseURL}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }))

    let works = getProjects().map((post) => ({
        url: `${baseURL}/work/${post.slug}`,
        lastModified: post.metadata.publishedAt,
    }))

    let routes = ['', '/blog', '/work'].map((route) => ({
        url: `${baseURL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs, ...works]
}