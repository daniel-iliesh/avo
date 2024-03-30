/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StoreImport } from './routes/_store'
import { Route as AuthImport } from './routes/_auth'
import { Route as AdminImport } from './routes/_admin'
import { Route as IndexImport } from './routes/index'
import { Route as StoreHomeImport } from './routes/_store/home'
import { Route as StoreCollectionsImport } from './routes/_store/collections'
import { Route as AuthRegisterImport } from './routes/_auth/register'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as AdminDashboardImport } from './routes/_admin.dashboard'
import { Route as StoreProductsIndexImport } from './routes/_store/products/index'
import { Route as StoreCollectionsIndexImport } from './routes/_store/collections/index'
import { Route as StoreProductsIdImport } from './routes/_store/products/$id'
import { Route as StoreCollectionsIdImport } from './routes/_store/collections/$id'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const StoreRoute = StoreImport.update({
  id: '/_store',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  id: '/_admin',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StoreHomeRoute = StoreHomeImport.update({
  path: '/home',
  getParentRoute: () => StoreRoute,
} as any)

const StoreCollectionsRoute = StoreCollectionsImport.update({
  path: '/collections',
  getParentRoute: () => StoreRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/register',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

const AdminDashboardRoute = AdminDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AdminRoute,
} as any)

const StoreProductsIndexRoute = StoreProductsIndexImport.update({
  path: '/products/',
  getParentRoute: () => StoreRoute,
} as any)

const StoreCollectionsIndexRoute = StoreCollectionsIndexImport.update({
  path: '/',
  getParentRoute: () => StoreCollectionsRoute,
} as any)

const StoreProductsIdRoute = StoreProductsIdImport.update({
  path: '/products/$id',
  getParentRoute: () => StoreRoute,
} as any)

const StoreCollectionsIdRoute = StoreCollectionsIdImport.update({
  path: '/$id',
  getParentRoute: () => StoreCollectionsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_admin': {
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_store': {
      preLoaderRoute: typeof StoreImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/_admin/dashboard': {
      preLoaderRoute: typeof AdminDashboardImport
      parentRoute: typeof AdminImport
    }
    '/_auth/login': {
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/register': {
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof AuthImport
    }
    '/_store/collections': {
      preLoaderRoute: typeof StoreCollectionsImport
      parentRoute: typeof StoreImport
    }
    '/_store/home': {
      preLoaderRoute: typeof StoreHomeImport
      parentRoute: typeof StoreImport
    }
    '/_store/collections/$id': {
      preLoaderRoute: typeof StoreCollectionsIdImport
      parentRoute: typeof StoreCollectionsImport
    }
    '/_store/products/$id': {
      preLoaderRoute: typeof StoreProductsIdImport
      parentRoute: typeof StoreImport
    }
    '/_store/collections/': {
      preLoaderRoute: typeof StoreCollectionsIndexImport
      parentRoute: typeof StoreCollectionsImport
    }
    '/_store/products/': {
      preLoaderRoute: typeof StoreProductsIndexImport
      parentRoute: typeof StoreImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AdminRoute.addChildren([AdminDashboardRoute]),
  AuthRoute.addChildren([AuthLoginRoute, AuthRegisterRoute]),
  StoreRoute.addChildren([
    StoreCollectionsRoute.addChildren([
      StoreCollectionsIdRoute,
      StoreCollectionsIndexRoute,
    ]),
    StoreHomeRoute,
    StoreProductsIdRoute,
    StoreProductsIndexRoute,
  ]),
  AboutLazyRoute,
])

/* prettier-ignore-end */
