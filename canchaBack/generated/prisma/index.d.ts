
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model canchas
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type canchas = $Result.DefaultSelection<Prisma.$canchasPayload>
/**
 * Model categorias_cancha
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type categorias_cancha = $Result.DefaultSelection<Prisma.$categorias_canchaPayload>
/**
 * Model pagos
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type pagos = $Result.DefaultSelection<Prisma.$pagosPayload>
/**
 * Model reservas
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type reservas = $Result.DefaultSelection<Prisma.$reservasPayload>
/**
 * Model roles
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model usuarios
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const pagos_metodo_pago: {
  Tarjeta_de_Cr_dito: 'Tarjeta_de_Cr_dito',
  PSE: 'PSE',
  Efectivo: 'Efectivo'
};

export type pagos_metodo_pago = (typeof pagos_metodo_pago)[keyof typeof pagos_metodo_pago]


export const canchas_estado: {
  Disponible: 'Disponible',
  En_Mantenimiento: 'En_Mantenimiento',
  No_Disponible: 'No_Disponible'
};

export type canchas_estado = (typeof canchas_estado)[keyof typeof canchas_estado]


export const pagos_estado_pago: {
  Completado: 'Completado',
  Fallido: 'Fallido',
  Reembolsado: 'Reembolsado'
};

export type pagos_estado_pago = (typeof pagos_estado_pago)[keyof typeof pagos_estado_pago]


export const reservas_estado: {
  Pendiente_de_Pago: 'Pendiente_de_Pago',
  Confirmada: 'Confirmada',
  Cancelada: 'Cancelada',
  Completada: 'Completada'
};

export type reservas_estado = (typeof reservas_estado)[keyof typeof reservas_estado]

}

export type pagos_metodo_pago = $Enums.pagos_metodo_pago

export const pagos_metodo_pago: typeof $Enums.pagos_metodo_pago

export type canchas_estado = $Enums.canchas_estado

export const canchas_estado: typeof $Enums.canchas_estado

export type pagos_estado_pago = $Enums.pagos_estado_pago

export const pagos_estado_pago: typeof $Enums.pagos_estado_pago

export type reservas_estado = $Enums.reservas_estado

export const reservas_estado: typeof $Enums.reservas_estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Canchas
 * const canchas = await prisma.canchas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Canchas
   * const canchas = await prisma.canchas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.canchas`: Exposes CRUD operations for the **canchas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Canchas
    * const canchas = await prisma.canchas.findMany()
    * ```
    */
  get canchas(): Prisma.canchasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias_cancha`: Exposes CRUD operations for the **categorias_cancha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias_canchas
    * const categorias_canchas = await prisma.categorias_cancha.findMany()
    * ```
    */
  get categorias_cancha(): Prisma.categorias_canchaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagos`: Exposes CRUD operations for the **pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pagos.findMany()
    * ```
    */
  get pagos(): Prisma.pagosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservas`: Exposes CRUD operations for the **reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reservas.findMany()
    * ```
    */
  get reservas(): Prisma.reservasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    canchas: 'canchas',
    categorias_cancha: 'categorias_cancha',
    pagos: 'pagos',
    reservas: 'reservas',
    roles: 'roles',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "canchas" | "categorias_cancha" | "pagos" | "reservas" | "roles" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      canchas: {
        payload: Prisma.$canchasPayload<ExtArgs>
        fields: Prisma.canchasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.canchasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.canchasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload>
          }
          findFirst: {
            args: Prisma.canchasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.canchasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload>
          }
          findMany: {
            args: Prisma.canchasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload>[]
          }
          create: {
            args: Prisma.canchasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload>
          }
          createMany: {
            args: Prisma.canchasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.canchasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload>
          }
          update: {
            args: Prisma.canchasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload>
          }
          deleteMany: {
            args: Prisma.canchasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.canchasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.canchasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$canchasPayload>
          }
          aggregate: {
            args: Prisma.CanchasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCanchas>
          }
          groupBy: {
            args: Prisma.canchasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CanchasGroupByOutputType>[]
          }
          count: {
            args: Prisma.canchasCountArgs<ExtArgs>
            result: $Utils.Optional<CanchasCountAggregateOutputType> | number
          }
        }
      }
      categorias_cancha: {
        payload: Prisma.$categorias_canchaPayload<ExtArgs>
        fields: Prisma.categorias_canchaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categorias_canchaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categorias_canchaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload>
          }
          findFirst: {
            args: Prisma.categorias_canchaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categorias_canchaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload>
          }
          findMany: {
            args: Prisma.categorias_canchaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload>[]
          }
          create: {
            args: Prisma.categorias_canchaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload>
          }
          createMany: {
            args: Prisma.categorias_canchaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categorias_canchaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload>
          }
          update: {
            args: Prisma.categorias_canchaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload>
          }
          deleteMany: {
            args: Prisma.categorias_canchaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categorias_canchaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categorias_canchaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorias_canchaPayload>
          }
          aggregate: {
            args: Prisma.Categorias_canchaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias_cancha>
          }
          groupBy: {
            args: Prisma.categorias_canchaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Categorias_canchaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categorias_canchaCountArgs<ExtArgs>
            result: $Utils.Optional<Categorias_canchaCountAggregateOutputType> | number
          }
        }
      }
      pagos: {
        payload: Prisma.$pagosPayload<ExtArgs>
        fields: Prisma.pagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findFirst: {
            args: Prisma.pagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findMany: {
            args: Prisma.pagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          create: {
            args: Prisma.pagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          createMany: {
            args: Prisma.pagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          update: {
            args: Prisma.pagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          deleteMany: {
            args: Prisma.pagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          aggregate: {
            args: Prisma.PagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagos>
          }
          groupBy: {
            args: Prisma.pagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagosCountArgs<ExtArgs>
            result: $Utils.Optional<PagosCountAggregateOutputType> | number
          }
        }
      }
      reservas: {
        payload: Prisma.$reservasPayload<ExtArgs>
        fields: Prisma.reservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findFirst: {
            args: Prisma.reservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findMany: {
            args: Prisma.reservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          create: {
            args: Prisma.reservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          createMany: {
            args: Prisma.reservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          update: {
            args: Prisma.reservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          deleteMany: {
            args: Prisma.reservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          aggregate: {
            args: Prisma.ReservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservas>
          }
          groupBy: {
            args: Prisma.reservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservasCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    canchas?: canchasOmit
    categorias_cancha?: categorias_canchaOmit
    pagos?: pagosOmit
    reservas?: reservasOmit
    roles?: rolesOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CanchasCountOutputType
   */

  export type CanchasCountOutputType = {
    reservas: number
  }

  export type CanchasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | CanchasCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * CanchasCountOutputType without action
   */
  export type CanchasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanchasCountOutputType
     */
    select?: CanchasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CanchasCountOutputType without action
   */
  export type CanchasCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
  }


  /**
   * Count Type Categorias_canchaCountOutputType
   */

  export type Categorias_canchaCountOutputType = {
    canchas: number
  }

  export type Categorias_canchaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canchas?: boolean | Categorias_canchaCountOutputTypeCountCanchasArgs
  }

  // Custom InputTypes
  /**
   * Categorias_canchaCountOutputType without action
   */
  export type Categorias_canchaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorias_canchaCountOutputType
     */
    select?: Categorias_canchaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Categorias_canchaCountOutputType without action
   */
  export type Categorias_canchaCountOutputTypeCountCanchasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: canchasWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    usuarios: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolesCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    reservas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | UsuariosCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model canchas
   */

  export type AggregateCanchas = {
    _count: CanchasCountAggregateOutputType | null
    _avg: CanchasAvgAggregateOutputType | null
    _sum: CanchasSumAggregateOutputType | null
    _min: CanchasMinAggregateOutputType | null
    _max: CanchasMaxAggregateOutputType | null
  }

  export type CanchasAvgAggregateOutputType = {
    id_cancha: number | null
    id_categoria: number | null
    tarifa_por_hora: Decimal | null
  }

  export type CanchasSumAggregateOutputType = {
    id_cancha: number | null
    id_categoria: number | null
    tarifa_por_hora: Decimal | null
  }

  export type CanchasMinAggregateOutputType = {
    id_cancha: number | null
    id_categoria: number | null
    nombre: string | null
    descripcion: string | null
    tarifa_por_hora: Decimal | null
    estado: $Enums.canchas_estado | null
  }

  export type CanchasMaxAggregateOutputType = {
    id_cancha: number | null
    id_categoria: number | null
    nombre: string | null
    descripcion: string | null
    tarifa_por_hora: Decimal | null
    estado: $Enums.canchas_estado | null
  }

  export type CanchasCountAggregateOutputType = {
    id_cancha: number
    id_categoria: number
    nombre: number
    descripcion: number
    tarifa_por_hora: number
    estado: number
    _all: number
  }


  export type CanchasAvgAggregateInputType = {
    id_cancha?: true
    id_categoria?: true
    tarifa_por_hora?: true
  }

  export type CanchasSumAggregateInputType = {
    id_cancha?: true
    id_categoria?: true
    tarifa_por_hora?: true
  }

  export type CanchasMinAggregateInputType = {
    id_cancha?: true
    id_categoria?: true
    nombre?: true
    descripcion?: true
    tarifa_por_hora?: true
    estado?: true
  }

  export type CanchasMaxAggregateInputType = {
    id_cancha?: true
    id_categoria?: true
    nombre?: true
    descripcion?: true
    tarifa_por_hora?: true
    estado?: true
  }

  export type CanchasCountAggregateInputType = {
    id_cancha?: true
    id_categoria?: true
    nombre?: true
    descripcion?: true
    tarifa_por_hora?: true
    estado?: true
    _all?: true
  }

  export type CanchasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which canchas to aggregate.
     */
    where?: canchasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of canchas to fetch.
     */
    orderBy?: canchasOrderByWithRelationInput | canchasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: canchasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned canchas
    **/
    _count?: true | CanchasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CanchasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CanchasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CanchasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CanchasMaxAggregateInputType
  }

  export type GetCanchasAggregateType<T extends CanchasAggregateArgs> = {
        [P in keyof T & keyof AggregateCanchas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCanchas[P]>
      : GetScalarType<T[P], AggregateCanchas[P]>
  }




  export type canchasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: canchasWhereInput
    orderBy?: canchasOrderByWithAggregationInput | canchasOrderByWithAggregationInput[]
    by: CanchasScalarFieldEnum[] | CanchasScalarFieldEnum
    having?: canchasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CanchasCountAggregateInputType | true
    _avg?: CanchasAvgAggregateInputType
    _sum?: CanchasSumAggregateInputType
    _min?: CanchasMinAggregateInputType
    _max?: CanchasMaxAggregateInputType
  }

  export type CanchasGroupByOutputType = {
    id_cancha: number
    id_categoria: number
    nombre: string
    descripcion: string | null
    tarifa_por_hora: Decimal
    estado: $Enums.canchas_estado
    _count: CanchasCountAggregateOutputType | null
    _avg: CanchasAvgAggregateOutputType | null
    _sum: CanchasSumAggregateOutputType | null
    _min: CanchasMinAggregateOutputType | null
    _max: CanchasMaxAggregateOutputType | null
  }

  type GetCanchasGroupByPayload<T extends canchasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CanchasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CanchasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CanchasGroupByOutputType[P]>
            : GetScalarType<T[P], CanchasGroupByOutputType[P]>
        }
      >
    >


  export type canchasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cancha?: boolean
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    tarifa_por_hora?: boolean
    estado?: boolean
    categorias_cancha?: boolean | categorias_canchaDefaultArgs<ExtArgs>
    reservas?: boolean | canchas$reservasArgs<ExtArgs>
    _count?: boolean | CanchasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canchas"]>



  export type canchasSelectScalar = {
    id_cancha?: boolean
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    tarifa_por_hora?: boolean
    estado?: boolean
  }

  export type canchasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cancha" | "id_categoria" | "nombre" | "descripcion" | "tarifa_por_hora" | "estado", ExtArgs["result"]["canchas"]>
  export type canchasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias_cancha?: boolean | categorias_canchaDefaultArgs<ExtArgs>
    reservas?: boolean | canchas$reservasArgs<ExtArgs>
    _count?: boolean | CanchasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $canchasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "canchas"
    objects: {
      categorias_cancha: Prisma.$categorias_canchaPayload<ExtArgs>
      reservas: Prisma.$reservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cancha: number
      id_categoria: number
      nombre: string
      descripcion: string | null
      tarifa_por_hora: Prisma.Decimal
      estado: $Enums.canchas_estado
    }, ExtArgs["result"]["canchas"]>
    composites: {}
  }

  type canchasGetPayload<S extends boolean | null | undefined | canchasDefaultArgs> = $Result.GetResult<Prisma.$canchasPayload, S>

  type canchasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<canchasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CanchasCountAggregateInputType | true
    }

  export interface canchasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['canchas'], meta: { name: 'canchas' } }
    /**
     * Find zero or one Canchas that matches the filter.
     * @param {canchasFindUniqueArgs} args - Arguments to find a Canchas
     * @example
     * // Get one Canchas
     * const canchas = await prisma.canchas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends canchasFindUniqueArgs>(args: SelectSubset<T, canchasFindUniqueArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Canchas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {canchasFindUniqueOrThrowArgs} args - Arguments to find a Canchas
     * @example
     * // Get one Canchas
     * const canchas = await prisma.canchas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends canchasFindUniqueOrThrowArgs>(args: SelectSubset<T, canchasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Canchas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canchasFindFirstArgs} args - Arguments to find a Canchas
     * @example
     * // Get one Canchas
     * const canchas = await prisma.canchas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends canchasFindFirstArgs>(args?: SelectSubset<T, canchasFindFirstArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Canchas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canchasFindFirstOrThrowArgs} args - Arguments to find a Canchas
     * @example
     * // Get one Canchas
     * const canchas = await prisma.canchas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends canchasFindFirstOrThrowArgs>(args?: SelectSubset<T, canchasFindFirstOrThrowArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Canchas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canchasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Canchas
     * const canchas = await prisma.canchas.findMany()
     * 
     * // Get first 10 Canchas
     * const canchas = await prisma.canchas.findMany({ take: 10 })
     * 
     * // Only select the `id_cancha`
     * const canchasWithId_canchaOnly = await prisma.canchas.findMany({ select: { id_cancha: true } })
     * 
     */
    findMany<T extends canchasFindManyArgs>(args?: SelectSubset<T, canchasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Canchas.
     * @param {canchasCreateArgs} args - Arguments to create a Canchas.
     * @example
     * // Create one Canchas
     * const Canchas = await prisma.canchas.create({
     *   data: {
     *     // ... data to create a Canchas
     *   }
     * })
     * 
     */
    create<T extends canchasCreateArgs>(args: SelectSubset<T, canchasCreateArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Canchas.
     * @param {canchasCreateManyArgs} args - Arguments to create many Canchas.
     * @example
     * // Create many Canchas
     * const canchas = await prisma.canchas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends canchasCreateManyArgs>(args?: SelectSubset<T, canchasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Canchas.
     * @param {canchasDeleteArgs} args - Arguments to delete one Canchas.
     * @example
     * // Delete one Canchas
     * const Canchas = await prisma.canchas.delete({
     *   where: {
     *     // ... filter to delete one Canchas
     *   }
     * })
     * 
     */
    delete<T extends canchasDeleteArgs>(args: SelectSubset<T, canchasDeleteArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Canchas.
     * @param {canchasUpdateArgs} args - Arguments to update one Canchas.
     * @example
     * // Update one Canchas
     * const canchas = await prisma.canchas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends canchasUpdateArgs>(args: SelectSubset<T, canchasUpdateArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Canchas.
     * @param {canchasDeleteManyArgs} args - Arguments to filter Canchas to delete.
     * @example
     * // Delete a few Canchas
     * const { count } = await prisma.canchas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends canchasDeleteManyArgs>(args?: SelectSubset<T, canchasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canchasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Canchas
     * const canchas = await prisma.canchas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends canchasUpdateManyArgs>(args: SelectSubset<T, canchasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Canchas.
     * @param {canchasUpsertArgs} args - Arguments to update or create a Canchas.
     * @example
     * // Update or create a Canchas
     * const canchas = await prisma.canchas.upsert({
     *   create: {
     *     // ... data to create a Canchas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Canchas we want to update
     *   }
     * })
     */
    upsert<T extends canchasUpsertArgs>(args: SelectSubset<T, canchasUpsertArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canchasCountArgs} args - Arguments to filter Canchas to count.
     * @example
     * // Count the number of Canchas
     * const count = await prisma.canchas.count({
     *   where: {
     *     // ... the filter for the Canchas we want to count
     *   }
     * })
    **/
    count<T extends canchasCountArgs>(
      args?: Subset<T, canchasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CanchasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanchasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CanchasAggregateArgs>(args: Subset<T, CanchasAggregateArgs>): Prisma.PrismaPromise<GetCanchasAggregateType<T>>

    /**
     * Group by Canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {canchasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends canchasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: canchasGroupByArgs['orderBy'] }
        : { orderBy?: canchasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, canchasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanchasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the canchas model
   */
  readonly fields: canchasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for canchas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__canchasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias_cancha<T extends categorias_canchaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categorias_canchaDefaultArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservas<T extends canchas$reservasArgs<ExtArgs> = {}>(args?: Subset<T, canchas$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the canchas model
   */
  interface canchasFieldRefs {
    readonly id_cancha: FieldRef<"canchas", 'Int'>
    readonly id_categoria: FieldRef<"canchas", 'Int'>
    readonly nombre: FieldRef<"canchas", 'String'>
    readonly descripcion: FieldRef<"canchas", 'String'>
    readonly tarifa_por_hora: FieldRef<"canchas", 'Decimal'>
    readonly estado: FieldRef<"canchas", 'canchas_estado'>
  }
    

  // Custom InputTypes
  /**
   * canchas findUnique
   */
  export type canchasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * Filter, which canchas to fetch.
     */
    where: canchasWhereUniqueInput
  }

  /**
   * canchas findUniqueOrThrow
   */
  export type canchasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * Filter, which canchas to fetch.
     */
    where: canchasWhereUniqueInput
  }

  /**
   * canchas findFirst
   */
  export type canchasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * Filter, which canchas to fetch.
     */
    where?: canchasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of canchas to fetch.
     */
    orderBy?: canchasOrderByWithRelationInput | canchasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for canchas.
     */
    cursor?: canchasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of canchas.
     */
    distinct?: CanchasScalarFieldEnum | CanchasScalarFieldEnum[]
  }

  /**
   * canchas findFirstOrThrow
   */
  export type canchasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * Filter, which canchas to fetch.
     */
    where?: canchasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of canchas to fetch.
     */
    orderBy?: canchasOrderByWithRelationInput | canchasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for canchas.
     */
    cursor?: canchasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of canchas.
     */
    distinct?: CanchasScalarFieldEnum | CanchasScalarFieldEnum[]
  }

  /**
   * canchas findMany
   */
  export type canchasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * Filter, which canchas to fetch.
     */
    where?: canchasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of canchas to fetch.
     */
    orderBy?: canchasOrderByWithRelationInput | canchasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing canchas.
     */
    cursor?: canchasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` canchas.
     */
    skip?: number
    distinct?: CanchasScalarFieldEnum | CanchasScalarFieldEnum[]
  }

  /**
   * canchas create
   */
  export type canchasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * The data needed to create a canchas.
     */
    data: XOR<canchasCreateInput, canchasUncheckedCreateInput>
  }

  /**
   * canchas createMany
   */
  export type canchasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many canchas.
     */
    data: canchasCreateManyInput | canchasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * canchas update
   */
  export type canchasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * The data needed to update a canchas.
     */
    data: XOR<canchasUpdateInput, canchasUncheckedUpdateInput>
    /**
     * Choose, which canchas to update.
     */
    where: canchasWhereUniqueInput
  }

  /**
   * canchas updateMany
   */
  export type canchasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update canchas.
     */
    data: XOR<canchasUpdateManyMutationInput, canchasUncheckedUpdateManyInput>
    /**
     * Filter which canchas to update
     */
    where?: canchasWhereInput
    /**
     * Limit how many canchas to update.
     */
    limit?: number
  }

  /**
   * canchas upsert
   */
  export type canchasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * The filter to search for the canchas to update in case it exists.
     */
    where: canchasWhereUniqueInput
    /**
     * In case the canchas found by the `where` argument doesn't exist, create a new canchas with this data.
     */
    create: XOR<canchasCreateInput, canchasUncheckedCreateInput>
    /**
     * In case the canchas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<canchasUpdateInput, canchasUncheckedUpdateInput>
  }

  /**
   * canchas delete
   */
  export type canchasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    /**
     * Filter which canchas to delete.
     */
    where: canchasWhereUniqueInput
  }

  /**
   * canchas deleteMany
   */
  export type canchasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which canchas to delete
     */
    where?: canchasWhereInput
    /**
     * Limit how many canchas to delete.
     */
    limit?: number
  }

  /**
   * canchas.reservas
   */
  export type canchas$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    cursor?: reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * canchas without action
   */
  export type canchasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
  }


  /**
   * Model categorias_cancha
   */

  export type AggregateCategorias_cancha = {
    _count: Categorias_canchaCountAggregateOutputType | null
    _avg: Categorias_canchaAvgAggregateOutputType | null
    _sum: Categorias_canchaSumAggregateOutputType | null
    _min: Categorias_canchaMinAggregateOutputType | null
    _max: Categorias_canchaMaxAggregateOutputType | null
  }

  export type Categorias_canchaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type Categorias_canchaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type Categorias_canchaMinAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
    descripcion: string | null
  }

  export type Categorias_canchaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
    descripcion: string | null
  }

  export type Categorias_canchaCountAggregateOutputType = {
    id_categoria: number
    nombre_categoria: number
    descripcion: number
    _all: number
  }


  export type Categorias_canchaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type Categorias_canchaSumAggregateInputType = {
    id_categoria?: true
  }

  export type Categorias_canchaMinAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    descripcion?: true
  }

  export type Categorias_canchaMaxAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    descripcion?: true
  }

  export type Categorias_canchaCountAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    descripcion?: true
    _all?: true
  }

  export type Categorias_canchaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias_cancha to aggregate.
     */
    where?: categorias_canchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias_canchas to fetch.
     */
    orderBy?: categorias_canchaOrderByWithRelationInput | categorias_canchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categorias_canchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias_canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias_canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias_canchas
    **/
    _count?: true | Categorias_canchaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Categorias_canchaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Categorias_canchaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Categorias_canchaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Categorias_canchaMaxAggregateInputType
  }

  export type GetCategorias_canchaAggregateType<T extends Categorias_canchaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias_cancha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias_cancha[P]>
      : GetScalarType<T[P], AggregateCategorias_cancha[P]>
  }




  export type categorias_canchaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorias_canchaWhereInput
    orderBy?: categorias_canchaOrderByWithAggregationInput | categorias_canchaOrderByWithAggregationInput[]
    by: Categorias_canchaScalarFieldEnum[] | Categorias_canchaScalarFieldEnum
    having?: categorias_canchaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Categorias_canchaCountAggregateInputType | true
    _avg?: Categorias_canchaAvgAggregateInputType
    _sum?: Categorias_canchaSumAggregateInputType
    _min?: Categorias_canchaMinAggregateInputType
    _max?: Categorias_canchaMaxAggregateInputType
  }

  export type Categorias_canchaGroupByOutputType = {
    id_categoria: number
    nombre_categoria: string
    descripcion: string | null
    _count: Categorias_canchaCountAggregateOutputType | null
    _avg: Categorias_canchaAvgAggregateOutputType | null
    _sum: Categorias_canchaSumAggregateOutputType | null
    _min: Categorias_canchaMinAggregateOutputType | null
    _max: Categorias_canchaMaxAggregateOutputType | null
  }

  type GetCategorias_canchaGroupByPayload<T extends categorias_canchaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Categorias_canchaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Categorias_canchaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Categorias_canchaGroupByOutputType[P]>
            : GetScalarType<T[P], Categorias_canchaGroupByOutputType[P]>
        }
      >
    >


  export type categorias_canchaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre_categoria?: boolean
    descripcion?: boolean
    canchas?: boolean | categorias_cancha$canchasArgs<ExtArgs>
    _count?: boolean | Categorias_canchaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias_cancha"]>



  export type categorias_canchaSelectScalar = {
    id_categoria?: boolean
    nombre_categoria?: boolean
    descripcion?: boolean
  }

  export type categorias_canchaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre_categoria" | "descripcion", ExtArgs["result"]["categorias_cancha"]>
  export type categorias_canchaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canchas?: boolean | categorias_cancha$canchasArgs<ExtArgs>
    _count?: boolean | Categorias_canchaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categorias_canchaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias_cancha"
    objects: {
      canchas: Prisma.$canchasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre_categoria: string
      descripcion: string | null
    }, ExtArgs["result"]["categorias_cancha"]>
    composites: {}
  }

  type categorias_canchaGetPayload<S extends boolean | null | undefined | categorias_canchaDefaultArgs> = $Result.GetResult<Prisma.$categorias_canchaPayload, S>

  type categorias_canchaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categorias_canchaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Categorias_canchaCountAggregateInputType | true
    }

  export interface categorias_canchaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias_cancha'], meta: { name: 'categorias_cancha' } }
    /**
     * Find zero or one Categorias_cancha that matches the filter.
     * @param {categorias_canchaFindUniqueArgs} args - Arguments to find a Categorias_cancha
     * @example
     * // Get one Categorias_cancha
     * const categorias_cancha = await prisma.categorias_cancha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categorias_canchaFindUniqueArgs>(args: SelectSubset<T, categorias_canchaFindUniqueArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias_cancha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categorias_canchaFindUniqueOrThrowArgs} args - Arguments to find a Categorias_cancha
     * @example
     * // Get one Categorias_cancha
     * const categorias_cancha = await prisma.categorias_cancha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categorias_canchaFindUniqueOrThrowArgs>(args: SelectSubset<T, categorias_canchaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias_cancha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorias_canchaFindFirstArgs} args - Arguments to find a Categorias_cancha
     * @example
     * // Get one Categorias_cancha
     * const categorias_cancha = await prisma.categorias_cancha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categorias_canchaFindFirstArgs>(args?: SelectSubset<T, categorias_canchaFindFirstArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias_cancha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorias_canchaFindFirstOrThrowArgs} args - Arguments to find a Categorias_cancha
     * @example
     * // Get one Categorias_cancha
     * const categorias_cancha = await prisma.categorias_cancha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categorias_canchaFindFirstOrThrowArgs>(args?: SelectSubset<T, categorias_canchaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias_canchas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorias_canchaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias_canchas
     * const categorias_canchas = await prisma.categorias_cancha.findMany()
     * 
     * // Get first 10 Categorias_canchas
     * const categorias_canchas = await prisma.categorias_cancha.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categorias_canchaWithId_categoriaOnly = await prisma.categorias_cancha.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends categorias_canchaFindManyArgs>(args?: SelectSubset<T, categorias_canchaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias_cancha.
     * @param {categorias_canchaCreateArgs} args - Arguments to create a Categorias_cancha.
     * @example
     * // Create one Categorias_cancha
     * const Categorias_cancha = await prisma.categorias_cancha.create({
     *   data: {
     *     // ... data to create a Categorias_cancha
     *   }
     * })
     * 
     */
    create<T extends categorias_canchaCreateArgs>(args: SelectSubset<T, categorias_canchaCreateArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias_canchas.
     * @param {categorias_canchaCreateManyArgs} args - Arguments to create many Categorias_canchas.
     * @example
     * // Create many Categorias_canchas
     * const categorias_cancha = await prisma.categorias_cancha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categorias_canchaCreateManyArgs>(args?: SelectSubset<T, categorias_canchaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias_cancha.
     * @param {categorias_canchaDeleteArgs} args - Arguments to delete one Categorias_cancha.
     * @example
     * // Delete one Categorias_cancha
     * const Categorias_cancha = await prisma.categorias_cancha.delete({
     *   where: {
     *     // ... filter to delete one Categorias_cancha
     *   }
     * })
     * 
     */
    delete<T extends categorias_canchaDeleteArgs>(args: SelectSubset<T, categorias_canchaDeleteArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias_cancha.
     * @param {categorias_canchaUpdateArgs} args - Arguments to update one Categorias_cancha.
     * @example
     * // Update one Categorias_cancha
     * const categorias_cancha = await prisma.categorias_cancha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categorias_canchaUpdateArgs>(args: SelectSubset<T, categorias_canchaUpdateArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias_canchas.
     * @param {categorias_canchaDeleteManyArgs} args - Arguments to filter Categorias_canchas to delete.
     * @example
     * // Delete a few Categorias_canchas
     * const { count } = await prisma.categorias_cancha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categorias_canchaDeleteManyArgs>(args?: SelectSubset<T, categorias_canchaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias_canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorias_canchaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias_canchas
     * const categorias_cancha = await prisma.categorias_cancha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categorias_canchaUpdateManyArgs>(args: SelectSubset<T, categorias_canchaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias_cancha.
     * @param {categorias_canchaUpsertArgs} args - Arguments to update or create a Categorias_cancha.
     * @example
     * // Update or create a Categorias_cancha
     * const categorias_cancha = await prisma.categorias_cancha.upsert({
     *   create: {
     *     // ... data to create a Categorias_cancha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias_cancha we want to update
     *   }
     * })
     */
    upsert<T extends categorias_canchaUpsertArgs>(args: SelectSubset<T, categorias_canchaUpsertArgs<ExtArgs>>): Prisma__categorias_canchaClient<$Result.GetResult<Prisma.$categorias_canchaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias_canchas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorias_canchaCountArgs} args - Arguments to filter Categorias_canchas to count.
     * @example
     * // Count the number of Categorias_canchas
     * const count = await prisma.categorias_cancha.count({
     *   where: {
     *     // ... the filter for the Categorias_canchas we want to count
     *   }
     * })
    **/
    count<T extends categorias_canchaCountArgs>(
      args?: Subset<T, categorias_canchaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Categorias_canchaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias_cancha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categorias_canchaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Categorias_canchaAggregateArgs>(args: Subset<T, Categorias_canchaAggregateArgs>): Prisma.PrismaPromise<GetCategorias_canchaAggregateType<T>>

    /**
     * Group by Categorias_cancha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorias_canchaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categorias_canchaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categorias_canchaGroupByArgs['orderBy'] }
        : { orderBy?: categorias_canchaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categorias_canchaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorias_canchaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias_cancha model
   */
  readonly fields: categorias_canchaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias_cancha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categorias_canchaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    canchas<T extends categorias_cancha$canchasArgs<ExtArgs> = {}>(args?: Subset<T, categorias_cancha$canchasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorias_cancha model
   */
  interface categorias_canchaFieldRefs {
    readonly id_categoria: FieldRef<"categorias_cancha", 'Int'>
    readonly nombre_categoria: FieldRef<"categorias_cancha", 'String'>
    readonly descripcion: FieldRef<"categorias_cancha", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorias_cancha findUnique
   */
  export type categorias_canchaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * Filter, which categorias_cancha to fetch.
     */
    where: categorias_canchaWhereUniqueInput
  }

  /**
   * categorias_cancha findUniqueOrThrow
   */
  export type categorias_canchaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * Filter, which categorias_cancha to fetch.
     */
    where: categorias_canchaWhereUniqueInput
  }

  /**
   * categorias_cancha findFirst
   */
  export type categorias_canchaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * Filter, which categorias_cancha to fetch.
     */
    where?: categorias_canchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias_canchas to fetch.
     */
    orderBy?: categorias_canchaOrderByWithRelationInput | categorias_canchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias_canchas.
     */
    cursor?: categorias_canchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias_canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias_canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias_canchas.
     */
    distinct?: Categorias_canchaScalarFieldEnum | Categorias_canchaScalarFieldEnum[]
  }

  /**
   * categorias_cancha findFirstOrThrow
   */
  export type categorias_canchaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * Filter, which categorias_cancha to fetch.
     */
    where?: categorias_canchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias_canchas to fetch.
     */
    orderBy?: categorias_canchaOrderByWithRelationInput | categorias_canchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias_canchas.
     */
    cursor?: categorias_canchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias_canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias_canchas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias_canchas.
     */
    distinct?: Categorias_canchaScalarFieldEnum | Categorias_canchaScalarFieldEnum[]
  }

  /**
   * categorias_cancha findMany
   */
  export type categorias_canchaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * Filter, which categorias_canchas to fetch.
     */
    where?: categorias_canchaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias_canchas to fetch.
     */
    orderBy?: categorias_canchaOrderByWithRelationInput | categorias_canchaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias_canchas.
     */
    cursor?: categorias_canchaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias_canchas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias_canchas.
     */
    skip?: number
    distinct?: Categorias_canchaScalarFieldEnum | Categorias_canchaScalarFieldEnum[]
  }

  /**
   * categorias_cancha create
   */
  export type categorias_canchaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias_cancha.
     */
    data: XOR<categorias_canchaCreateInput, categorias_canchaUncheckedCreateInput>
  }

  /**
   * categorias_cancha createMany
   */
  export type categorias_canchaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias_canchas.
     */
    data: categorias_canchaCreateManyInput | categorias_canchaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias_cancha update
   */
  export type categorias_canchaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias_cancha.
     */
    data: XOR<categorias_canchaUpdateInput, categorias_canchaUncheckedUpdateInput>
    /**
     * Choose, which categorias_cancha to update.
     */
    where: categorias_canchaWhereUniqueInput
  }

  /**
   * categorias_cancha updateMany
   */
  export type categorias_canchaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias_canchas.
     */
    data: XOR<categorias_canchaUpdateManyMutationInput, categorias_canchaUncheckedUpdateManyInput>
    /**
     * Filter which categorias_canchas to update
     */
    where?: categorias_canchaWhereInput
    /**
     * Limit how many categorias_canchas to update.
     */
    limit?: number
  }

  /**
   * categorias_cancha upsert
   */
  export type categorias_canchaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias_cancha to update in case it exists.
     */
    where: categorias_canchaWhereUniqueInput
    /**
     * In case the categorias_cancha found by the `where` argument doesn't exist, create a new categorias_cancha with this data.
     */
    create: XOR<categorias_canchaCreateInput, categorias_canchaUncheckedCreateInput>
    /**
     * In case the categorias_cancha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categorias_canchaUpdateInput, categorias_canchaUncheckedUpdateInput>
  }

  /**
   * categorias_cancha delete
   */
  export type categorias_canchaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
    /**
     * Filter which categorias_cancha to delete.
     */
    where: categorias_canchaWhereUniqueInput
  }

  /**
   * categorias_cancha deleteMany
   */
  export type categorias_canchaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias_canchas to delete
     */
    where?: categorias_canchaWhereInput
    /**
     * Limit how many categorias_canchas to delete.
     */
    limit?: number
  }

  /**
   * categorias_cancha.canchas
   */
  export type categorias_cancha$canchasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canchas
     */
    select?: canchasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the canchas
     */
    omit?: canchasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: canchasInclude<ExtArgs> | null
    where?: canchasWhereInput
    orderBy?: canchasOrderByWithRelationInput | canchasOrderByWithRelationInput[]
    cursor?: canchasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CanchasScalarFieldEnum | CanchasScalarFieldEnum[]
  }

  /**
   * categorias_cancha without action
   */
  export type categorias_canchaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias_cancha
     */
    select?: categorias_canchaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias_cancha
     */
    omit?: categorias_canchaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorias_canchaInclude<ExtArgs> | null
  }


  /**
   * Model pagos
   */

  export type AggregatePagos = {
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  export type PagosAvgAggregateOutputType = {
    id_pago: number | null
    id_reserva: number | null
    monto: Decimal | null
  }

  export type PagosSumAggregateOutputType = {
    id_pago: number | null
    id_reserva: number | null
    monto: Decimal | null
  }

  export type PagosMinAggregateOutputType = {
    id_pago: number | null
    id_reserva: number | null
    fecha_pago: Date | null
    monto: Decimal | null
    metodo_pago: $Enums.pagos_metodo_pago | null
    estado_pago: $Enums.pagos_estado_pago | null
  }

  export type PagosMaxAggregateOutputType = {
    id_pago: number | null
    id_reserva: number | null
    fecha_pago: Date | null
    monto: Decimal | null
    metodo_pago: $Enums.pagos_metodo_pago | null
    estado_pago: $Enums.pagos_estado_pago | null
  }

  export type PagosCountAggregateOutputType = {
    id_pago: number
    id_reserva: number
    fecha_pago: number
    monto: number
    metodo_pago: number
    estado_pago: number
    _all: number
  }


  export type PagosAvgAggregateInputType = {
    id_pago?: true
    id_reserva?: true
    monto?: true
  }

  export type PagosSumAggregateInputType = {
    id_pago?: true
    id_reserva?: true
    monto?: true
  }

  export type PagosMinAggregateInputType = {
    id_pago?: true
    id_reserva?: true
    fecha_pago?: true
    monto?: true
    metodo_pago?: true
    estado_pago?: true
  }

  export type PagosMaxAggregateInputType = {
    id_pago?: true
    id_reserva?: true
    fecha_pago?: true
    monto?: true
    metodo_pago?: true
    estado_pago?: true
  }

  export type PagosCountAggregateInputType = {
    id_pago?: true
    id_reserva?: true
    fecha_pago?: true
    monto?: true
    metodo_pago?: true
    estado_pago?: true
    _all?: true
  }

  export type PagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to aggregate.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagos
    **/
    _count?: true | PagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosMaxAggregateInputType
  }

  export type GetPagosAggregateType<T extends PagosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagos[P]>
      : GetScalarType<T[P], AggregatePagos[P]>
  }




  export type pagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithAggregationInput | pagosOrderByWithAggregationInput[]
    by: PagosScalarFieldEnum[] | PagosScalarFieldEnum
    having?: pagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosCountAggregateInputType | true
    _avg?: PagosAvgAggregateInputType
    _sum?: PagosSumAggregateInputType
    _min?: PagosMinAggregateInputType
    _max?: PagosMaxAggregateInputType
  }

  export type PagosGroupByOutputType = {
    id_pago: number
    id_reserva: number
    fecha_pago: Date
    monto: Decimal
    metodo_pago: $Enums.pagos_metodo_pago
    estado_pago: $Enums.pagos_estado_pago
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  type GetPagosGroupByPayload<T extends pagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosGroupByOutputType[P]>
            : GetScalarType<T[P], PagosGroupByOutputType[P]>
        }
      >
    >


  export type pagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_reserva?: boolean
    fecha_pago?: boolean
    monto?: boolean
    metodo_pago?: boolean
    estado_pago?: boolean
    reservas?: boolean | reservasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>



  export type pagosSelectScalar = {
    id_pago?: boolean
    id_reserva?: boolean
    fecha_pago?: boolean
    monto?: boolean
    metodo_pago?: boolean
    estado_pago?: boolean
  }

  export type pagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pago" | "id_reserva" | "fecha_pago" | "monto" | "metodo_pago" | "estado_pago", ExtArgs["result"]["pagos"]>
  export type pagosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | reservasDefaultArgs<ExtArgs>
  }

  export type $pagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagos"
    objects: {
      reservas: Prisma.$reservasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pago: number
      id_reserva: number
      fecha_pago: Date
      monto: Prisma.Decimal
      metodo_pago: $Enums.pagos_metodo_pago
      estado_pago: $Enums.pagos_estado_pago
    }, ExtArgs["result"]["pagos"]>
    composites: {}
  }

  type pagosGetPayload<S extends boolean | null | undefined | pagosDefaultArgs> = $Result.GetResult<Prisma.$pagosPayload, S>

  type pagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagosCountAggregateInputType | true
    }

  export interface pagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagos'], meta: { name: 'pagos' } }
    /**
     * Find zero or one Pagos that matches the filter.
     * @param {pagosFindUniqueArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagosFindUniqueArgs>(args: SelectSubset<T, pagosFindUniqueArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagosFindUniqueOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagosFindUniqueOrThrowArgs>(args: SelectSubset<T, pagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagosFindFirstArgs>(args?: SelectSubset<T, pagosFindFirstArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagosFindFirstOrThrowArgs>(args?: SelectSubset<T, pagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pagos.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pagos.findMany({ take: 10 })
     * 
     * // Only select the `id_pago`
     * const pagosWithId_pagoOnly = await prisma.pagos.findMany({ select: { id_pago: true } })
     * 
     */
    findMany<T extends pagosFindManyArgs>(args?: SelectSubset<T, pagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagos.
     * @param {pagosCreateArgs} args - Arguments to create a Pagos.
     * @example
     * // Create one Pagos
     * const Pagos = await prisma.pagos.create({
     *   data: {
     *     // ... data to create a Pagos
     *   }
     * })
     * 
     */
    create<T extends pagosCreateArgs>(args: SelectSubset<T, pagosCreateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {pagosCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagosCreateManyArgs>(args?: SelectSubset<T, pagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagos.
     * @param {pagosDeleteArgs} args - Arguments to delete one Pagos.
     * @example
     * // Delete one Pagos
     * const Pagos = await prisma.pagos.delete({
     *   where: {
     *     // ... filter to delete one Pagos
     *   }
     * })
     * 
     */
    delete<T extends pagosDeleteArgs>(args: SelectSubset<T, pagosDeleteArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagos.
     * @param {pagosUpdateArgs} args - Arguments to update one Pagos.
     * @example
     * // Update one Pagos
     * const pagos = await prisma.pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagosUpdateArgs>(args: SelectSubset<T, pagosUpdateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {pagosDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagosDeleteManyArgs>(args?: SelectSubset<T, pagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagosUpdateManyArgs>(args: SelectSubset<T, pagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagos.
     * @param {pagosUpsertArgs} args - Arguments to update or create a Pagos.
     * @example
     * // Update or create a Pagos
     * const pagos = await prisma.pagos.upsert({
     *   create: {
     *     // ... data to create a Pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagos we want to update
     *   }
     * })
     */
    upsert<T extends pagosUpsertArgs>(args: SelectSubset<T, pagosUpsertArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pagos.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagosCountArgs>(
      args?: Subset<T, pagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosAggregateArgs>(args: Subset<T, PagosAggregateArgs>): Prisma.PrismaPromise<GetPagosAggregateType<T>>

    /**
     * Group by Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagosGroupByArgs['orderBy'] }
        : { orderBy?: pagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagos model
   */
  readonly fields: pagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends reservasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reservasDefaultArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pagos model
   */
  interface pagosFieldRefs {
    readonly id_pago: FieldRef<"pagos", 'Int'>
    readonly id_reserva: FieldRef<"pagos", 'Int'>
    readonly fecha_pago: FieldRef<"pagos", 'DateTime'>
    readonly monto: FieldRef<"pagos", 'Decimal'>
    readonly metodo_pago: FieldRef<"pagos", 'pagos_metodo_pago'>
    readonly estado_pago: FieldRef<"pagos", 'pagos_estado_pago'>
  }
    

  // Custom InputTypes
  /**
   * pagos findUnique
   */
  export type pagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findUniqueOrThrow
   */
  export type pagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findFirst
   */
  export type pagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findFirstOrThrow
   */
  export type pagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findMany
   */
  export type pagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos create
   */
  export type pagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to create a pagos.
     */
    data: XOR<pagosCreateInput, pagosUncheckedCreateInput>
  }

  /**
   * pagos createMany
   */
  export type pagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: pagosCreateManyInput | pagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagos update
   */
  export type pagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to update a pagos.
     */
    data: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
    /**
     * Choose, which pagos to update.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos updateMany
   */
  export type pagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
  }

  /**
   * pagos upsert
   */
  export type pagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The filter to search for the pagos to update in case it exists.
     */
    where: pagosWhereUniqueInput
    /**
     * In case the pagos found by the `where` argument doesn't exist, create a new pagos with this data.
     */
    create: XOR<pagosCreateInput, pagosUncheckedCreateInput>
    /**
     * In case the pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
  }

  /**
   * pagos delete
   */
  export type pagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter which pagos to delete.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos deleteMany
   */
  export type pagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to delete.
     */
    limit?: number
  }

  /**
   * pagos without action
   */
  export type pagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
  }


  /**
   * Model reservas
   */

  export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  export type ReservasAvgAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_cancha: number | null
    monto_total: Decimal | null
  }

  export type ReservasSumAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_cancha: number | null
    monto_total: Decimal | null
  }

  export type ReservasMinAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_cancha: number | null
    fecha_hora_inicio: Date | null
    fecha_hora_fin: Date | null
    monto_total: Decimal | null
    estado: $Enums.reservas_estado | null
  }

  export type ReservasMaxAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_cancha: number | null
    fecha_hora_inicio: Date | null
    fecha_hora_fin: Date | null
    monto_total: Decimal | null
    estado: $Enums.reservas_estado | null
  }

  export type ReservasCountAggregateOutputType = {
    id_reserva: number
    id_usuario: number
    id_cancha: number
    fecha_hora_inicio: number
    fecha_hora_fin: number
    monto_total: number
    estado: number
    _all: number
  }


  export type ReservasAvgAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_cancha?: true
    monto_total?: true
  }

  export type ReservasSumAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_cancha?: true
    monto_total?: true
  }

  export type ReservasMinAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_cancha?: true
    fecha_hora_inicio?: true
    fecha_hora_fin?: true
    monto_total?: true
    estado?: true
  }

  export type ReservasMaxAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_cancha?: true
    fecha_hora_inicio?: true
    fecha_hora_fin?: true
    monto_total?: true
    estado?: true
  }

  export type ReservasCountAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_cancha?: true
    fecha_hora_inicio?: true
    fecha_hora_fin?: true
    monto_total?: true
    estado?: true
    _all?: true
  }

  export type ReservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to aggregate.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasMaxAggregateInputType
  }

  export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
        [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservas[P]>
      : GetScalarType<T[P], AggregateReservas[P]>
  }




  export type reservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithAggregationInput | reservasOrderByWithAggregationInput[]
    by: ReservasScalarFieldEnum[] | ReservasScalarFieldEnum
    having?: reservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasCountAggregateInputType | true
    _avg?: ReservasAvgAggregateInputType
    _sum?: ReservasSumAggregateInputType
    _min?: ReservasMinAggregateInputType
    _max?: ReservasMaxAggregateInputType
  }

  export type ReservasGroupByOutputType = {
    id_reserva: number
    id_usuario: number
    id_cancha: number
    fecha_hora_inicio: Date
    fecha_hora_fin: Date
    monto_total: Decimal
    estado: $Enums.reservas_estado
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  type GetReservasGroupByPayload<T extends reservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasGroupByOutputType[P]>
        }
      >
    >


  export type reservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    id_cancha?: boolean
    fecha_hora_inicio?: boolean
    fecha_hora_fin?: boolean
    monto_total?: boolean
    estado?: boolean
    pagos?: boolean | reservas$pagosArgs<ExtArgs>
    canchas?: boolean | canchasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>



  export type reservasSelectScalar = {
    id_reserva?: boolean
    id_usuario?: boolean
    id_cancha?: boolean
    fecha_hora_inicio?: boolean
    fecha_hora_fin?: boolean
    monto_total?: boolean
    estado?: boolean
  }

  export type reservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "id_usuario" | "id_cancha" | "fecha_hora_inicio" | "fecha_hora_fin" | "monto_total" | "estado", ExtArgs["result"]["reservas"]>
  export type reservasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | reservas$pagosArgs<ExtArgs>
    canchas?: boolean | canchasDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $reservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservas"
    objects: {
      pagos: Prisma.$pagosPayload<ExtArgs> | null
      canchas: Prisma.$canchasPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: number
      id_usuario: number
      id_cancha: number
      fecha_hora_inicio: Date
      fecha_hora_fin: Date
      monto_total: Prisma.Decimal
      estado: $Enums.reservas_estado
    }, ExtArgs["result"]["reservas"]>
    composites: {}
  }

  type reservasGetPayload<S extends boolean | null | undefined | reservasDefaultArgs> = $Result.GetResult<Prisma.$reservasPayload, S>

  type reservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasCountAggregateInputType | true
    }

  export interface reservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservas'], meta: { name: 'reservas' } }
    /**
     * Find zero or one Reservas that matches the filter.
     * @param {reservasFindUniqueArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservasFindUniqueArgs>(args: SelectSubset<T, reservasFindUniqueArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservasFindUniqueOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservasFindUniqueOrThrowArgs>(args: SelectSubset<T, reservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservasFindFirstArgs>(args?: SelectSubset<T, reservasFindFirstArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservasFindFirstOrThrowArgs>(args?: SelectSubset<T, reservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reservas.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reservas.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends reservasFindManyArgs>(args?: SelectSubset<T, reservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservas.
     * @param {reservasCreateArgs} args - Arguments to create a Reservas.
     * @example
     * // Create one Reservas
     * const Reservas = await prisma.reservas.create({
     *   data: {
     *     // ... data to create a Reservas
     *   }
     * })
     * 
     */
    create<T extends reservasCreateArgs>(args: SelectSubset<T, reservasCreateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservasCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservasCreateManyArgs>(args?: SelectSubset<T, reservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservas.
     * @param {reservasDeleteArgs} args - Arguments to delete one Reservas.
     * @example
     * // Delete one Reservas
     * const Reservas = await prisma.reservas.delete({
     *   where: {
     *     // ... filter to delete one Reservas
     *   }
     * })
     * 
     */
    delete<T extends reservasDeleteArgs>(args: SelectSubset<T, reservasDeleteArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservas.
     * @param {reservasUpdateArgs} args - Arguments to update one Reservas.
     * @example
     * // Update one Reservas
     * const reservas = await prisma.reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservasUpdateArgs>(args: SelectSubset<T, reservasUpdateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservasDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservasDeleteManyArgs>(args?: SelectSubset<T, reservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservasUpdateManyArgs>(args: SelectSubset<T, reservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservas.
     * @param {reservasUpsertArgs} args - Arguments to update or create a Reservas.
     * @example
     * // Update or create a Reservas
     * const reservas = await prisma.reservas.upsert({
     *   create: {
     *     // ... data to create a Reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservas we want to update
     *   }
     * })
     */
    upsert<T extends reservasUpsertArgs>(args: SelectSubset<T, reservasUpsertArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reservas.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservasCountArgs>(
      args?: Subset<T, reservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservasAggregateArgs>(args: Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>

    /**
     * Group by Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservasGroupByArgs['orderBy'] }
        : { orderBy?: reservasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservas model
   */
  readonly fields: reservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagos<T extends reservas$pagosArgs<ExtArgs> = {}>(args?: Subset<T, reservas$pagosArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    canchas<T extends canchasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, canchasDefaultArgs<ExtArgs>>): Prisma__canchasClient<$Result.GetResult<Prisma.$canchasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reservas model
   */
  interface reservasFieldRefs {
    readonly id_reserva: FieldRef<"reservas", 'Int'>
    readonly id_usuario: FieldRef<"reservas", 'Int'>
    readonly id_cancha: FieldRef<"reservas", 'Int'>
    readonly fecha_hora_inicio: FieldRef<"reservas", 'DateTime'>
    readonly fecha_hora_fin: FieldRef<"reservas", 'DateTime'>
    readonly monto_total: FieldRef<"reservas", 'Decimal'>
    readonly estado: FieldRef<"reservas", 'reservas_estado'>
  }
    

  // Custom InputTypes
  /**
   * reservas findUnique
   */
  export type reservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findUniqueOrThrow
   */
  export type reservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findFirst
   */
  export type reservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findFirstOrThrow
   */
  export type reservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findMany
   */
  export type reservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas create
   */
  export type reservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to create a reservas.
     */
    data: XOR<reservasCreateInput, reservasUncheckedCreateInput>
  }

  /**
   * reservas createMany
   */
  export type reservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservas update
   */
  export type reservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to update a reservas.
     */
    data: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
    /**
     * Choose, which reservas to update.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas updateMany
   */
  export type reservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reservas upsert
   */
  export type reservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The filter to search for the reservas to update in case it exists.
     */
    where: reservasWhereUniqueInput
    /**
     * In case the reservas found by the `where` argument doesn't exist, create a new reservas with this data.
     */
    create: XOR<reservasCreateInput, reservasUncheckedCreateInput>
    /**
     * In case the reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
  }

  /**
   * reservas delete
   */
  export type reservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter which reservas to delete.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas deleteMany
   */
  export type reservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reservas.pagos
   */
  export type reservas$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    where?: pagosWhereInput
  }

  /**
   * reservas without action
   */
  export type reservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id_rol: number | null
  }

  export type RolesSumAggregateOutputType = {
    id_rol: number | null
  }

  export type RolesMinAggregateOutputType = {
    id_rol: number | null
    nombre_rol: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id_rol: number | null
    nombre_rol: string | null
  }

  export type RolesCountAggregateOutputType = {
    id_rol: number
    nombre_rol: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id_rol?: true
  }

  export type RolesSumAggregateInputType = {
    id_rol?: true
  }

  export type RolesMinAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
  }

  export type RolesMaxAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
  }

  export type RolesCountAggregateInputType = {
    id_rol?: true
    nombre_rol?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id_rol: number
    nombre_rol: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    nombre_rol?: boolean
    usuarios?: boolean | roles$usuariosArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type rolesSelectScalar = {
    id_rol?: boolean
    nombre_rol?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rol" | "nombre_rol", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | roles$usuariosArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: number
      nombre_rol: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rolesWithId_rolOnly = await prisma.roles.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends roles$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, roles$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id_rol: FieldRef<"roles", 'Int'>
    readonly nombre_rol: FieldRef<"roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.usuarios
   */
  export type roles$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
    nombre: string | null
    apellido: string | null
    correo_electronico: string | null
    contrase_a_hash: string | null
    telefono: string | null
    fecha_registro: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    id_rol: number | null
    nombre: string | null
    apellido: string | null
    correo_electronico: string | null
    contrase_a_hash: string | null
    telefono: string | null
    fecha_registro: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    id_rol: number
    nombre: number
    apellido: number
    correo_electronico: number
    contrase_a_hash: number
    telefono: number
    fecha_registro: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
    id_rol?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    id_rol?: true
    nombre?: true
    apellido?: true
    correo_electronico?: true
    contrase_a_hash?: true
    telefono?: true
    fecha_registro?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    id_rol?: true
    nombre?: true
    apellido?: true
    correo_electronico?: true
    contrase_a_hash?: true
    telefono?: true
    fecha_registro?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    id_rol?: true
    nombre?: true
    apellido?: true
    correo_electronico?: true
    contrase_a_hash?: true
    telefono?: true
    fecha_registro?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    id_rol: number
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono: string | null
    fecha_registro: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_rol?: boolean
    nombre?: boolean
    apellido?: boolean
    correo_electronico?: boolean
    contrase_a_hash?: boolean
    telefono?: boolean
    fecha_registro?: boolean
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id_usuario?: boolean
    id_rol?: boolean
    nombre?: boolean
    apellido?: boolean
    correo_electronico?: boolean
    contrase_a_hash?: boolean
    telefono?: boolean
    fecha_registro?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_rol" | "nombre" | "apellido" | "correo_electronico" | "contrase_a_hash" | "telefono" | "fecha_registro", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    roles?: boolean | rolesDefaultArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      reservas: Prisma.$reservasPayload<ExtArgs>[]
      roles: Prisma.$rolesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_rol: number
      nombre: string
      apellido: string
      correo_electronico: string
      contrase_a_hash: string
      telefono: string | null
      fecha_registro: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends usuarios$reservasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly id_rol: FieldRef<"usuarios", 'Int'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly apellido: FieldRef<"usuarios", 'String'>
    readonly correo_electronico: FieldRef<"usuarios", 'String'>
    readonly contrase_a_hash: FieldRef<"usuarios", 'String'>
    readonly telefono: FieldRef<"usuarios", 'String'>
    readonly fecha_registro: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.reservas
   */
  export type usuarios$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    cursor?: reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CanchasScalarFieldEnum: {
    id_cancha: 'id_cancha',
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    descripcion: 'descripcion',
    tarifa_por_hora: 'tarifa_por_hora',
    estado: 'estado'
  };

  export type CanchasScalarFieldEnum = (typeof CanchasScalarFieldEnum)[keyof typeof CanchasScalarFieldEnum]


  export const Categorias_canchaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre_categoria: 'nombre_categoria',
    descripcion: 'descripcion'
  };

  export type Categorias_canchaScalarFieldEnum = (typeof Categorias_canchaScalarFieldEnum)[keyof typeof Categorias_canchaScalarFieldEnum]


  export const PagosScalarFieldEnum: {
    id_pago: 'id_pago',
    id_reserva: 'id_reserva',
    fecha_pago: 'fecha_pago',
    monto: 'monto',
    metodo_pago: 'metodo_pago',
    estado_pago: 'estado_pago'
  };

  export type PagosScalarFieldEnum = (typeof PagosScalarFieldEnum)[keyof typeof PagosScalarFieldEnum]


  export const ReservasScalarFieldEnum: {
    id_reserva: 'id_reserva',
    id_usuario: 'id_usuario',
    id_cancha: 'id_cancha',
    fecha_hora_inicio: 'fecha_hora_inicio',
    fecha_hora_fin: 'fecha_hora_fin',
    monto_total: 'monto_total',
    estado: 'estado'
  };

  export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id_rol: 'id_rol',
    nombre_rol: 'nombre_rol'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_rol: 'id_rol',
    nombre: 'nombre',
    apellido: 'apellido',
    correo_electronico: 'correo_electronico',
    contrase_a_hash: 'contrase_a_hash',
    telefono: 'telefono',
    fecha_registro: 'fecha_registro'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const canchasOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type canchasOrderByRelevanceFieldEnum = (typeof canchasOrderByRelevanceFieldEnum)[keyof typeof canchasOrderByRelevanceFieldEnum]


  export const categorias_canchaOrderByRelevanceFieldEnum: {
    nombre_categoria: 'nombre_categoria',
    descripcion: 'descripcion'
  };

  export type categorias_canchaOrderByRelevanceFieldEnum = (typeof categorias_canchaOrderByRelevanceFieldEnum)[keyof typeof categorias_canchaOrderByRelevanceFieldEnum]


  export const rolesOrderByRelevanceFieldEnum: {
    nombre_rol: 'nombre_rol'
  };

  export type rolesOrderByRelevanceFieldEnum = (typeof rolesOrderByRelevanceFieldEnum)[keyof typeof rolesOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    apellido: 'apellido',
    correo_electronico: 'correo_electronico',
    contrase_a_hash: 'contrase_a_hash',
    telefono: 'telefono'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'canchas_estado'
   */
  export type Enumcanchas_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'canchas_estado'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'pagos_metodo_pago'
   */
  export type Enumpagos_metodo_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pagos_metodo_pago'>
    


  /**
   * Reference to a field of type 'pagos_estado_pago'
   */
  export type Enumpagos_estado_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pagos_estado_pago'>
    


  /**
   * Reference to a field of type 'reservas_estado'
   */
  export type Enumreservas_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservas_estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type canchasWhereInput = {
    AND?: canchasWhereInput | canchasWhereInput[]
    OR?: canchasWhereInput[]
    NOT?: canchasWhereInput | canchasWhereInput[]
    id_cancha?: IntFilter<"canchas"> | number
    id_categoria?: IntFilter<"canchas"> | number
    nombre?: StringFilter<"canchas"> | string
    descripcion?: StringNullableFilter<"canchas"> | string | null
    tarifa_por_hora?: DecimalFilter<"canchas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFilter<"canchas"> | $Enums.canchas_estado
    categorias_cancha?: XOR<Categorias_canchaScalarRelationFilter, categorias_canchaWhereInput>
    reservas?: ReservasListRelationFilter
  }

  export type canchasOrderByWithRelationInput = {
    id_cancha?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tarifa_por_hora?: SortOrder
    estado?: SortOrder
    categorias_cancha?: categorias_canchaOrderByWithRelationInput
    reservas?: reservasOrderByRelationAggregateInput
    _relevance?: canchasOrderByRelevanceInput
  }

  export type canchasWhereUniqueInput = Prisma.AtLeast<{
    id_cancha?: number
    AND?: canchasWhereInput | canchasWhereInput[]
    OR?: canchasWhereInput[]
    NOT?: canchasWhereInput | canchasWhereInput[]
    id_categoria?: IntFilter<"canchas"> | number
    nombre?: StringFilter<"canchas"> | string
    descripcion?: StringNullableFilter<"canchas"> | string | null
    tarifa_por_hora?: DecimalFilter<"canchas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFilter<"canchas"> | $Enums.canchas_estado
    categorias_cancha?: XOR<Categorias_canchaScalarRelationFilter, categorias_canchaWhereInput>
    reservas?: ReservasListRelationFilter
  }, "id_cancha">

  export type canchasOrderByWithAggregationInput = {
    id_cancha?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tarifa_por_hora?: SortOrder
    estado?: SortOrder
    _count?: canchasCountOrderByAggregateInput
    _avg?: canchasAvgOrderByAggregateInput
    _max?: canchasMaxOrderByAggregateInput
    _min?: canchasMinOrderByAggregateInput
    _sum?: canchasSumOrderByAggregateInput
  }

  export type canchasScalarWhereWithAggregatesInput = {
    AND?: canchasScalarWhereWithAggregatesInput | canchasScalarWhereWithAggregatesInput[]
    OR?: canchasScalarWhereWithAggregatesInput[]
    NOT?: canchasScalarWhereWithAggregatesInput | canchasScalarWhereWithAggregatesInput[]
    id_cancha?: IntWithAggregatesFilter<"canchas"> | number
    id_categoria?: IntWithAggregatesFilter<"canchas"> | number
    nombre?: StringWithAggregatesFilter<"canchas"> | string
    descripcion?: StringNullableWithAggregatesFilter<"canchas"> | string | null
    tarifa_por_hora?: DecimalWithAggregatesFilter<"canchas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoWithAggregatesFilter<"canchas"> | $Enums.canchas_estado
  }

  export type categorias_canchaWhereInput = {
    AND?: categorias_canchaWhereInput | categorias_canchaWhereInput[]
    OR?: categorias_canchaWhereInput[]
    NOT?: categorias_canchaWhereInput | categorias_canchaWhereInput[]
    id_categoria?: IntFilter<"categorias_cancha"> | number
    nombre_categoria?: StringFilter<"categorias_cancha"> | string
    descripcion?: StringNullableFilter<"categorias_cancha"> | string | null
    canchas?: CanchasListRelationFilter
  }

  export type categorias_canchaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    canchas?: canchasOrderByRelationAggregateInput
    _relevance?: categorias_canchaOrderByRelevanceInput
  }

  export type categorias_canchaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    nombre_categoria?: string
    AND?: categorias_canchaWhereInput | categorias_canchaWhereInput[]
    OR?: categorias_canchaWhereInput[]
    NOT?: categorias_canchaWhereInput | categorias_canchaWhereInput[]
    descripcion?: StringNullableFilter<"categorias_cancha"> | string | null
    canchas?: CanchasListRelationFilter
  }, "id_categoria" | "nombre_categoria">

  export type categorias_canchaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: categorias_canchaCountOrderByAggregateInput
    _avg?: categorias_canchaAvgOrderByAggregateInput
    _max?: categorias_canchaMaxOrderByAggregateInput
    _min?: categorias_canchaMinOrderByAggregateInput
    _sum?: categorias_canchaSumOrderByAggregateInput
  }

  export type categorias_canchaScalarWhereWithAggregatesInput = {
    AND?: categorias_canchaScalarWhereWithAggregatesInput | categorias_canchaScalarWhereWithAggregatesInput[]
    OR?: categorias_canchaScalarWhereWithAggregatesInput[]
    NOT?: categorias_canchaScalarWhereWithAggregatesInput | categorias_canchaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"categorias_cancha"> | number
    nombre_categoria?: StringWithAggregatesFilter<"categorias_cancha"> | string
    descripcion?: StringNullableWithAggregatesFilter<"categorias_cancha"> | string | null
  }

  export type pagosWhereInput = {
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    id_pago?: IntFilter<"pagos"> | number
    id_reserva?: IntFilter<"pagos"> | number
    fecha_pago?: DateTimeFilter<"pagos"> | Date | string
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFilter<"pagos"> | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFilter<"pagos"> | $Enums.pagos_estado_pago
    reservas?: XOR<ReservasScalarRelationFilter, reservasWhereInput>
  }

  export type pagosOrderByWithRelationInput = {
    id_pago?: SortOrder
    id_reserva?: SortOrder
    fecha_pago?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
    reservas?: reservasOrderByWithRelationInput
  }

  export type pagosWhereUniqueInput = Prisma.AtLeast<{
    id_pago?: number
    id_reserva?: number
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    fecha_pago?: DateTimeFilter<"pagos"> | Date | string
    monto?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFilter<"pagos"> | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFilter<"pagos"> | $Enums.pagos_estado_pago
    reservas?: XOR<ReservasScalarRelationFilter, reservasWhereInput>
  }, "id_pago" | "id_reserva">

  export type pagosOrderByWithAggregationInput = {
    id_pago?: SortOrder
    id_reserva?: SortOrder
    fecha_pago?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
    _count?: pagosCountOrderByAggregateInput
    _avg?: pagosAvgOrderByAggregateInput
    _max?: pagosMaxOrderByAggregateInput
    _min?: pagosMinOrderByAggregateInput
    _sum?: pagosSumOrderByAggregateInput
  }

  export type pagosScalarWhereWithAggregatesInput = {
    AND?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    OR?: pagosScalarWhereWithAggregatesInput[]
    NOT?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    id_pago?: IntWithAggregatesFilter<"pagos"> | number
    id_reserva?: IntWithAggregatesFilter<"pagos"> | number
    fecha_pago?: DateTimeWithAggregatesFilter<"pagos"> | Date | string
    monto?: DecimalWithAggregatesFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoWithAggregatesFilter<"pagos"> | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoWithAggregatesFilter<"pagos"> | $Enums.pagos_estado_pago
  }

  export type reservasWhereInput = {
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_reserva?: IntFilter<"reservas"> | number
    id_usuario?: IntFilter<"reservas"> | number
    id_cancha?: IntFilter<"reservas"> | number
    fecha_hora_inicio?: DateTimeFilter<"reservas"> | Date | string
    fecha_hora_fin?: DateTimeFilter<"reservas"> | Date | string
    monto_total?: DecimalFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFilter<"reservas"> | $Enums.reservas_estado
    pagos?: XOR<PagosNullableScalarRelationFilter, pagosWhereInput> | null
    canchas?: XOR<CanchasScalarRelationFilter, canchasWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type reservasOrderByWithRelationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_cancha?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    monto_total?: SortOrder
    estado?: SortOrder
    pagos?: pagosOrderByWithRelationInput
    canchas?: canchasOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type reservasWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: number
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_usuario?: IntFilter<"reservas"> | number
    id_cancha?: IntFilter<"reservas"> | number
    fecha_hora_inicio?: DateTimeFilter<"reservas"> | Date | string
    fecha_hora_fin?: DateTimeFilter<"reservas"> | Date | string
    monto_total?: DecimalFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFilter<"reservas"> | $Enums.reservas_estado
    pagos?: XOR<PagosNullableScalarRelationFilter, pagosWhereInput> | null
    canchas?: XOR<CanchasScalarRelationFilter, canchasWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_reserva">

  export type reservasOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_cancha?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    monto_total?: SortOrder
    estado?: SortOrder
    _count?: reservasCountOrderByAggregateInput
    _avg?: reservasAvgOrderByAggregateInput
    _max?: reservasMaxOrderByAggregateInput
    _min?: reservasMinOrderByAggregateInput
    _sum?: reservasSumOrderByAggregateInput
  }

  export type reservasScalarWhereWithAggregatesInput = {
    AND?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    OR?: reservasScalarWhereWithAggregatesInput[]
    NOT?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    id_reserva?: IntWithAggregatesFilter<"reservas"> | number
    id_usuario?: IntWithAggregatesFilter<"reservas"> | number
    id_cancha?: IntWithAggregatesFilter<"reservas"> | number
    fecha_hora_inicio?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
    fecha_hora_fin?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
    monto_total?: DecimalWithAggregatesFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoWithAggregatesFilter<"reservas"> | $Enums.reservas_estado
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id_rol?: IntFilter<"roles"> | number
    nombre_rol?: StringFilter<"roles"> | string
    usuarios?: UsuariosListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
    usuarios?: usuariosOrderByRelationAggregateInput
    _relevance?: rolesOrderByRelevanceInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number
    nombre_rol?: string
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    usuarios?: UsuariosListRelationFilter
  }, "id_rol" | "nombre_rol">

  export type rolesOrderByWithAggregationInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id_rol?: IntWithAggregatesFilter<"roles"> | number
    nombre_rol?: StringWithAggregatesFilter<"roles"> | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    id_rol?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    apellido?: StringFilter<"usuarios"> | string
    correo_electronico?: StringFilter<"usuarios"> | string
    contrase_a_hash?: StringFilter<"usuarios"> | string
    telefono?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeFilter<"usuarios"> | Date | string
    reservas?: ReservasListRelationFilter
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrase_a_hash?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    reservas?: reservasOrderByRelationAggregateInput
    roles?: rolesOrderByWithRelationInput
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    correo_electronico?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_rol?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    apellido?: StringFilter<"usuarios"> | string
    contrase_a_hash?: StringFilter<"usuarios"> | string
    telefono?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeFilter<"usuarios"> | Date | string
    reservas?: ReservasListRelationFilter
    roles?: XOR<RolesScalarRelationFilter, rolesWhereInput>
  }, "id_usuario" | "correo_electronico">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrase_a_hash?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    id_rol?: IntWithAggregatesFilter<"usuarios"> | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    apellido?: StringWithAggregatesFilter<"usuarios"> | string
    correo_electronico?: StringWithAggregatesFilter<"usuarios"> | string
    contrase_a_hash?: StringWithAggregatesFilter<"usuarios"> | string
    telefono?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type canchasCreateInput = {
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
    categorias_cancha: categorias_canchaCreateNestedOneWithoutCanchasInput
    reservas?: reservasCreateNestedManyWithoutCanchasInput
  }

  export type canchasUncheckedCreateInput = {
    id_cancha?: number
    id_categoria: number
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
    reservas?: reservasUncheckedCreateNestedManyWithoutCanchasInput
  }

  export type canchasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
    categorias_cancha?: categorias_canchaUpdateOneRequiredWithoutCanchasNestedInput
    reservas?: reservasUpdateManyWithoutCanchasNestedInput
  }

  export type canchasUncheckedUpdateInput = {
    id_cancha?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
    reservas?: reservasUncheckedUpdateManyWithoutCanchasNestedInput
  }

  export type canchasCreateManyInput = {
    id_cancha?: number
    id_categoria: number
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
  }

  export type canchasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
  }

  export type canchasUncheckedUpdateManyInput = {
    id_cancha?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
  }

  export type categorias_canchaCreateInput = {
    nombre_categoria: string
    descripcion?: string | null
    canchas?: canchasCreateNestedManyWithoutCategorias_canchaInput
  }

  export type categorias_canchaUncheckedCreateInput = {
    id_categoria?: number
    nombre_categoria: string
    descripcion?: string | null
    canchas?: canchasUncheckedCreateNestedManyWithoutCategorias_canchaInput
  }

  export type categorias_canchaUpdateInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    canchas?: canchasUpdateManyWithoutCategorias_canchaNestedInput
  }

  export type categorias_canchaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    canchas?: canchasUncheckedUpdateManyWithoutCategorias_canchaNestedInput
  }

  export type categorias_canchaCreateManyInput = {
    id_categoria?: number
    nombre_categoria: string
    descripcion?: string | null
  }

  export type categorias_canchaUpdateManyMutationInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categorias_canchaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosCreateInput = {
    fecha_pago?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: $Enums.pagos_metodo_pago
    estado_pago?: $Enums.pagos_estado_pago
    reservas: reservasCreateNestedOneWithoutPagosInput
  }

  export type pagosUncheckedCreateInput = {
    id_pago?: number
    id_reserva: number
    fecha_pago?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: $Enums.pagos_metodo_pago
    estado_pago?: $Enums.pagos_estado_pago
  }

  export type pagosUpdateInput = {
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFieldUpdateOperationsInput | $Enums.pagos_estado_pago
    reservas?: reservasUpdateOneRequiredWithoutPagosNestedInput
  }

  export type pagosUncheckedUpdateInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFieldUpdateOperationsInput | $Enums.pagos_estado_pago
  }

  export type pagosCreateManyInput = {
    id_pago?: number
    id_reserva: number
    fecha_pago?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: $Enums.pagos_metodo_pago
    estado_pago?: $Enums.pagos_estado_pago
  }

  export type pagosUpdateManyMutationInput = {
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFieldUpdateOperationsInput | $Enums.pagos_estado_pago
  }

  export type pagosUncheckedUpdateManyInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFieldUpdateOperationsInput | $Enums.pagos_estado_pago
  }

  export type reservasCreateInput = {
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
    pagos?: pagosCreateNestedOneWithoutReservasInput
    canchas: canchasCreateNestedOneWithoutReservasInput
    usuarios: usuariosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateInput = {
    id_reserva?: number
    id_usuario: number
    id_cancha: number
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
    pagos?: pagosUncheckedCreateNestedOneWithoutReservasInput
  }

  export type reservasUpdateInput = {
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
    pagos?: pagosUpdateOneWithoutReservasNestedInput
    canchas?: canchasUpdateOneRequiredWithoutReservasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cancha?: IntFieldUpdateOperationsInput | number
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
    pagos?: pagosUncheckedUpdateOneWithoutReservasNestedInput
  }

  export type reservasCreateManyInput = {
    id_reserva?: number
    id_usuario: number
    id_cancha: number
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
  }

  export type reservasUpdateManyMutationInput = {
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
  }

  export type reservasUncheckedUpdateManyInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cancha?: IntFieldUpdateOperationsInput | number
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
  }

  export type rolesCreateInput = {
    nombre_rol: string
    usuarios?: usuariosCreateNestedManyWithoutRolesInput
  }

  export type rolesUncheckedCreateInput = {
    id_rol?: number
    nombre_rol: string
    usuarios?: usuariosUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rolesUpdateInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateManyWithoutRolesNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rolesCreateManyInput = {
    id_rol?: number
    nombre_rol: string
  }

  export type rolesUpdateManyMutationInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosCreateInput = {
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
    roles: rolesCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    id_rol: number
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
    roles?: rolesUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    id_rol: number
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumcanchas_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.canchas_estado | Enumcanchas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.canchas_estado[]
    notIn?: $Enums.canchas_estado[]
    not?: NestedEnumcanchas_estadoFilter<$PrismaModel> | $Enums.canchas_estado
  }

  export type Categorias_canchaScalarRelationFilter = {
    is?: categorias_canchaWhereInput
    isNot?: categorias_canchaWhereInput
  }

  export type ReservasListRelationFilter = {
    every?: reservasWhereInput
    some?: reservasWhereInput
    none?: reservasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reservasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type canchasOrderByRelevanceInput = {
    fields: canchasOrderByRelevanceFieldEnum | canchasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type canchasCountOrderByAggregateInput = {
    id_cancha?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tarifa_por_hora?: SortOrder
    estado?: SortOrder
  }

  export type canchasAvgOrderByAggregateInput = {
    id_cancha?: SortOrder
    id_categoria?: SortOrder
    tarifa_por_hora?: SortOrder
  }

  export type canchasMaxOrderByAggregateInput = {
    id_cancha?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tarifa_por_hora?: SortOrder
    estado?: SortOrder
  }

  export type canchasMinOrderByAggregateInput = {
    id_cancha?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    tarifa_por_hora?: SortOrder
    estado?: SortOrder
  }

  export type canchasSumOrderByAggregateInput = {
    id_cancha?: SortOrder
    id_categoria?: SortOrder
    tarifa_por_hora?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumcanchas_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.canchas_estado | Enumcanchas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.canchas_estado[]
    notIn?: $Enums.canchas_estado[]
    not?: NestedEnumcanchas_estadoWithAggregatesFilter<$PrismaModel> | $Enums.canchas_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcanchas_estadoFilter<$PrismaModel>
    _max?: NestedEnumcanchas_estadoFilter<$PrismaModel>
  }

  export type CanchasListRelationFilter = {
    every?: canchasWhereInput
    some?: canchasWhereInput
    none?: canchasWhereInput
  }

  export type canchasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categorias_canchaOrderByRelevanceInput = {
    fields: categorias_canchaOrderByRelevanceFieldEnum | categorias_canchaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categorias_canchaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categorias_canchaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type categorias_canchaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categorias_canchaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categorias_canchaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumpagos_metodo_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel> | $Enums.pagos_metodo_pago
  }

  export type Enumpagos_estado_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_estado_pago | Enumpagos_estado_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_estado_pago[]
    notIn?: $Enums.pagos_estado_pago[]
    not?: NestedEnumpagos_estado_pagoFilter<$PrismaModel> | $Enums.pagos_estado_pago
  }

  export type ReservasScalarRelationFilter = {
    is?: reservasWhereInput
    isNot?: reservasWhereInput
  }

  export type pagosCountOrderByAggregateInput = {
    id_pago?: SortOrder
    id_reserva?: SortOrder
    fecha_pago?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
  }

  export type pagosAvgOrderByAggregateInput = {
    id_pago?: SortOrder
    id_reserva?: SortOrder
    monto?: SortOrder
  }

  export type pagosMaxOrderByAggregateInput = {
    id_pago?: SortOrder
    id_reserva?: SortOrder
    fecha_pago?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
  }

  export type pagosMinOrderByAggregateInput = {
    id_pago?: SortOrder
    id_reserva?: SortOrder
    fecha_pago?: SortOrder
    monto?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
  }

  export type pagosSumOrderByAggregateInput = {
    id_pago?: SortOrder
    id_reserva?: SortOrder
    monto?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pagos_metodo_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
    _max?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
  }

  export type Enumpagos_estado_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_estado_pago | Enumpagos_estado_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_estado_pago[]
    notIn?: $Enums.pagos_estado_pago[]
    not?: NestedEnumpagos_estado_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pagos_estado_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpagos_estado_pagoFilter<$PrismaModel>
    _max?: NestedEnumpagos_estado_pagoFilter<$PrismaModel>
  }

  export type Enumreservas_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.reservas_estado | Enumreservas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reservas_estado[]
    notIn?: $Enums.reservas_estado[]
    not?: NestedEnumreservas_estadoFilter<$PrismaModel> | $Enums.reservas_estado
  }

  export type PagosNullableScalarRelationFilter = {
    is?: pagosWhereInput | null
    isNot?: pagosWhereInput | null
  }

  export type CanchasScalarRelationFilter = {
    is?: canchasWhereInput
    isNot?: canchasWhereInput
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type reservasCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_cancha?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    monto_total?: SortOrder
    estado?: SortOrder
  }

  export type reservasAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_cancha?: SortOrder
    monto_total?: SortOrder
  }

  export type reservasMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_cancha?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    monto_total?: SortOrder
    estado?: SortOrder
  }

  export type reservasMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_cancha?: SortOrder
    fecha_hora_inicio?: SortOrder
    fecha_hora_fin?: SortOrder
    monto_total?: SortOrder
    estado?: SortOrder
  }

  export type reservasSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_cancha?: SortOrder
    monto_total?: SortOrder
  }

  export type Enumreservas_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservas_estado | Enumreservas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reservas_estado[]
    notIn?: $Enums.reservas_estado[]
    not?: NestedEnumreservas_estadoWithAggregatesFilter<$PrismaModel> | $Enums.reservas_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservas_estadoFilter<$PrismaModel>
    _max?: NestedEnumreservas_estadoFilter<$PrismaModel>
  }

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesOrderByRelevanceInput = {
    fields: rolesOrderByRelevanceFieldEnum | rolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolesCountOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id_rol?: SortOrder
    nombre_rol?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id_rol?: SortOrder
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrase_a_hash?: SortOrder
    telefono?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrase_a_hash?: SortOrder
    telefono?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrase_a_hash?: SortOrder
    telefono?: SortOrder
    fecha_registro?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_rol?: SortOrder
  }

  export type categorias_canchaCreateNestedOneWithoutCanchasInput = {
    create?: XOR<categorias_canchaCreateWithoutCanchasInput, categorias_canchaUncheckedCreateWithoutCanchasInput>
    connectOrCreate?: categorias_canchaCreateOrConnectWithoutCanchasInput
    connect?: categorias_canchaWhereUniqueInput
  }

  export type reservasCreateNestedManyWithoutCanchasInput = {
    create?: XOR<reservasCreateWithoutCanchasInput, reservasUncheckedCreateWithoutCanchasInput> | reservasCreateWithoutCanchasInput[] | reservasUncheckedCreateWithoutCanchasInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutCanchasInput | reservasCreateOrConnectWithoutCanchasInput[]
    createMany?: reservasCreateManyCanchasInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type reservasUncheckedCreateNestedManyWithoutCanchasInput = {
    create?: XOR<reservasCreateWithoutCanchasInput, reservasUncheckedCreateWithoutCanchasInput> | reservasCreateWithoutCanchasInput[] | reservasUncheckedCreateWithoutCanchasInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutCanchasInput | reservasCreateOrConnectWithoutCanchasInput[]
    createMany?: reservasCreateManyCanchasInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumcanchas_estadoFieldUpdateOperationsInput = {
    set?: $Enums.canchas_estado
  }

  export type categorias_canchaUpdateOneRequiredWithoutCanchasNestedInput = {
    create?: XOR<categorias_canchaCreateWithoutCanchasInput, categorias_canchaUncheckedCreateWithoutCanchasInput>
    connectOrCreate?: categorias_canchaCreateOrConnectWithoutCanchasInput
    upsert?: categorias_canchaUpsertWithoutCanchasInput
    connect?: categorias_canchaWhereUniqueInput
    update?: XOR<XOR<categorias_canchaUpdateToOneWithWhereWithoutCanchasInput, categorias_canchaUpdateWithoutCanchasInput>, categorias_canchaUncheckedUpdateWithoutCanchasInput>
  }

  export type reservasUpdateManyWithoutCanchasNestedInput = {
    create?: XOR<reservasCreateWithoutCanchasInput, reservasUncheckedCreateWithoutCanchasInput> | reservasCreateWithoutCanchasInput[] | reservasUncheckedCreateWithoutCanchasInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutCanchasInput | reservasCreateOrConnectWithoutCanchasInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutCanchasInput | reservasUpsertWithWhereUniqueWithoutCanchasInput[]
    createMany?: reservasCreateManyCanchasInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutCanchasInput | reservasUpdateWithWhereUniqueWithoutCanchasInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutCanchasInput | reservasUpdateManyWithWhereWithoutCanchasInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reservasUncheckedUpdateManyWithoutCanchasNestedInput = {
    create?: XOR<reservasCreateWithoutCanchasInput, reservasUncheckedCreateWithoutCanchasInput> | reservasCreateWithoutCanchasInput[] | reservasUncheckedCreateWithoutCanchasInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutCanchasInput | reservasCreateOrConnectWithoutCanchasInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutCanchasInput | reservasUpsertWithWhereUniqueWithoutCanchasInput[]
    createMany?: reservasCreateManyCanchasInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutCanchasInput | reservasUpdateWithWhereUniqueWithoutCanchasInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutCanchasInput | reservasUpdateManyWithWhereWithoutCanchasInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type canchasCreateNestedManyWithoutCategorias_canchaInput = {
    create?: XOR<canchasCreateWithoutCategorias_canchaInput, canchasUncheckedCreateWithoutCategorias_canchaInput> | canchasCreateWithoutCategorias_canchaInput[] | canchasUncheckedCreateWithoutCategorias_canchaInput[]
    connectOrCreate?: canchasCreateOrConnectWithoutCategorias_canchaInput | canchasCreateOrConnectWithoutCategorias_canchaInput[]
    createMany?: canchasCreateManyCategorias_canchaInputEnvelope
    connect?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
  }

  export type canchasUncheckedCreateNestedManyWithoutCategorias_canchaInput = {
    create?: XOR<canchasCreateWithoutCategorias_canchaInput, canchasUncheckedCreateWithoutCategorias_canchaInput> | canchasCreateWithoutCategorias_canchaInput[] | canchasUncheckedCreateWithoutCategorias_canchaInput[]
    connectOrCreate?: canchasCreateOrConnectWithoutCategorias_canchaInput | canchasCreateOrConnectWithoutCategorias_canchaInput[]
    createMany?: canchasCreateManyCategorias_canchaInputEnvelope
    connect?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
  }

  export type canchasUpdateManyWithoutCategorias_canchaNestedInput = {
    create?: XOR<canchasCreateWithoutCategorias_canchaInput, canchasUncheckedCreateWithoutCategorias_canchaInput> | canchasCreateWithoutCategorias_canchaInput[] | canchasUncheckedCreateWithoutCategorias_canchaInput[]
    connectOrCreate?: canchasCreateOrConnectWithoutCategorias_canchaInput | canchasCreateOrConnectWithoutCategorias_canchaInput[]
    upsert?: canchasUpsertWithWhereUniqueWithoutCategorias_canchaInput | canchasUpsertWithWhereUniqueWithoutCategorias_canchaInput[]
    createMany?: canchasCreateManyCategorias_canchaInputEnvelope
    set?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    disconnect?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    delete?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    connect?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    update?: canchasUpdateWithWhereUniqueWithoutCategorias_canchaInput | canchasUpdateWithWhereUniqueWithoutCategorias_canchaInput[]
    updateMany?: canchasUpdateManyWithWhereWithoutCategorias_canchaInput | canchasUpdateManyWithWhereWithoutCategorias_canchaInput[]
    deleteMany?: canchasScalarWhereInput | canchasScalarWhereInput[]
  }

  export type canchasUncheckedUpdateManyWithoutCategorias_canchaNestedInput = {
    create?: XOR<canchasCreateWithoutCategorias_canchaInput, canchasUncheckedCreateWithoutCategorias_canchaInput> | canchasCreateWithoutCategorias_canchaInput[] | canchasUncheckedCreateWithoutCategorias_canchaInput[]
    connectOrCreate?: canchasCreateOrConnectWithoutCategorias_canchaInput | canchasCreateOrConnectWithoutCategorias_canchaInput[]
    upsert?: canchasUpsertWithWhereUniqueWithoutCategorias_canchaInput | canchasUpsertWithWhereUniqueWithoutCategorias_canchaInput[]
    createMany?: canchasCreateManyCategorias_canchaInputEnvelope
    set?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    disconnect?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    delete?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    connect?: canchasWhereUniqueInput | canchasWhereUniqueInput[]
    update?: canchasUpdateWithWhereUniqueWithoutCategorias_canchaInput | canchasUpdateWithWhereUniqueWithoutCategorias_canchaInput[]
    updateMany?: canchasUpdateManyWithWhereWithoutCategorias_canchaInput | canchasUpdateManyWithWhereWithoutCategorias_canchaInput[]
    deleteMany?: canchasScalarWhereInput | canchasScalarWhereInput[]
  }

  export type reservasCreateNestedOneWithoutPagosInput = {
    create?: XOR<reservasCreateWithoutPagosInput, reservasUncheckedCreateWithoutPagosInput>
    connectOrCreate?: reservasCreateOrConnectWithoutPagosInput
    connect?: reservasWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumpagos_metodo_pagoFieldUpdateOperationsInput = {
    set?: $Enums.pagos_metodo_pago
  }

  export type Enumpagos_estado_pagoFieldUpdateOperationsInput = {
    set?: $Enums.pagos_estado_pago
  }

  export type reservasUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<reservasCreateWithoutPagosInput, reservasUncheckedCreateWithoutPagosInput>
    connectOrCreate?: reservasCreateOrConnectWithoutPagosInput
    upsert?: reservasUpsertWithoutPagosInput
    connect?: reservasWhereUniqueInput
    update?: XOR<XOR<reservasUpdateToOneWithWhereWithoutPagosInput, reservasUpdateWithoutPagosInput>, reservasUncheckedUpdateWithoutPagosInput>
  }

  export type pagosCreateNestedOneWithoutReservasInput = {
    create?: XOR<pagosCreateWithoutReservasInput, pagosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: pagosCreateOrConnectWithoutReservasInput
    connect?: pagosWhereUniqueInput
  }

  export type canchasCreateNestedOneWithoutReservasInput = {
    create?: XOR<canchasCreateWithoutReservasInput, canchasUncheckedCreateWithoutReservasInput>
    connectOrCreate?: canchasCreateOrConnectWithoutReservasInput
    connect?: canchasWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutReservasInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    connect?: usuariosWhereUniqueInput
  }

  export type pagosUncheckedCreateNestedOneWithoutReservasInput = {
    create?: XOR<pagosCreateWithoutReservasInput, pagosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: pagosCreateOrConnectWithoutReservasInput
    connect?: pagosWhereUniqueInput
  }

  export type Enumreservas_estadoFieldUpdateOperationsInput = {
    set?: $Enums.reservas_estado
  }

  export type pagosUpdateOneWithoutReservasNestedInput = {
    create?: XOR<pagosCreateWithoutReservasInput, pagosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: pagosCreateOrConnectWithoutReservasInput
    upsert?: pagosUpsertWithoutReservasInput
    disconnect?: pagosWhereInput | boolean
    delete?: pagosWhereInput | boolean
    connect?: pagosWhereUniqueInput
    update?: XOR<XOR<pagosUpdateToOneWithWhereWithoutReservasInput, pagosUpdateWithoutReservasInput>, pagosUncheckedUpdateWithoutReservasInput>
  }

  export type canchasUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<canchasCreateWithoutReservasInput, canchasUncheckedCreateWithoutReservasInput>
    connectOrCreate?: canchasCreateOrConnectWithoutReservasInput
    upsert?: canchasUpsertWithoutReservasInput
    connect?: canchasWhereUniqueInput
    update?: XOR<XOR<canchasUpdateToOneWithWhereWithoutReservasInput, canchasUpdateWithoutReservasInput>, canchasUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    upsert?: usuariosUpsertWithoutReservasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReservasInput, usuariosUpdateWithoutReservasInput>, usuariosUncheckedUpdateWithoutReservasInput>
  }

  export type pagosUncheckedUpdateOneWithoutReservasNestedInput = {
    create?: XOR<pagosCreateWithoutReservasInput, pagosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: pagosCreateOrConnectWithoutReservasInput
    upsert?: pagosUpsertWithoutReservasInput
    disconnect?: pagosWhereInput | boolean
    delete?: pagosWhereInput | boolean
    connect?: pagosWhereUniqueInput
    update?: XOR<XOR<pagosUpdateToOneWithWhereWithoutReservasInput, pagosUpdateWithoutReservasInput>, pagosUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosCreateNestedManyWithoutRolesInput = {
    create?: XOR<usuariosCreateWithoutRolesInput, usuariosUncheckedCreateWithoutRolesInput> | usuariosCreateWithoutRolesInput[] | usuariosUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutRolesInput | usuariosCreateOrConnectWithoutRolesInput[]
    createMany?: usuariosCreateManyRolesInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usuariosCreateWithoutRolesInput, usuariosUncheckedCreateWithoutRolesInput> | usuariosCreateWithoutRolesInput[] | usuariosUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutRolesInput | usuariosCreateOrConnectWithoutRolesInput[]
    createMany?: usuariosCreateManyRolesInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usuariosCreateWithoutRolesInput, usuariosUncheckedCreateWithoutRolesInput> | usuariosCreateWithoutRolesInput[] | usuariosUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutRolesInput | usuariosCreateOrConnectWithoutRolesInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutRolesInput | usuariosUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usuariosCreateManyRolesInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutRolesInput | usuariosUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutRolesInput | usuariosUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type usuariosUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usuariosCreateWithoutRolesInput, usuariosUncheckedCreateWithoutRolesInput> | usuariosCreateWithoutRolesInput[] | usuariosUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutRolesInput | usuariosCreateOrConnectWithoutRolesInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutRolesInput | usuariosUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usuariosCreateManyRolesInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutRolesInput | usuariosUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutRolesInput | usuariosUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type reservasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type rolesCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<rolesCreateWithoutUsuariosInput, rolesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsuariosInput
    connect?: rolesWhereUniqueInput
  }

  export type reservasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type reservasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuariosInput | reservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuariosInput | reservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuariosInput | reservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type rolesUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<rolesCreateWithoutUsuariosInput, rolesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsuariosInput
    upsert?: rolesUpsertWithoutUsuariosInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsuariosInput, rolesUpdateWithoutUsuariosInput>, rolesUncheckedUpdateWithoutUsuariosInput>
  }

  export type reservasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuariosInput | reservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuariosInput | reservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuariosInput | reservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumcanchas_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.canchas_estado | Enumcanchas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.canchas_estado[]
    notIn?: $Enums.canchas_estado[]
    not?: NestedEnumcanchas_estadoFilter<$PrismaModel> | $Enums.canchas_estado
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumcanchas_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.canchas_estado | Enumcanchas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.canchas_estado[]
    notIn?: $Enums.canchas_estado[]
    not?: NestedEnumcanchas_estadoWithAggregatesFilter<$PrismaModel> | $Enums.canchas_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcanchas_estadoFilter<$PrismaModel>
    _max?: NestedEnumcanchas_estadoFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumpagos_metodo_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel> | $Enums.pagos_metodo_pago
  }

  export type NestedEnumpagos_estado_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_estado_pago | Enumpagos_estado_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_estado_pago[]
    notIn?: $Enums.pagos_estado_pago[]
    not?: NestedEnumpagos_estado_pagoFilter<$PrismaModel> | $Enums.pagos_estado_pago
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_metodo_pago | Enumpagos_metodo_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_metodo_pago[]
    notIn?: $Enums.pagos_metodo_pago[]
    not?: NestedEnumpagos_metodo_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pagos_metodo_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
    _max?: NestedEnumpagos_metodo_pagoFilter<$PrismaModel>
  }

  export type NestedEnumpagos_estado_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pagos_estado_pago | Enumpagos_estado_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.pagos_estado_pago[]
    notIn?: $Enums.pagos_estado_pago[]
    not?: NestedEnumpagos_estado_pagoWithAggregatesFilter<$PrismaModel> | $Enums.pagos_estado_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpagos_estado_pagoFilter<$PrismaModel>
    _max?: NestedEnumpagos_estado_pagoFilter<$PrismaModel>
  }

  export type NestedEnumreservas_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.reservas_estado | Enumreservas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reservas_estado[]
    notIn?: $Enums.reservas_estado[]
    not?: NestedEnumreservas_estadoFilter<$PrismaModel> | $Enums.reservas_estado
  }

  export type NestedEnumreservas_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservas_estado | Enumreservas_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reservas_estado[]
    notIn?: $Enums.reservas_estado[]
    not?: NestedEnumreservas_estadoWithAggregatesFilter<$PrismaModel> | $Enums.reservas_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservas_estadoFilter<$PrismaModel>
    _max?: NestedEnumreservas_estadoFilter<$PrismaModel>
  }

  export type categorias_canchaCreateWithoutCanchasInput = {
    nombre_categoria: string
    descripcion?: string | null
  }

  export type categorias_canchaUncheckedCreateWithoutCanchasInput = {
    id_categoria?: number
    nombre_categoria: string
    descripcion?: string | null
  }

  export type categorias_canchaCreateOrConnectWithoutCanchasInput = {
    where: categorias_canchaWhereUniqueInput
    create: XOR<categorias_canchaCreateWithoutCanchasInput, categorias_canchaUncheckedCreateWithoutCanchasInput>
  }

  export type reservasCreateWithoutCanchasInput = {
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
    pagos?: pagosCreateNestedOneWithoutReservasInput
    usuarios: usuariosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateWithoutCanchasInput = {
    id_reserva?: number
    id_usuario: number
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
    pagos?: pagosUncheckedCreateNestedOneWithoutReservasInput
  }

  export type reservasCreateOrConnectWithoutCanchasInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutCanchasInput, reservasUncheckedCreateWithoutCanchasInput>
  }

  export type reservasCreateManyCanchasInputEnvelope = {
    data: reservasCreateManyCanchasInput | reservasCreateManyCanchasInput[]
    skipDuplicates?: boolean
  }

  export type categorias_canchaUpsertWithoutCanchasInput = {
    update: XOR<categorias_canchaUpdateWithoutCanchasInput, categorias_canchaUncheckedUpdateWithoutCanchasInput>
    create: XOR<categorias_canchaCreateWithoutCanchasInput, categorias_canchaUncheckedCreateWithoutCanchasInput>
    where?: categorias_canchaWhereInput
  }

  export type categorias_canchaUpdateToOneWithWhereWithoutCanchasInput = {
    where?: categorias_canchaWhereInput
    data: XOR<categorias_canchaUpdateWithoutCanchasInput, categorias_canchaUncheckedUpdateWithoutCanchasInput>
  }

  export type categorias_canchaUpdateWithoutCanchasInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categorias_canchaUncheckedUpdateWithoutCanchasInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservasUpsertWithWhereUniqueWithoutCanchasInput = {
    where: reservasWhereUniqueInput
    update: XOR<reservasUpdateWithoutCanchasInput, reservasUncheckedUpdateWithoutCanchasInput>
    create: XOR<reservasCreateWithoutCanchasInput, reservasUncheckedCreateWithoutCanchasInput>
  }

  export type reservasUpdateWithWhereUniqueWithoutCanchasInput = {
    where: reservasWhereUniqueInput
    data: XOR<reservasUpdateWithoutCanchasInput, reservasUncheckedUpdateWithoutCanchasInput>
  }

  export type reservasUpdateManyWithWhereWithoutCanchasInput = {
    where: reservasScalarWhereInput
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyWithoutCanchasInput>
  }

  export type reservasScalarWhereInput = {
    AND?: reservasScalarWhereInput | reservasScalarWhereInput[]
    OR?: reservasScalarWhereInput[]
    NOT?: reservasScalarWhereInput | reservasScalarWhereInput[]
    id_reserva?: IntFilter<"reservas"> | number
    id_usuario?: IntFilter<"reservas"> | number
    id_cancha?: IntFilter<"reservas"> | number
    fecha_hora_inicio?: DateTimeFilter<"reservas"> | Date | string
    fecha_hora_fin?: DateTimeFilter<"reservas"> | Date | string
    monto_total?: DecimalFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFilter<"reservas"> | $Enums.reservas_estado
  }

  export type canchasCreateWithoutCategorias_canchaInput = {
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
    reservas?: reservasCreateNestedManyWithoutCanchasInput
  }

  export type canchasUncheckedCreateWithoutCategorias_canchaInput = {
    id_cancha?: number
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
    reservas?: reservasUncheckedCreateNestedManyWithoutCanchasInput
  }

  export type canchasCreateOrConnectWithoutCategorias_canchaInput = {
    where: canchasWhereUniqueInput
    create: XOR<canchasCreateWithoutCategorias_canchaInput, canchasUncheckedCreateWithoutCategorias_canchaInput>
  }

  export type canchasCreateManyCategorias_canchaInputEnvelope = {
    data: canchasCreateManyCategorias_canchaInput | canchasCreateManyCategorias_canchaInput[]
    skipDuplicates?: boolean
  }

  export type canchasUpsertWithWhereUniqueWithoutCategorias_canchaInput = {
    where: canchasWhereUniqueInput
    update: XOR<canchasUpdateWithoutCategorias_canchaInput, canchasUncheckedUpdateWithoutCategorias_canchaInput>
    create: XOR<canchasCreateWithoutCategorias_canchaInput, canchasUncheckedCreateWithoutCategorias_canchaInput>
  }

  export type canchasUpdateWithWhereUniqueWithoutCategorias_canchaInput = {
    where: canchasWhereUniqueInput
    data: XOR<canchasUpdateWithoutCategorias_canchaInput, canchasUncheckedUpdateWithoutCategorias_canchaInput>
  }

  export type canchasUpdateManyWithWhereWithoutCategorias_canchaInput = {
    where: canchasScalarWhereInput
    data: XOR<canchasUpdateManyMutationInput, canchasUncheckedUpdateManyWithoutCategorias_canchaInput>
  }

  export type canchasScalarWhereInput = {
    AND?: canchasScalarWhereInput | canchasScalarWhereInput[]
    OR?: canchasScalarWhereInput[]
    NOT?: canchasScalarWhereInput | canchasScalarWhereInput[]
    id_cancha?: IntFilter<"canchas"> | number
    id_categoria?: IntFilter<"canchas"> | number
    nombre?: StringFilter<"canchas"> | string
    descripcion?: StringNullableFilter<"canchas"> | string | null
    tarifa_por_hora?: DecimalFilter<"canchas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFilter<"canchas"> | $Enums.canchas_estado
  }

  export type reservasCreateWithoutPagosInput = {
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
    canchas: canchasCreateNestedOneWithoutReservasInput
    usuarios: usuariosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateWithoutPagosInput = {
    id_reserva?: number
    id_usuario: number
    id_cancha: number
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
  }

  export type reservasCreateOrConnectWithoutPagosInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutPagosInput, reservasUncheckedCreateWithoutPagosInput>
  }

  export type reservasUpsertWithoutPagosInput = {
    update: XOR<reservasUpdateWithoutPagosInput, reservasUncheckedUpdateWithoutPagosInput>
    create: XOR<reservasCreateWithoutPagosInput, reservasUncheckedCreateWithoutPagosInput>
    where?: reservasWhereInput
  }

  export type reservasUpdateToOneWithWhereWithoutPagosInput = {
    where?: reservasWhereInput
    data: XOR<reservasUpdateWithoutPagosInput, reservasUncheckedUpdateWithoutPagosInput>
  }

  export type reservasUpdateWithoutPagosInput = {
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
    canchas?: canchasUpdateOneRequiredWithoutReservasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateWithoutPagosInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cancha?: IntFieldUpdateOperationsInput | number
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
  }

  export type pagosCreateWithoutReservasInput = {
    fecha_pago?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: $Enums.pagos_metodo_pago
    estado_pago?: $Enums.pagos_estado_pago
  }

  export type pagosUncheckedCreateWithoutReservasInput = {
    id_pago?: number
    fecha_pago?: Date | string
    monto: Decimal | DecimalJsLike | number | string
    metodo_pago: $Enums.pagos_metodo_pago
    estado_pago?: $Enums.pagos_estado_pago
  }

  export type pagosCreateOrConnectWithoutReservasInput = {
    where: pagosWhereUniqueInput
    create: XOR<pagosCreateWithoutReservasInput, pagosUncheckedCreateWithoutReservasInput>
  }

  export type canchasCreateWithoutReservasInput = {
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
    categorias_cancha: categorias_canchaCreateNestedOneWithoutCanchasInput
  }

  export type canchasUncheckedCreateWithoutReservasInput = {
    id_cancha?: number
    id_categoria: number
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
  }

  export type canchasCreateOrConnectWithoutReservasInput = {
    where: canchasWhereUniqueInput
    create: XOR<canchasCreateWithoutReservasInput, canchasUncheckedCreateWithoutReservasInput>
  }

  export type usuariosCreateWithoutReservasInput = {
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
    roles: rolesCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutReservasInput = {
    id_usuario?: number
    id_rol: number
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
  }

  export type usuariosCreateOrConnectWithoutReservasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
  }

  export type pagosUpsertWithoutReservasInput = {
    update: XOR<pagosUpdateWithoutReservasInput, pagosUncheckedUpdateWithoutReservasInput>
    create: XOR<pagosCreateWithoutReservasInput, pagosUncheckedCreateWithoutReservasInput>
    where?: pagosWhereInput
  }

  export type pagosUpdateToOneWithWhereWithoutReservasInput = {
    where?: pagosWhereInput
    data: XOR<pagosUpdateWithoutReservasInput, pagosUncheckedUpdateWithoutReservasInput>
  }

  export type pagosUpdateWithoutReservasInput = {
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFieldUpdateOperationsInput | $Enums.pagos_estado_pago
  }

  export type pagosUncheckedUpdateWithoutReservasInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: Enumpagos_metodo_pagoFieldUpdateOperationsInput | $Enums.pagos_metodo_pago
    estado_pago?: Enumpagos_estado_pagoFieldUpdateOperationsInput | $Enums.pagos_estado_pago
  }

  export type canchasUpsertWithoutReservasInput = {
    update: XOR<canchasUpdateWithoutReservasInput, canchasUncheckedUpdateWithoutReservasInput>
    create: XOR<canchasCreateWithoutReservasInput, canchasUncheckedCreateWithoutReservasInput>
    where?: canchasWhereInput
  }

  export type canchasUpdateToOneWithWhereWithoutReservasInput = {
    where?: canchasWhereInput
    data: XOR<canchasUpdateWithoutReservasInput, canchasUncheckedUpdateWithoutReservasInput>
  }

  export type canchasUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
    categorias_cancha?: categorias_canchaUpdateOneRequiredWithoutCanchasNestedInput
  }

  export type canchasUncheckedUpdateWithoutReservasInput = {
    id_cancha?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
  }

  export type usuariosUpsertWithoutReservasInput = {
    update: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReservasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: rolesUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutReservasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateWithoutRolesInput = {
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutRolesInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutRolesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutRolesInput, usuariosUncheckedCreateWithoutRolesInput>
  }

  export type usuariosCreateManyRolesInputEnvelope = {
    data: usuariosCreateManyRolesInput | usuariosCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithWhereUniqueWithoutRolesInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutRolesInput, usuariosUncheckedUpdateWithoutRolesInput>
    create: XOR<usuariosCreateWithoutRolesInput, usuariosUncheckedCreateWithoutRolesInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutRolesInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutRolesInput, usuariosUncheckedUpdateWithoutRolesInput>
  }

  export type usuariosUpdateManyWithWhereWithoutRolesInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutRolesInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    id_rol?: IntFilter<"usuarios"> | number
    nombre?: StringFilter<"usuarios"> | string
    apellido?: StringFilter<"usuarios"> | string
    correo_electronico?: StringFilter<"usuarios"> | string
    contrase_a_hash?: StringFilter<"usuarios"> | string
    telefono?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeFilter<"usuarios"> | Date | string
  }

  export type reservasCreateWithoutUsuariosInput = {
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
    pagos?: pagosCreateNestedOneWithoutReservasInput
    canchas: canchasCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateWithoutUsuariosInput = {
    id_reserva?: number
    id_cancha: number
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
    pagos?: pagosUncheckedCreateNestedOneWithoutReservasInput
  }

  export type reservasCreateOrConnectWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput>
  }

  export type reservasCreateManyUsuariosInputEnvelope = {
    data: reservasCreateManyUsuariosInput | reservasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type rolesCreateWithoutUsuariosInput = {
    nombre_rol: string
  }

  export type rolesUncheckedCreateWithoutUsuariosInput = {
    id_rol?: number
    nombre_rol: string
  }

  export type rolesCreateOrConnectWithoutUsuariosInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsuariosInput, rolesUncheckedCreateWithoutUsuariosInput>
  }

  export type reservasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    update: XOR<reservasUpdateWithoutUsuariosInput, reservasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput>
  }

  export type reservasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    data: XOR<reservasUpdateWithoutUsuariosInput, reservasUncheckedUpdateWithoutUsuariosInput>
  }

  export type reservasUpdateManyWithWhereWithoutUsuariosInput = {
    where: reservasScalarWhereInput
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type rolesUpsertWithoutUsuariosInput = {
    update: XOR<rolesUpdateWithoutUsuariosInput, rolesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<rolesCreateWithoutUsuariosInput, rolesUncheckedCreateWithoutUsuariosInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsuariosInput, rolesUncheckedUpdateWithoutUsuariosInput>
  }

  export type rolesUpdateWithoutUsuariosInput = {
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type rolesUncheckedUpdateWithoutUsuariosInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_rol?: StringFieldUpdateOperationsInput | string
  }

  export type reservasCreateManyCanchasInput = {
    id_reserva?: number
    id_usuario: number
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
  }

  export type reservasUpdateWithoutCanchasInput = {
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
    pagos?: pagosUpdateOneWithoutReservasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateWithoutCanchasInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
    pagos?: pagosUncheckedUpdateOneWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateManyWithoutCanchasInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
  }

  export type canchasCreateManyCategorias_canchaInput = {
    id_cancha?: number
    nombre: string
    descripcion?: string | null
    tarifa_por_hora: Decimal | DecimalJsLike | number | string
    estado?: $Enums.canchas_estado
  }

  export type canchasUpdateWithoutCategorias_canchaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
    reservas?: reservasUpdateManyWithoutCanchasNestedInput
  }

  export type canchasUncheckedUpdateWithoutCategorias_canchaInput = {
    id_cancha?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
    reservas?: reservasUncheckedUpdateManyWithoutCanchasNestedInput
  }

  export type canchasUncheckedUpdateManyWithoutCategorias_canchaInput = {
    id_cancha?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tarifa_por_hora?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumcanchas_estadoFieldUpdateOperationsInput | $Enums.canchas_estado
  }

  export type usuariosCreateManyRolesInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    correo_electronico: string
    contrase_a_hash: string
    telefono?: string | null
    fecha_registro?: Date | string
  }

  export type usuariosUpdateWithoutRolesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutRolesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateManyWithoutRolesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrase_a_hash?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasCreateManyUsuariosInput = {
    id_reserva?: number
    id_cancha: number
    fecha_hora_inicio: Date | string
    fecha_hora_fin: Date | string
    monto_total: Decimal | DecimalJsLike | number | string
    estado?: $Enums.reservas_estado
  }

  export type reservasUpdateWithoutUsuariosInput = {
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
    pagos?: pagosUpdateOneWithoutReservasNestedInput
    canchas?: canchasUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateWithoutUsuariosInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cancha?: IntFieldUpdateOperationsInput | number
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
    pagos?: pagosUncheckedUpdateOneWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateManyWithoutUsuariosInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cancha?: IntFieldUpdateOperationsInput | number
    fecha_hora_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_hora_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: Enumreservas_estadoFieldUpdateOperationsInput | $Enums.reservas_estado
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}