
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model beneficiary
 * 
 */
export type beneficiary = $Result.DefaultSelection<Prisma.$beneficiaryPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model pvtOrg
 * 
 */
export type pvtOrg = $Result.DefaultSelection<Prisma.$pvtOrgPayload>
/**
 * Model serviceProvider
 * 
 */
export type serviceProvider = $Result.DefaultSelection<Prisma.$serviceProviderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ServiceProviderTag: {
  HOSPITALITY: 'HOSPITALITY',
  HEALTHCARE: 'HEALTHCARE',
  BUSINESS: 'BUSINESS',
  PENSION: 'PENSION',
  AGRICULTURE: 'AGRICULTURE',
  HOUSEHOLD_UTILITIES: 'HOUSEHOLD_UTILITIES',
  CHILDCARE: 'CHILDCARE',
  OTHER: 'OTHER'
};

export type ServiceProviderTag = (typeof ServiceProviderTag)[keyof typeof ServiceProviderTag]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ServiceProviderTag = $Enums.ServiceProviderTag

export const ServiceProviderTag: typeof $Enums.ServiceProviderTag

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.beneficiary`: Exposes CRUD operations for the **beneficiary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiaries
    * const beneficiaries = await prisma.beneficiary.findMany()
    * ```
    */
  get beneficiary(): Prisma.beneficiaryDelegate<ExtArgs>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs>;

  /**
   * `prisma.pvtOrg`: Exposes CRUD operations for the **pvtOrg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PvtOrgs
    * const pvtOrgs = await prisma.pvtOrg.findMany()
    * ```
    */
  get pvtOrg(): Prisma.pvtOrgDelegate<ExtArgs>;

  /**
   * `prisma.serviceProvider`: Exposes CRUD operations for the **serviceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceProviders
    * const serviceProviders = await prisma.serviceProvider.findMany()
    * ```
    */
  get serviceProvider(): Prisma.serviceProviderDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Users: 'Users',
    beneficiary: 'beneficiary',
    Voucher: 'Voucher',
    pvtOrg: 'pvtOrg',
    serviceProvider: 'serviceProvider'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "beneficiary" | "voucher" | "pvtOrg" | "serviceProvider"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      beneficiary: {
        payload: Prisma.$beneficiaryPayload<ExtArgs>
        fields: Prisma.beneficiaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.beneficiaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.beneficiaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>
          }
          findFirst: {
            args: Prisma.beneficiaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.beneficiaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>
          }
          findMany: {
            args: Prisma.beneficiaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>[]
          }
          create: {
            args: Prisma.beneficiaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>
          }
          createMany: {
            args: Prisma.beneficiaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.beneficiaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>[]
          }
          delete: {
            args: Prisma.beneficiaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>
          }
          update: {
            args: Prisma.beneficiaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>
          }
          deleteMany: {
            args: Prisma.beneficiaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.beneficiaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.beneficiaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$beneficiaryPayload>
          }
          aggregate: {
            args: Prisma.BeneficiaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiary>
          }
          groupBy: {
            args: Prisma.beneficiaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.beneficiaryCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      pvtOrg: {
        payload: Prisma.$pvtOrgPayload<ExtArgs>
        fields: Prisma.pvtOrgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pvtOrgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pvtOrgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>
          }
          findFirst: {
            args: Prisma.pvtOrgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pvtOrgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>
          }
          findMany: {
            args: Prisma.pvtOrgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>[]
          }
          create: {
            args: Prisma.pvtOrgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>
          }
          createMany: {
            args: Prisma.pvtOrgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pvtOrgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>[]
          }
          delete: {
            args: Prisma.pvtOrgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>
          }
          update: {
            args: Prisma.pvtOrgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>
          }
          deleteMany: {
            args: Prisma.pvtOrgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pvtOrgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pvtOrgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pvtOrgPayload>
          }
          aggregate: {
            args: Prisma.PvtOrgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePvtOrg>
          }
          groupBy: {
            args: Prisma.pvtOrgGroupByArgs<ExtArgs>
            result: $Utils.Optional<PvtOrgGroupByOutputType>[]
          }
          count: {
            args: Prisma.pvtOrgCountArgs<ExtArgs>
            result: $Utils.Optional<PvtOrgCountAggregateOutputType> | number
          }
        }
      }
      serviceProvider: {
        payload: Prisma.$serviceProviderPayload<ExtArgs>
        fields: Prisma.serviceProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.serviceProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.serviceProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>
          }
          findFirst: {
            args: Prisma.serviceProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.serviceProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>
          }
          findMany: {
            args: Prisma.serviceProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>[]
          }
          create: {
            args: Prisma.serviceProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>
          }
          createMany: {
            args: Prisma.serviceProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.serviceProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>[]
          }
          delete: {
            args: Prisma.serviceProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>
          }
          update: {
            args: Prisma.serviceProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>
          }
          deleteMany: {
            args: Prisma.serviceProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.serviceProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.serviceProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$serviceProviderPayload>
          }
          aggregate: {
            args: Prisma.ServiceProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceProvider>
          }
          groupBy: {
            args: Prisma.serviceProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.serviceProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
   * Count Type BeneficiaryCountOutputType
   */

  export type BeneficiaryCountOutputType = {
    AvailableVoucher: number
  }

  export type BeneficiaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AvailableVoucher?: boolean | BeneficiaryCountOutputTypeCountAvailableVoucherArgs
  }

  // Custom InputTypes
  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryCountOutputType
     */
    select?: BeneficiaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeCountAvailableVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type PvtOrgCountOutputType
   */

  export type PvtOrgCountOutputType = {
    VouchersCreated: number
  }

  export type PvtOrgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VouchersCreated?: boolean | PvtOrgCountOutputTypeCountVouchersCreatedArgs
  }

  // Custom InputTypes
  /**
   * PvtOrgCountOutputType without action
   */
  export type PvtOrgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PvtOrgCountOutputType
     */
    select?: PvtOrgCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PvtOrgCountOutputType without action
   */
  export type PvtOrgCountOutputTypeCountVouchersCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Count Type ServiceProviderCountOutputType
   */

  export type ServiceProviderCountOutputType = {
    VouchersRequested: number
  }

  export type ServiceProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VouchersRequested?: boolean | ServiceProviderCountOutputTypeCountVouchersRequestedArgs
  }

  // Custom InputTypes
  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProviderCountOutputType
     */
    select?: ServiceProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeCountVouchersRequestedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    firstName: string | null
    recoveryEmail: string | null
    lastName: string | null
    walletPin: string | null
    salt: string | null
    bankName: string | null
    bankAccountHolderName: string | null
    accountNumber: string | null
    isBeneficiary: boolean | null
    isPvtOrg: boolean | null
    isServiceProvider: boolean | null
    walletIdBeneficiary: string | null
    walletIdPvtOrg: string | null
    walletIdServiceProvider: string | null
    createdAt: Date | null
    role: $Enums.Role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    phoneNumber: string | null
    firstName: string | null
    recoveryEmail: string | null
    lastName: string | null
    walletPin: string | null
    salt: string | null
    bankName: string | null
    bankAccountHolderName: string | null
    accountNumber: string | null
    isBeneficiary: boolean | null
    isPvtOrg: boolean | null
    isServiceProvider: boolean | null
    walletIdBeneficiary: string | null
    walletIdPvtOrg: string | null
    walletIdServiceProvider: string | null
    createdAt: Date | null
    role: $Enums.Role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    phoneNumber: number
    firstName: number
    recoveryEmail: number
    lastName: number
    walletPin: number
    salt: number
    bankName: number
    bankAccountHolderName: number
    accountNumber: number
    isBeneficiary: number
    isPvtOrg: number
    isServiceProvider: number
    walletIdBeneficiary: number
    walletIdPvtOrg: number
    walletIdServiceProvider: number
    createdAt: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstName?: true
    recoveryEmail?: true
    lastName?: true
    walletPin?: true
    salt?: true
    bankName?: true
    bankAccountHolderName?: true
    accountNumber?: true
    isBeneficiary?: true
    isPvtOrg?: true
    isServiceProvider?: true
    walletIdBeneficiary?: true
    walletIdPvtOrg?: true
    walletIdServiceProvider?: true
    createdAt?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstName?: true
    recoveryEmail?: true
    lastName?: true
    walletPin?: true
    salt?: true
    bankName?: true
    bankAccountHolderName?: true
    accountNumber?: true
    isBeneficiary?: true
    isPvtOrg?: true
    isServiceProvider?: true
    walletIdBeneficiary?: true
    walletIdPvtOrg?: true
    walletIdServiceProvider?: true
    createdAt?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    phoneNumber?: true
    firstName?: true
    recoveryEmail?: true
    lastName?: true
    walletPin?: true
    salt?: true
    bankName?: true
    bankAccountHolderName?: true
    accountNumber?: true
    isBeneficiary?: true
    isPvtOrg?: true
    isServiceProvider?: true
    walletIdBeneficiary?: true
    walletIdPvtOrg?: true
    walletIdServiceProvider?: true
    createdAt?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    phoneNumber: string | null
    firstName: string | null
    recoveryEmail: string | null
    lastName: string | null
    walletPin: string | null
    salt: string | null
    bankName: string | null
    bankAccountHolderName: string | null
    accountNumber: string | null
    isBeneficiary: boolean
    isPvtOrg: boolean | null
    isServiceProvider: boolean | null
    walletIdBeneficiary: string | null
    walletIdPvtOrg: string | null
    walletIdServiceProvider: string | null
    createdAt: Date
    role: $Enums.Role | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    recoveryEmail?: boolean
    lastName?: boolean
    walletPin?: boolean
    salt?: boolean
    bankName?: boolean
    bankAccountHolderName?: boolean
    accountNumber?: boolean
    isBeneficiary?: boolean
    isPvtOrg?: boolean
    isServiceProvider?: boolean
    walletIdBeneficiary?: boolean
    walletIdPvtOrg?: boolean
    walletIdServiceProvider?: boolean
    createdAt?: boolean
    role?: boolean
    beneficiaryInfo?: boolean | Users$beneficiaryInfoArgs<ExtArgs>
    pvtOrgInfo?: boolean | Users$pvtOrgInfoArgs<ExtArgs>
    serviceProviderInfo?: boolean | Users$serviceProviderInfoArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    recoveryEmail?: boolean
    lastName?: boolean
    walletPin?: boolean
    salt?: boolean
    bankName?: boolean
    bankAccountHolderName?: boolean
    accountNumber?: boolean
    isBeneficiary?: boolean
    isPvtOrg?: boolean
    isServiceProvider?: boolean
    walletIdBeneficiary?: boolean
    walletIdPvtOrg?: boolean
    walletIdServiceProvider?: boolean
    createdAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    recoveryEmail?: boolean
    lastName?: boolean
    walletPin?: boolean
    salt?: boolean
    bankName?: boolean
    bankAccountHolderName?: boolean
    accountNumber?: boolean
    isBeneficiary?: boolean
    isPvtOrg?: boolean
    isServiceProvider?: boolean
    walletIdBeneficiary?: boolean
    walletIdPvtOrg?: boolean
    walletIdServiceProvider?: boolean
    createdAt?: boolean
    role?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beneficiaryInfo?: boolean | Users$beneficiaryInfoArgs<ExtArgs>
    pvtOrgInfo?: boolean | Users$pvtOrgInfoArgs<ExtArgs>
    serviceProviderInfo?: boolean | Users$serviceProviderInfoArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      beneficiaryInfo: Prisma.$beneficiaryPayload<ExtArgs> | null
      pvtOrgInfo: Prisma.$pvtOrgPayload<ExtArgs> | null
      serviceProviderInfo: Prisma.$serviceProviderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phoneNumber: string | null
      firstName: string | null
      recoveryEmail: string | null
      lastName: string | null
      walletPin: string | null
      salt: string | null
      bankName: string | null
      bankAccountHolderName: string | null
      accountNumber: string | null
      isBeneficiary: boolean
      isPvtOrg: boolean | null
      isServiceProvider: boolean | null
      walletIdBeneficiary: string | null
      walletIdPvtOrg: string | null
      walletIdServiceProvider: string | null
      createdAt: Date
      role: $Enums.Role | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    beneficiaryInfo<T extends Users$beneficiaryInfoArgs<ExtArgs> = {}>(args?: Subset<T, Users$beneficiaryInfoArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    pvtOrgInfo<T extends Users$pvtOrgInfoArgs<ExtArgs> = {}>(args?: Subset<T, Users$pvtOrgInfoArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    serviceProviderInfo<T extends Users$serviceProviderInfoArgs<ExtArgs> = {}>(args?: Subset<T, Users$serviceProviderInfoArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly phoneNumber: FieldRef<"Users", 'String'>
    readonly firstName: FieldRef<"Users", 'String'>
    readonly recoveryEmail: FieldRef<"Users", 'String'>
    readonly lastName: FieldRef<"Users", 'String'>
    readonly walletPin: FieldRef<"Users", 'String'>
    readonly salt: FieldRef<"Users", 'String'>
    readonly bankName: FieldRef<"Users", 'String'>
    readonly bankAccountHolderName: FieldRef<"Users", 'String'>
    readonly accountNumber: FieldRef<"Users", 'String'>
    readonly isBeneficiary: FieldRef<"Users", 'Boolean'>
    readonly isPvtOrg: FieldRef<"Users", 'Boolean'>
    readonly isServiceProvider: FieldRef<"Users", 'Boolean'>
    readonly walletIdBeneficiary: FieldRef<"Users", 'String'>
    readonly walletIdPvtOrg: FieldRef<"Users", 'String'>
    readonly walletIdServiceProvider: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly role: FieldRef<"Users", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data?: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.beneficiaryInfo
   */
  export type Users$beneficiaryInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    where?: beneficiaryWhereInput
  }

  /**
   * Users.pvtOrgInfo
   */
  export type Users$pvtOrgInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    where?: pvtOrgWhereInput
  }

  /**
   * Users.serviceProviderInfo
   */
  export type Users$serviceProviderInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    where?: serviceProviderWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model beneficiary
   */

  export type AggregateBeneficiary = {
    _count: BeneficiaryCountAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  export type BeneficiaryMinAggregateOutputType = {
    beneficiaryId: string | null
  }

  export type BeneficiaryMaxAggregateOutputType = {
    beneficiaryId: string | null
  }

  export type BeneficiaryCountAggregateOutputType = {
    beneficiaryId: number
    _all: number
  }


  export type BeneficiaryMinAggregateInputType = {
    beneficiaryId?: true
  }

  export type BeneficiaryMaxAggregateInputType = {
    beneficiaryId?: true
  }

  export type BeneficiaryCountAggregateInputType = {
    beneficiaryId?: true
    _all?: true
  }

  export type BeneficiaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiary to aggregate.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiaryOrderByWithRelationInput | beneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned beneficiaries
    **/
    _count?: true | BeneficiaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiaryMaxAggregateInputType
  }

  export type GetBeneficiaryAggregateType<T extends BeneficiaryAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiary[P]>
      : GetScalarType<T[P], AggregateBeneficiary[P]>
  }




  export type beneficiaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: beneficiaryWhereInput
    orderBy?: beneficiaryOrderByWithAggregationInput | beneficiaryOrderByWithAggregationInput[]
    by: BeneficiaryScalarFieldEnum[] | BeneficiaryScalarFieldEnum
    having?: beneficiaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiaryCountAggregateInputType | true
    _min?: BeneficiaryMinAggregateInputType
    _max?: BeneficiaryMaxAggregateInputType
  }

  export type BeneficiaryGroupByOutputType = {
    beneficiaryId: string
    _count: BeneficiaryCountAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  type GetBeneficiaryGroupByPayload<T extends beneficiaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
        }
      >
    >


  export type beneficiarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    beneficiaryId?: boolean
    AvailableVoucher?: boolean | beneficiary$AvailableVoucherArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiary"]>

  export type beneficiarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    beneficiaryId?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiary"]>

  export type beneficiarySelectScalar = {
    beneficiaryId?: boolean
  }

  export type beneficiaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AvailableVoucher?: boolean | beneficiary$AvailableVoucherArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type beneficiaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $beneficiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "beneficiary"
    objects: {
      AvailableVoucher: Prisma.$VoucherPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      beneficiaryId: string
    }, ExtArgs["result"]["beneficiary"]>
    composites: {}
  }

  type beneficiaryGetPayload<S extends boolean | null | undefined | beneficiaryDefaultArgs> = $Result.GetResult<Prisma.$beneficiaryPayload, S>

  type beneficiaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<beneficiaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BeneficiaryCountAggregateInputType | true
    }

  export interface beneficiaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['beneficiary'], meta: { name: 'beneficiary' } }
    /**
     * Find zero or one Beneficiary that matches the filter.
     * @param {beneficiaryFindUniqueArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends beneficiaryFindUniqueArgs>(args: SelectSubset<T, beneficiaryFindUniqueArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Beneficiary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {beneficiaryFindUniqueOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends beneficiaryFindUniqueOrThrowArgs>(args: SelectSubset<T, beneficiaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Beneficiary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryFindFirstArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends beneficiaryFindFirstArgs>(args?: SelectSubset<T, beneficiaryFindFirstArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Beneficiary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryFindFirstOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends beneficiaryFindFirstOrThrowArgs>(args?: SelectSubset<T, beneficiaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany()
     * 
     * // Get first 10 Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany({ take: 10 })
     * 
     * // Only select the `beneficiaryId`
     * const beneficiaryWithBeneficiaryIdOnly = await prisma.beneficiary.findMany({ select: { beneficiaryId: true } })
     * 
     */
    findMany<T extends beneficiaryFindManyArgs>(args?: SelectSubset<T, beneficiaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Beneficiary.
     * @param {beneficiaryCreateArgs} args - Arguments to create a Beneficiary.
     * @example
     * // Create one Beneficiary
     * const Beneficiary = await prisma.beneficiary.create({
     *   data: {
     *     // ... data to create a Beneficiary
     *   }
     * })
     * 
     */
    create<T extends beneficiaryCreateArgs>(args: SelectSubset<T, beneficiaryCreateArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Beneficiaries.
     * @param {beneficiaryCreateManyArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiary = await prisma.beneficiary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends beneficiaryCreateManyArgs>(args?: SelectSubset<T, beneficiaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beneficiaries and returns the data saved in the database.
     * @param {beneficiaryCreateManyAndReturnArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiary = await prisma.beneficiary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beneficiaries and only return the `beneficiaryId`
     * const beneficiaryWithBeneficiaryIdOnly = await prisma.beneficiary.createManyAndReturn({ 
     *   select: { beneficiaryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends beneficiaryCreateManyAndReturnArgs>(args?: SelectSubset<T, beneficiaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Beneficiary.
     * @param {beneficiaryDeleteArgs} args - Arguments to delete one Beneficiary.
     * @example
     * // Delete one Beneficiary
     * const Beneficiary = await prisma.beneficiary.delete({
     *   where: {
     *     // ... filter to delete one Beneficiary
     *   }
     * })
     * 
     */
    delete<T extends beneficiaryDeleteArgs>(args: SelectSubset<T, beneficiaryDeleteArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Beneficiary.
     * @param {beneficiaryUpdateArgs} args - Arguments to update one Beneficiary.
     * @example
     * // Update one Beneficiary
     * const beneficiary = await prisma.beneficiary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends beneficiaryUpdateArgs>(args: SelectSubset<T, beneficiaryUpdateArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Beneficiaries.
     * @param {beneficiaryDeleteManyArgs} args - Arguments to filter Beneficiaries to delete.
     * @example
     * // Delete a few Beneficiaries
     * const { count } = await prisma.beneficiary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends beneficiaryDeleteManyArgs>(args?: SelectSubset<T, beneficiaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiaries
     * const beneficiary = await prisma.beneficiary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends beneficiaryUpdateManyArgs>(args: SelectSubset<T, beneficiaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Beneficiary.
     * @param {beneficiaryUpsertArgs} args - Arguments to update or create a Beneficiary.
     * @example
     * // Update or create a Beneficiary
     * const beneficiary = await prisma.beneficiary.upsert({
     *   create: {
     *     // ... data to create a Beneficiary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiary we want to update
     *   }
     * })
     */
    upsert<T extends beneficiaryUpsertArgs>(args: SelectSubset<T, beneficiaryUpsertArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryCountArgs} args - Arguments to filter Beneficiaries to count.
     * @example
     * // Count the number of Beneficiaries
     * const count = await prisma.beneficiary.count({
     *   where: {
     *     // ... the filter for the Beneficiaries we want to count
     *   }
     * })
    **/
    count<T extends beneficiaryCountArgs>(
      args?: Subset<T, beneficiaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BeneficiaryAggregateArgs>(args: Subset<T, BeneficiaryAggregateArgs>): Prisma.PrismaPromise<GetBeneficiaryAggregateType<T>>

    /**
     * Group by Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {beneficiaryGroupByArgs} args - Group by arguments.
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
      T extends beneficiaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: beneficiaryGroupByArgs['orderBy'] }
        : { orderBy?: beneficiaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, beneficiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the beneficiary model
   */
  readonly fields: beneficiaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for beneficiary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__beneficiaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AvailableVoucher<T extends beneficiary$AvailableVoucherArgs<ExtArgs> = {}>(args?: Subset<T, beneficiary$AvailableVoucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany"> | Null>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the beneficiary model
   */ 
  interface beneficiaryFieldRefs {
    readonly beneficiaryId: FieldRef<"beneficiary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * beneficiary findUnique
   */
  export type beneficiaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where: beneficiaryWhereUniqueInput
  }

  /**
   * beneficiary findUniqueOrThrow
   */
  export type beneficiaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where: beneficiaryWhereUniqueInput
  }

  /**
   * beneficiary findFirst
   */
  export type beneficiaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiaryOrderByWithRelationInput | beneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiaries.
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiaries.
     */
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * beneficiary findFirstOrThrow
   */
  export type beneficiaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which beneficiary to fetch.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiaryOrderByWithRelationInput | beneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for beneficiaries.
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of beneficiaries.
     */
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * beneficiary findMany
   */
  export type beneficiaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which beneficiaries to fetch.
     */
    where?: beneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of beneficiaries to fetch.
     */
    orderBy?: beneficiaryOrderByWithRelationInput | beneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing beneficiaries.
     */
    cursor?: beneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` beneficiaries.
     */
    skip?: number
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * beneficiary create
   */
  export type beneficiaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * The data needed to create a beneficiary.
     */
    data: XOR<beneficiaryCreateInput, beneficiaryUncheckedCreateInput>
  }

  /**
   * beneficiary createMany
   */
  export type beneficiaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many beneficiaries.
     */
    data: beneficiaryCreateManyInput | beneficiaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * beneficiary createManyAndReturn
   */
  export type beneficiaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many beneficiaries.
     */
    data: beneficiaryCreateManyInput | beneficiaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * beneficiary update
   */
  export type beneficiaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * The data needed to update a beneficiary.
     */
    data: XOR<beneficiaryUpdateInput, beneficiaryUncheckedUpdateInput>
    /**
     * Choose, which beneficiary to update.
     */
    where: beneficiaryWhereUniqueInput
  }

  /**
   * beneficiary updateMany
   */
  export type beneficiaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update beneficiaries.
     */
    data: XOR<beneficiaryUpdateManyMutationInput, beneficiaryUncheckedUpdateManyInput>
    /**
     * Filter which beneficiaries to update
     */
    where?: beneficiaryWhereInput
  }

  /**
   * beneficiary upsert
   */
  export type beneficiaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * The filter to search for the beneficiary to update in case it exists.
     */
    where: beneficiaryWhereUniqueInput
    /**
     * In case the beneficiary found by the `where` argument doesn't exist, create a new beneficiary with this data.
     */
    create: XOR<beneficiaryCreateInput, beneficiaryUncheckedCreateInput>
    /**
     * In case the beneficiary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<beneficiaryUpdateInput, beneficiaryUncheckedUpdateInput>
  }

  /**
   * beneficiary delete
   */
  export type beneficiaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
    /**
     * Filter which beneficiary to delete.
     */
    where: beneficiaryWhereUniqueInput
  }

  /**
   * beneficiary deleteMany
   */
  export type beneficiaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which beneficiaries to delete
     */
    where?: beneficiaryWhereInput
  }

  /**
   * beneficiary.AvailableVoucher
   */
  export type beneficiary$AvailableVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * beneficiary without action
   */
  export type beneficiaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the beneficiary
     */
    select?: beneficiarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: beneficiaryInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    voucherAmount: number | null
  }

  export type VoucherSumAggregateOutputType = {
    voucherAmount: number | null
  }

  export type VoucherMinAggregateOutputType = {
    voucherId: string | null
    voucherAmount: number | null
    voucherCreatedAt: Date | null
    voucherRedeemed: boolean | null
    voucherRedeemedDate: Date | null
    voucherSPId: string | null
    voucherBeneficiaryId: string | null
    PvtOrgById: string | null
  }

  export type VoucherMaxAggregateOutputType = {
    voucherId: string | null
    voucherAmount: number | null
    voucherCreatedAt: Date | null
    voucherRedeemed: boolean | null
    voucherRedeemedDate: Date | null
    voucherSPId: string | null
    voucherBeneficiaryId: string | null
    PvtOrgById: string | null
  }

  export type VoucherCountAggregateOutputType = {
    voucherId: number
    voucherAmount: number
    voucherCreatedAt: number
    voucherRedeemed: number
    voucherRedeemedDate: number
    voucherSPId: number
    voucherBeneficiaryId: number
    PvtOrgById: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    voucherAmount?: true
  }

  export type VoucherSumAggregateInputType = {
    voucherAmount?: true
  }

  export type VoucherMinAggregateInputType = {
    voucherId?: true
    voucherAmount?: true
    voucherCreatedAt?: true
    voucherRedeemed?: true
    voucherRedeemedDate?: true
    voucherSPId?: true
    voucherBeneficiaryId?: true
    PvtOrgById?: true
  }

  export type VoucherMaxAggregateInputType = {
    voucherId?: true
    voucherAmount?: true
    voucherCreatedAt?: true
    voucherRedeemed?: true
    voucherRedeemedDate?: true
    voucherSPId?: true
    voucherBeneficiaryId?: true
    PvtOrgById?: true
  }

  export type VoucherCountAggregateInputType = {
    voucherId?: true
    voucherAmount?: true
    voucherCreatedAt?: true
    voucherRedeemed?: true
    voucherRedeemedDate?: true
    voucherSPId?: true
    voucherBeneficiaryId?: true
    PvtOrgById?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    voucherId: string
    voucherAmount: number
    voucherCreatedAt: Date
    voucherRedeemed: boolean
    voucherRedeemedDate: Date | null
    voucherSPId: string
    voucherBeneficiaryId: string
    PvtOrgById: string
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voucherId?: boolean
    voucherAmount?: boolean
    voucherCreatedAt?: boolean
    voucherRedeemed?: boolean
    voucherRedeemedDate?: boolean
    voucherSPId?: boolean
    voucherBeneficiaryId?: boolean
    PvtOrgById?: boolean
    PvtOrgBy?: boolean | pvtOrgDefaultArgs<ExtArgs>
    BeneficiaryUser?: boolean | beneficiaryDefaultArgs<ExtArgs>
    ServiceProviderUser?: boolean | serviceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voucherId?: boolean
    voucherAmount?: boolean
    voucherCreatedAt?: boolean
    voucherRedeemed?: boolean
    voucherRedeemedDate?: boolean
    voucherSPId?: boolean
    voucherBeneficiaryId?: boolean
    PvtOrgById?: boolean
    PvtOrgBy?: boolean | pvtOrgDefaultArgs<ExtArgs>
    BeneficiaryUser?: boolean | beneficiaryDefaultArgs<ExtArgs>
    ServiceProviderUser?: boolean | serviceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    voucherId?: boolean
    voucherAmount?: boolean
    voucherCreatedAt?: boolean
    voucherRedeemed?: boolean
    voucherRedeemedDate?: boolean
    voucherSPId?: boolean
    voucherBeneficiaryId?: boolean
    PvtOrgById?: boolean
  }

  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PvtOrgBy?: boolean | pvtOrgDefaultArgs<ExtArgs>
    BeneficiaryUser?: boolean | beneficiaryDefaultArgs<ExtArgs>
    ServiceProviderUser?: boolean | serviceProviderDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PvtOrgBy?: boolean | pvtOrgDefaultArgs<ExtArgs>
    BeneficiaryUser?: boolean | beneficiaryDefaultArgs<ExtArgs>
    ServiceProviderUser?: boolean | serviceProviderDefaultArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      PvtOrgBy: Prisma.$pvtOrgPayload<ExtArgs>
      BeneficiaryUser: Prisma.$beneficiaryPayload<ExtArgs>
      ServiceProviderUser: Prisma.$serviceProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      voucherId: string
      voucherAmount: number
      voucherCreatedAt: Date
      voucherRedeemed: boolean
      voucherRedeemedDate: Date | null
      voucherSPId: string
      voucherBeneficiaryId: string
      PvtOrgById: string
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `voucherId`
     * const voucherWithVoucherIdOnly = await prisma.voucher.findMany({ select: { voucherId: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `voucherId`
     * const voucherWithVoucherIdOnly = await prisma.voucher.createManyAndReturn({ 
     *   select: { voucherId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PvtOrgBy<T extends pvtOrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pvtOrgDefaultArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    BeneficiaryUser<T extends beneficiaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, beneficiaryDefaultArgs<ExtArgs>>): Prisma__beneficiaryClient<$Result.GetResult<Prisma.$beneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ServiceProviderUser<T extends serviceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, serviceProviderDefaultArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Voucher model
   */ 
  interface VoucherFieldRefs {
    readonly voucherId: FieldRef<"Voucher", 'String'>
    readonly voucherAmount: FieldRef<"Voucher", 'Int'>
    readonly voucherCreatedAt: FieldRef<"Voucher", 'DateTime'>
    readonly voucherRedeemed: FieldRef<"Voucher", 'Boolean'>
    readonly voucherRedeemedDate: FieldRef<"Voucher", 'DateTime'>
    readonly voucherSPId: FieldRef<"Voucher", 'String'>
    readonly voucherBeneficiaryId: FieldRef<"Voucher", 'String'>
    readonly PvtOrgById: FieldRef<"Voucher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model pvtOrg
   */

  export type AggregatePvtOrg = {
    _count: PvtOrgCountAggregateOutputType | null
    _min: PvtOrgMinAggregateOutputType | null
    _max: PvtOrgMaxAggregateOutputType | null
  }

  export type PvtOrgMinAggregateOutputType = {
    privateOrgId: string | null
    CompanyName: string | null
    positionInCompany: string | null
  }

  export type PvtOrgMaxAggregateOutputType = {
    privateOrgId: string | null
    CompanyName: string | null
    positionInCompany: string | null
  }

  export type PvtOrgCountAggregateOutputType = {
    privateOrgId: number
    CompanyName: number
    positionInCompany: number
    _all: number
  }


  export type PvtOrgMinAggregateInputType = {
    privateOrgId?: true
    CompanyName?: true
    positionInCompany?: true
  }

  export type PvtOrgMaxAggregateInputType = {
    privateOrgId?: true
    CompanyName?: true
    positionInCompany?: true
  }

  export type PvtOrgCountAggregateInputType = {
    privateOrgId?: true
    CompanyName?: true
    positionInCompany?: true
    _all?: true
  }

  export type PvtOrgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pvtOrg to aggregate.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: pvtOrgOrderByWithRelationInput | pvtOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pvtOrgs
    **/
    _count?: true | PvtOrgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PvtOrgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PvtOrgMaxAggregateInputType
  }

  export type GetPvtOrgAggregateType<T extends PvtOrgAggregateArgs> = {
        [P in keyof T & keyof AggregatePvtOrg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePvtOrg[P]>
      : GetScalarType<T[P], AggregatePvtOrg[P]>
  }




  export type pvtOrgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pvtOrgWhereInput
    orderBy?: pvtOrgOrderByWithAggregationInput | pvtOrgOrderByWithAggregationInput[]
    by: PvtOrgScalarFieldEnum[] | PvtOrgScalarFieldEnum
    having?: pvtOrgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PvtOrgCountAggregateInputType | true
    _min?: PvtOrgMinAggregateInputType
    _max?: PvtOrgMaxAggregateInputType
  }

  export type PvtOrgGroupByOutputType = {
    privateOrgId: string
    CompanyName: string | null
    positionInCompany: string | null
    _count: PvtOrgCountAggregateOutputType | null
    _min: PvtOrgMinAggregateOutputType | null
    _max: PvtOrgMaxAggregateOutputType | null
  }

  type GetPvtOrgGroupByPayload<T extends pvtOrgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PvtOrgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PvtOrgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PvtOrgGroupByOutputType[P]>
            : GetScalarType<T[P], PvtOrgGroupByOutputType[P]>
        }
      >
    >


  export type pvtOrgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    privateOrgId?: boolean
    CompanyName?: boolean
    positionInCompany?: boolean
    VouchersCreated?: boolean | pvtOrg$VouchersCreatedArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | PvtOrgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pvtOrg"]>

  export type pvtOrgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    privateOrgId?: boolean
    CompanyName?: boolean
    positionInCompany?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pvtOrg"]>

  export type pvtOrgSelectScalar = {
    privateOrgId?: boolean
    CompanyName?: boolean
    positionInCompany?: boolean
  }

  export type pvtOrgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VouchersCreated?: boolean | pvtOrg$VouchersCreatedArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | PvtOrgCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pvtOrgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $pvtOrgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pvtOrg"
    objects: {
      VouchersCreated: Prisma.$VoucherPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      privateOrgId: string
      CompanyName: string | null
      positionInCompany: string | null
    }, ExtArgs["result"]["pvtOrg"]>
    composites: {}
  }

  type pvtOrgGetPayload<S extends boolean | null | undefined | pvtOrgDefaultArgs> = $Result.GetResult<Prisma.$pvtOrgPayload, S>

  type pvtOrgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pvtOrgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PvtOrgCountAggregateInputType | true
    }

  export interface pvtOrgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pvtOrg'], meta: { name: 'pvtOrg' } }
    /**
     * Find zero or one PvtOrg that matches the filter.
     * @param {pvtOrgFindUniqueArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pvtOrgFindUniqueArgs>(args: SelectSubset<T, pvtOrgFindUniqueArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PvtOrg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pvtOrgFindUniqueOrThrowArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pvtOrgFindUniqueOrThrowArgs>(args: SelectSubset<T, pvtOrgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PvtOrg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgFindFirstArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pvtOrgFindFirstArgs>(args?: SelectSubset<T, pvtOrgFindFirstArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PvtOrg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgFindFirstOrThrowArgs} args - Arguments to find a PvtOrg
     * @example
     * // Get one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pvtOrgFindFirstOrThrowArgs>(args?: SelectSubset<T, pvtOrgFindFirstOrThrowArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PvtOrgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PvtOrgs
     * const pvtOrgs = await prisma.pvtOrg.findMany()
     * 
     * // Get first 10 PvtOrgs
     * const pvtOrgs = await prisma.pvtOrg.findMany({ take: 10 })
     * 
     * // Only select the `privateOrgId`
     * const pvtOrgWithPrivateOrgIdOnly = await prisma.pvtOrg.findMany({ select: { privateOrgId: true } })
     * 
     */
    findMany<T extends pvtOrgFindManyArgs>(args?: SelectSubset<T, pvtOrgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PvtOrg.
     * @param {pvtOrgCreateArgs} args - Arguments to create a PvtOrg.
     * @example
     * // Create one PvtOrg
     * const PvtOrg = await prisma.pvtOrg.create({
     *   data: {
     *     // ... data to create a PvtOrg
     *   }
     * })
     * 
     */
    create<T extends pvtOrgCreateArgs>(args: SelectSubset<T, pvtOrgCreateArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PvtOrgs.
     * @param {pvtOrgCreateManyArgs} args - Arguments to create many PvtOrgs.
     * @example
     * // Create many PvtOrgs
     * const pvtOrg = await prisma.pvtOrg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pvtOrgCreateManyArgs>(args?: SelectSubset<T, pvtOrgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PvtOrgs and returns the data saved in the database.
     * @param {pvtOrgCreateManyAndReturnArgs} args - Arguments to create many PvtOrgs.
     * @example
     * // Create many PvtOrgs
     * const pvtOrg = await prisma.pvtOrg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PvtOrgs and only return the `privateOrgId`
     * const pvtOrgWithPrivateOrgIdOnly = await prisma.pvtOrg.createManyAndReturn({ 
     *   select: { privateOrgId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pvtOrgCreateManyAndReturnArgs>(args?: SelectSubset<T, pvtOrgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PvtOrg.
     * @param {pvtOrgDeleteArgs} args - Arguments to delete one PvtOrg.
     * @example
     * // Delete one PvtOrg
     * const PvtOrg = await prisma.pvtOrg.delete({
     *   where: {
     *     // ... filter to delete one PvtOrg
     *   }
     * })
     * 
     */
    delete<T extends pvtOrgDeleteArgs>(args: SelectSubset<T, pvtOrgDeleteArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PvtOrg.
     * @param {pvtOrgUpdateArgs} args - Arguments to update one PvtOrg.
     * @example
     * // Update one PvtOrg
     * const pvtOrg = await prisma.pvtOrg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pvtOrgUpdateArgs>(args: SelectSubset<T, pvtOrgUpdateArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PvtOrgs.
     * @param {pvtOrgDeleteManyArgs} args - Arguments to filter PvtOrgs to delete.
     * @example
     * // Delete a few PvtOrgs
     * const { count } = await prisma.pvtOrg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pvtOrgDeleteManyArgs>(args?: SelectSubset<T, pvtOrgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PvtOrgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PvtOrgs
     * const pvtOrg = await prisma.pvtOrg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pvtOrgUpdateManyArgs>(args: SelectSubset<T, pvtOrgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PvtOrg.
     * @param {pvtOrgUpsertArgs} args - Arguments to update or create a PvtOrg.
     * @example
     * // Update or create a PvtOrg
     * const pvtOrg = await prisma.pvtOrg.upsert({
     *   create: {
     *     // ... data to create a PvtOrg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PvtOrg we want to update
     *   }
     * })
     */
    upsert<T extends pvtOrgUpsertArgs>(args: SelectSubset<T, pvtOrgUpsertArgs<ExtArgs>>): Prisma__pvtOrgClient<$Result.GetResult<Prisma.$pvtOrgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PvtOrgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgCountArgs} args - Arguments to filter PvtOrgs to count.
     * @example
     * // Count the number of PvtOrgs
     * const count = await prisma.pvtOrg.count({
     *   where: {
     *     // ... the filter for the PvtOrgs we want to count
     *   }
     * })
    **/
    count<T extends pvtOrgCountArgs>(
      args?: Subset<T, pvtOrgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PvtOrgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PvtOrg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PvtOrgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PvtOrgAggregateArgs>(args: Subset<T, PvtOrgAggregateArgs>): Prisma.PrismaPromise<GetPvtOrgAggregateType<T>>

    /**
     * Group by PvtOrg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pvtOrgGroupByArgs} args - Group by arguments.
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
      T extends pvtOrgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pvtOrgGroupByArgs['orderBy'] }
        : { orderBy?: pvtOrgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pvtOrgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPvtOrgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pvtOrg model
   */
  readonly fields: pvtOrgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pvtOrg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pvtOrgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VouchersCreated<T extends pvtOrg$VouchersCreatedArgs<ExtArgs> = {}>(args?: Subset<T, pvtOrg$VouchersCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany"> | Null>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the pvtOrg model
   */ 
  interface pvtOrgFieldRefs {
    readonly privateOrgId: FieldRef<"pvtOrg", 'String'>
    readonly CompanyName: FieldRef<"pvtOrg", 'String'>
    readonly positionInCompany: FieldRef<"pvtOrg", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pvtOrg findUnique
   */
  export type pvtOrgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where: pvtOrgWhereUniqueInput
  }

  /**
   * pvtOrg findUniqueOrThrow
   */
  export type pvtOrgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where: pvtOrgWhereUniqueInput
  }

  /**
   * pvtOrg findFirst
   */
  export type pvtOrgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: pvtOrgOrderByWithRelationInput | pvtOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pvtOrgs.
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pvtOrgs.
     */
    distinct?: PvtOrgScalarFieldEnum | PvtOrgScalarFieldEnum[]
  }

  /**
   * pvtOrg findFirstOrThrow
   */
  export type pvtOrgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * Filter, which pvtOrg to fetch.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: pvtOrgOrderByWithRelationInput | pvtOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pvtOrgs.
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pvtOrgs.
     */
    distinct?: PvtOrgScalarFieldEnum | PvtOrgScalarFieldEnum[]
  }

  /**
   * pvtOrg findMany
   */
  export type pvtOrgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * Filter, which pvtOrgs to fetch.
     */
    where?: pvtOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pvtOrgs to fetch.
     */
    orderBy?: pvtOrgOrderByWithRelationInput | pvtOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pvtOrgs.
     */
    cursor?: pvtOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pvtOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pvtOrgs.
     */
    skip?: number
    distinct?: PvtOrgScalarFieldEnum | PvtOrgScalarFieldEnum[]
  }

  /**
   * pvtOrg create
   */
  export type pvtOrgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * The data needed to create a pvtOrg.
     */
    data: XOR<pvtOrgCreateInput, pvtOrgUncheckedCreateInput>
  }

  /**
   * pvtOrg createMany
   */
  export type pvtOrgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pvtOrgs.
     */
    data: pvtOrgCreateManyInput | pvtOrgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pvtOrg createManyAndReturn
   */
  export type pvtOrgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many pvtOrgs.
     */
    data: pvtOrgCreateManyInput | pvtOrgCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pvtOrg update
   */
  export type pvtOrgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * The data needed to update a pvtOrg.
     */
    data: XOR<pvtOrgUpdateInput, pvtOrgUncheckedUpdateInput>
    /**
     * Choose, which pvtOrg to update.
     */
    where: pvtOrgWhereUniqueInput
  }

  /**
   * pvtOrg updateMany
   */
  export type pvtOrgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pvtOrgs.
     */
    data: XOR<pvtOrgUpdateManyMutationInput, pvtOrgUncheckedUpdateManyInput>
    /**
     * Filter which pvtOrgs to update
     */
    where?: pvtOrgWhereInput
  }

  /**
   * pvtOrg upsert
   */
  export type pvtOrgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * The filter to search for the pvtOrg to update in case it exists.
     */
    where: pvtOrgWhereUniqueInput
    /**
     * In case the pvtOrg found by the `where` argument doesn't exist, create a new pvtOrg with this data.
     */
    create: XOR<pvtOrgCreateInput, pvtOrgUncheckedCreateInput>
    /**
     * In case the pvtOrg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pvtOrgUpdateInput, pvtOrgUncheckedUpdateInput>
  }

  /**
   * pvtOrg delete
   */
  export type pvtOrgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
    /**
     * Filter which pvtOrg to delete.
     */
    where: pvtOrgWhereUniqueInput
  }

  /**
   * pvtOrg deleteMany
   */
  export type pvtOrgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pvtOrgs to delete
     */
    where?: pvtOrgWhereInput
  }

  /**
   * pvtOrg.VouchersCreated
   */
  export type pvtOrg$VouchersCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * pvtOrg without action
   */
  export type pvtOrgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pvtOrg
     */
    select?: pvtOrgSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pvtOrgInclude<ExtArgs> | null
  }


  /**
   * Model serviceProvider
   */

  export type AggregateServiceProvider = {
    _count: ServiceProviderCountAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  export type ServiceProviderMinAggregateOutputType = {
    serviceProviderId: string | null
    BusinessName: string | null
    PositionInBusiness: string | null
    BusinessTag: $Enums.ServiceProviderTag | null
  }

  export type ServiceProviderMaxAggregateOutputType = {
    serviceProviderId: string | null
    BusinessName: string | null
    PositionInBusiness: string | null
    BusinessTag: $Enums.ServiceProviderTag | null
  }

  export type ServiceProviderCountAggregateOutputType = {
    serviceProviderId: number
    BusinessName: number
    PositionInBusiness: number
    BusinessTag: number
    _all: number
  }


  export type ServiceProviderMinAggregateInputType = {
    serviceProviderId?: true
    BusinessName?: true
    PositionInBusiness?: true
    BusinessTag?: true
  }

  export type ServiceProviderMaxAggregateInputType = {
    serviceProviderId?: true
    BusinessName?: true
    PositionInBusiness?: true
    BusinessTag?: true
  }

  export type ServiceProviderCountAggregateInputType = {
    serviceProviderId?: true
    BusinessName?: true
    PositionInBusiness?: true
    BusinessTag?: true
    _all?: true
  }

  export type ServiceProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which serviceProvider to aggregate.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: serviceProviderOrderByWithRelationInput | serviceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned serviceProviders
    **/
    _count?: true | ServiceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type GetServiceProviderAggregateType<T extends ServiceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceProvider[P]>
      : GetScalarType<T[P], AggregateServiceProvider[P]>
  }




  export type serviceProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceProviderWhereInput
    orderBy?: serviceProviderOrderByWithAggregationInput | serviceProviderOrderByWithAggregationInput[]
    by: ServiceProviderScalarFieldEnum[] | ServiceProviderScalarFieldEnum
    having?: serviceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceProviderCountAggregateInputType | true
    _min?: ServiceProviderMinAggregateInputType
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type ServiceProviderGroupByOutputType = {
    serviceProviderId: string
    BusinessName: string | null
    PositionInBusiness: string | null
    BusinessTag: $Enums.ServiceProviderTag | null
    _count: ServiceProviderCountAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  type GetServiceProviderGroupByPayload<T extends serviceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
        }
      >
    >


  export type serviceProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceProviderId?: boolean
    BusinessName?: boolean
    PositionInBusiness?: boolean
    BusinessTag?: boolean
    VouchersRequested?: boolean | serviceProvider$VouchersRequestedArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | ServiceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceProvider"]>

  export type serviceProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceProviderId?: boolean
    BusinessName?: boolean
    PositionInBusiness?: boolean
    BusinessTag?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceProvider"]>

  export type serviceProviderSelectScalar = {
    serviceProviderId?: boolean
    BusinessName?: boolean
    PositionInBusiness?: boolean
    BusinessTag?: boolean
  }

  export type serviceProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VouchersRequested?: boolean | serviceProvider$VouchersRequestedArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | ServiceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type serviceProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $serviceProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "serviceProvider"
    objects: {
      VouchersRequested: Prisma.$VoucherPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      serviceProviderId: string
      BusinessName: string | null
      PositionInBusiness: string | null
      BusinessTag: $Enums.ServiceProviderTag | null
    }, ExtArgs["result"]["serviceProvider"]>
    composites: {}
  }

  type serviceProviderGetPayload<S extends boolean | null | undefined | serviceProviderDefaultArgs> = $Result.GetResult<Prisma.$serviceProviderPayload, S>

  type serviceProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<serviceProviderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceProviderCountAggregateInputType | true
    }

  export interface serviceProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['serviceProvider'], meta: { name: 'serviceProvider' } }
    /**
     * Find zero or one ServiceProvider that matches the filter.
     * @param {serviceProviderFindUniqueArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends serviceProviderFindUniqueArgs>(args: SelectSubset<T, serviceProviderFindUniqueArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceProvider that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {serviceProviderFindUniqueOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends serviceProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, serviceProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderFindFirstArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends serviceProviderFindFirstArgs>(args?: SelectSubset<T, serviceProviderFindFirstArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderFindFirstOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends serviceProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, serviceProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany()
     * 
     * // Get first 10 ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany({ take: 10 })
     * 
     * // Only select the `serviceProviderId`
     * const serviceProviderWithServiceProviderIdOnly = await prisma.serviceProvider.findMany({ select: { serviceProviderId: true } })
     * 
     */
    findMany<T extends serviceProviderFindManyArgs>(args?: SelectSubset<T, serviceProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceProvider.
     * @param {serviceProviderCreateArgs} args - Arguments to create a ServiceProvider.
     * @example
     * // Create one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.create({
     *   data: {
     *     // ... data to create a ServiceProvider
     *   }
     * })
     * 
     */
    create<T extends serviceProviderCreateArgs>(args: SelectSubset<T, serviceProviderCreateArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceProviders.
     * @param {serviceProviderCreateManyArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends serviceProviderCreateManyArgs>(args?: SelectSubset<T, serviceProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceProviders and returns the data saved in the database.
     * @param {serviceProviderCreateManyAndReturnArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceProviders and only return the `serviceProviderId`
     * const serviceProviderWithServiceProviderIdOnly = await prisma.serviceProvider.createManyAndReturn({ 
     *   select: { serviceProviderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends serviceProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, serviceProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceProvider.
     * @param {serviceProviderDeleteArgs} args - Arguments to delete one ServiceProvider.
     * @example
     * // Delete one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.delete({
     *   where: {
     *     // ... filter to delete one ServiceProvider
     *   }
     * })
     * 
     */
    delete<T extends serviceProviderDeleteArgs>(args: SelectSubset<T, serviceProviderDeleteArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceProvider.
     * @param {serviceProviderUpdateArgs} args - Arguments to update one ServiceProvider.
     * @example
     * // Update one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends serviceProviderUpdateArgs>(args: SelectSubset<T, serviceProviderUpdateArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceProviders.
     * @param {serviceProviderDeleteManyArgs} args - Arguments to filter ServiceProviders to delete.
     * @example
     * // Delete a few ServiceProviders
     * const { count } = await prisma.serviceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends serviceProviderDeleteManyArgs>(args?: SelectSubset<T, serviceProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends serviceProviderUpdateManyArgs>(args: SelectSubset<T, serviceProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceProvider.
     * @param {serviceProviderUpsertArgs} args - Arguments to update or create a ServiceProvider.
     * @example
     * // Update or create a ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.upsert({
     *   create: {
     *     // ... data to create a ServiceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceProvider we want to update
     *   }
     * })
     */
    upsert<T extends serviceProviderUpsertArgs>(args: SelectSubset<T, serviceProviderUpsertArgs<ExtArgs>>): Prisma__serviceProviderClient<$Result.GetResult<Prisma.$serviceProviderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderCountArgs} args - Arguments to filter ServiceProviders to count.
     * @example
     * // Count the number of ServiceProviders
     * const count = await prisma.serviceProvider.count({
     *   where: {
     *     // ... the filter for the ServiceProviders we want to count
     *   }
     * })
    **/
    count<T extends serviceProviderCountArgs>(
      args?: Subset<T, serviceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceProviderAggregateArgs>(args: Subset<T, ServiceProviderAggregateArgs>): Prisma.PrismaPromise<GetServiceProviderAggregateType<T>>

    /**
     * Group by ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceProviderGroupByArgs} args - Group by arguments.
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
      T extends serviceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviceProviderGroupByArgs['orderBy'] }
        : { orderBy?: serviceProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, serviceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the serviceProvider model
   */
  readonly fields: serviceProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for serviceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviceProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    VouchersRequested<T extends serviceProvider$VouchersRequestedArgs<ExtArgs> = {}>(args?: Subset<T, serviceProvider$VouchersRequestedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany"> | Null>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the serviceProvider model
   */ 
  interface serviceProviderFieldRefs {
    readonly serviceProviderId: FieldRef<"serviceProvider", 'String'>
    readonly BusinessName: FieldRef<"serviceProvider", 'String'>
    readonly PositionInBusiness: FieldRef<"serviceProvider", 'String'>
    readonly BusinessTag: FieldRef<"serviceProvider", 'ServiceProviderTag'>
  }
    

  // Custom InputTypes
  /**
   * serviceProvider findUnique
   */
  export type serviceProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where: serviceProviderWhereUniqueInput
  }

  /**
   * serviceProvider findUniqueOrThrow
   */
  export type serviceProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where: serviceProviderWhereUniqueInput
  }

  /**
   * serviceProvider findFirst
   */
  export type serviceProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: serviceProviderOrderByWithRelationInput | serviceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for serviceProviders.
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of serviceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * serviceProvider findFirstOrThrow
   */
  export type serviceProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * Filter, which serviceProvider to fetch.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: serviceProviderOrderByWithRelationInput | serviceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for serviceProviders.
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of serviceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * serviceProvider findMany
   */
  export type serviceProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * Filter, which serviceProviders to fetch.
     */
    where?: serviceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of serviceProviders to fetch.
     */
    orderBy?: serviceProviderOrderByWithRelationInput | serviceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing serviceProviders.
     */
    cursor?: serviceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` serviceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` serviceProviders.
     */
    skip?: number
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * serviceProvider create
   */
  export type serviceProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a serviceProvider.
     */
    data: XOR<serviceProviderCreateInput, serviceProviderUncheckedCreateInput>
  }

  /**
   * serviceProvider createMany
   */
  export type serviceProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many serviceProviders.
     */
    data: serviceProviderCreateManyInput | serviceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * serviceProvider createManyAndReturn
   */
  export type serviceProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many serviceProviders.
     */
    data: serviceProviderCreateManyInput | serviceProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * serviceProvider update
   */
  export type serviceProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a serviceProvider.
     */
    data: XOR<serviceProviderUpdateInput, serviceProviderUncheckedUpdateInput>
    /**
     * Choose, which serviceProvider to update.
     */
    where: serviceProviderWhereUniqueInput
  }

  /**
   * serviceProvider updateMany
   */
  export type serviceProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update serviceProviders.
     */
    data: XOR<serviceProviderUpdateManyMutationInput, serviceProviderUncheckedUpdateManyInput>
    /**
     * Filter which serviceProviders to update
     */
    where?: serviceProviderWhereInput
  }

  /**
   * serviceProvider upsert
   */
  export type serviceProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the serviceProvider to update in case it exists.
     */
    where: serviceProviderWhereUniqueInput
    /**
     * In case the serviceProvider found by the `where` argument doesn't exist, create a new serviceProvider with this data.
     */
    create: XOR<serviceProviderCreateInput, serviceProviderUncheckedCreateInput>
    /**
     * In case the serviceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceProviderUpdateInput, serviceProviderUncheckedUpdateInput>
  }

  /**
   * serviceProvider delete
   */
  export type serviceProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
    /**
     * Filter which serviceProvider to delete.
     */
    where: serviceProviderWhereUniqueInput
  }

  /**
   * serviceProvider deleteMany
   */
  export type serviceProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which serviceProviders to delete
     */
    where?: serviceProviderWhereInput
  }

  /**
   * serviceProvider.VouchersRequested
   */
  export type serviceProvider$VouchersRequestedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * serviceProvider without action
   */
  export type serviceProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the serviceProvider
     */
    select?: serviceProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: serviceProviderInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    phoneNumber: 'phoneNumber',
    firstName: 'firstName',
    recoveryEmail: 'recoveryEmail',
    lastName: 'lastName',
    walletPin: 'walletPin',
    salt: 'salt',
    bankName: 'bankName',
    bankAccountHolderName: 'bankAccountHolderName',
    accountNumber: 'accountNumber',
    isBeneficiary: 'isBeneficiary',
    isPvtOrg: 'isPvtOrg',
    isServiceProvider: 'isServiceProvider',
    walletIdBeneficiary: 'walletIdBeneficiary',
    walletIdPvtOrg: 'walletIdPvtOrg',
    walletIdServiceProvider: 'walletIdServiceProvider',
    createdAt: 'createdAt',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BeneficiaryScalarFieldEnum: {
    beneficiaryId: 'beneficiaryId'
  };

  export type BeneficiaryScalarFieldEnum = (typeof BeneficiaryScalarFieldEnum)[keyof typeof BeneficiaryScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    voucherId: 'voucherId',
    voucherAmount: 'voucherAmount',
    voucherCreatedAt: 'voucherCreatedAt',
    voucherRedeemed: 'voucherRedeemed',
    voucherRedeemedDate: 'voucherRedeemedDate',
    voucherSPId: 'voucherSPId',
    voucherBeneficiaryId: 'voucherBeneficiaryId',
    PvtOrgById: 'PvtOrgById'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const PvtOrgScalarFieldEnum: {
    privateOrgId: 'privateOrgId',
    CompanyName: 'CompanyName',
    positionInCompany: 'positionInCompany'
  };

  export type PvtOrgScalarFieldEnum = (typeof PvtOrgScalarFieldEnum)[keyof typeof PvtOrgScalarFieldEnum]


  export const ServiceProviderScalarFieldEnum: {
    serviceProviderId: 'serviceProviderId',
    BusinessName: 'BusinessName',
    PositionInBusiness: 'PositionInBusiness',
    BusinessTag: 'BusinessTag'
  };

  export type ServiceProviderScalarFieldEnum = (typeof ServiceProviderScalarFieldEnum)[keyof typeof ServiceProviderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ServiceProviderTag'
   */
  export type EnumServiceProviderTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceProviderTag'>
    


  /**
   * Reference to a field of type 'ServiceProviderTag[]'
   */
  export type ListEnumServiceProviderTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceProviderTag[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    phoneNumber?: StringNullableFilter<"Users"> | string | null
    firstName?: StringNullableFilter<"Users"> | string | null
    recoveryEmail?: StringNullableFilter<"Users"> | string | null
    lastName?: StringNullableFilter<"Users"> | string | null
    walletPin?: StringNullableFilter<"Users"> | string | null
    salt?: StringNullableFilter<"Users"> | string | null
    bankName?: StringNullableFilter<"Users"> | string | null
    bankAccountHolderName?: StringNullableFilter<"Users"> | string | null
    accountNumber?: StringNullableFilter<"Users"> | string | null
    isBeneficiary?: BoolFilter<"Users"> | boolean
    isPvtOrg?: BoolNullableFilter<"Users"> | boolean | null
    isServiceProvider?: BoolNullableFilter<"Users"> | boolean | null
    walletIdBeneficiary?: StringNullableFilter<"Users"> | string | null
    walletIdPvtOrg?: StringNullableFilter<"Users"> | string | null
    walletIdServiceProvider?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    role?: EnumRoleNullableFilter<"Users"> | $Enums.Role | null
    beneficiaryInfo?: XOR<BeneficiaryNullableRelationFilter, beneficiaryWhereInput> | null
    pvtOrgInfo?: XOR<PvtOrgNullableRelationFilter, pvtOrgWhereInput> | null
    serviceProviderInfo?: XOR<ServiceProviderNullableRelationFilter, serviceProviderWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    recoveryEmail?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    walletPin?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccountHolderName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrderInput | SortOrder
    isServiceProvider?: SortOrderInput | SortOrder
    walletIdBeneficiary?: SortOrderInput | SortOrder
    walletIdPvtOrg?: SortOrderInput | SortOrder
    walletIdServiceProvider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrderInput | SortOrder
    beneficiaryInfo?: beneficiaryOrderByWithRelationInput
    pvtOrgInfo?: pvtOrgOrderByWithRelationInput
    serviceProviderInfo?: serviceProviderOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    recoveryEmail?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    firstName?: StringNullableFilter<"Users"> | string | null
    lastName?: StringNullableFilter<"Users"> | string | null
    walletPin?: StringNullableFilter<"Users"> | string | null
    salt?: StringNullableFilter<"Users"> | string | null
    bankName?: StringNullableFilter<"Users"> | string | null
    bankAccountHolderName?: StringNullableFilter<"Users"> | string | null
    accountNumber?: StringNullableFilter<"Users"> | string | null
    isBeneficiary?: BoolFilter<"Users"> | boolean
    isPvtOrg?: BoolNullableFilter<"Users"> | boolean | null
    isServiceProvider?: BoolNullableFilter<"Users"> | boolean | null
    walletIdBeneficiary?: StringNullableFilter<"Users"> | string | null
    walletIdPvtOrg?: StringNullableFilter<"Users"> | string | null
    walletIdServiceProvider?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    role?: EnumRoleNullableFilter<"Users"> | $Enums.Role | null
    beneficiaryInfo?: XOR<BeneficiaryNullableRelationFilter, beneficiaryWhereInput> | null
    pvtOrgInfo?: XOR<PvtOrgNullableRelationFilter, pvtOrgWhereInput> | null
    serviceProviderInfo?: XOR<ServiceProviderNullableRelationFilter, serviceProviderWhereInput> | null
  }, "id" | "phoneNumber" | "recoveryEmail">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    recoveryEmail?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    walletPin?: SortOrderInput | SortOrder
    salt?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    bankAccountHolderName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrderInput | SortOrder
    isServiceProvider?: SortOrderInput | SortOrder
    walletIdBeneficiary?: SortOrderInput | SortOrder
    walletIdPvtOrg?: SortOrderInput | SortOrder
    walletIdServiceProvider?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Users"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    recoveryEmail?: StringNullableWithAggregatesFilter<"Users"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    walletPin?: StringNullableWithAggregatesFilter<"Users"> | string | null
    salt?: StringNullableWithAggregatesFilter<"Users"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    bankAccountHolderName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"Users"> | string | null
    isBeneficiary?: BoolWithAggregatesFilter<"Users"> | boolean
    isPvtOrg?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
    isServiceProvider?: BoolNullableWithAggregatesFilter<"Users"> | boolean | null
    walletIdBeneficiary?: StringNullableWithAggregatesFilter<"Users"> | string | null
    walletIdPvtOrg?: StringNullableWithAggregatesFilter<"Users"> | string | null
    walletIdServiceProvider?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    role?: EnumRoleNullableWithAggregatesFilter<"Users"> | $Enums.Role | null
  }

  export type beneficiaryWhereInput = {
    AND?: beneficiaryWhereInput | beneficiaryWhereInput[]
    OR?: beneficiaryWhereInput[]
    NOT?: beneficiaryWhereInput | beneficiaryWhereInput[]
    beneficiaryId?: StringFilter<"beneficiary"> | string
    AvailableVoucher?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type beneficiaryOrderByWithRelationInput = {
    beneficiaryId?: SortOrder
    AvailableVoucher?: VoucherOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
  }

  export type beneficiaryWhereUniqueInput = Prisma.AtLeast<{
    beneficiaryId?: string
    AND?: beneficiaryWhereInput | beneficiaryWhereInput[]
    OR?: beneficiaryWhereInput[]
    NOT?: beneficiaryWhereInput | beneficiaryWhereInput[]
    AvailableVoucher?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "beneficiaryId">

  export type beneficiaryOrderByWithAggregationInput = {
    beneficiaryId?: SortOrder
    _count?: beneficiaryCountOrderByAggregateInput
    _max?: beneficiaryMaxOrderByAggregateInput
    _min?: beneficiaryMinOrderByAggregateInput
  }

  export type beneficiaryScalarWhereWithAggregatesInput = {
    AND?: beneficiaryScalarWhereWithAggregatesInput | beneficiaryScalarWhereWithAggregatesInput[]
    OR?: beneficiaryScalarWhereWithAggregatesInput[]
    NOT?: beneficiaryScalarWhereWithAggregatesInput | beneficiaryScalarWhereWithAggregatesInput[]
    beneficiaryId?: StringWithAggregatesFilter<"beneficiary"> | string
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    voucherId?: StringFilter<"Voucher"> | string
    voucherAmount?: IntFilter<"Voucher"> | number
    voucherCreatedAt?: DateTimeFilter<"Voucher"> | Date | string
    voucherRedeemed?: BoolFilter<"Voucher"> | boolean
    voucherRedeemedDate?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    voucherSPId?: StringFilter<"Voucher"> | string
    voucherBeneficiaryId?: StringFilter<"Voucher"> | string
    PvtOrgById?: StringFilter<"Voucher"> | string
    PvtOrgBy?: XOR<PvtOrgRelationFilter, pvtOrgWhereInput>
    BeneficiaryUser?: XOR<BeneficiaryRelationFilter, beneficiaryWhereInput>
    ServiceProviderUser?: XOR<ServiceProviderRelationFilter, serviceProviderWhereInput>
  }

  export type VoucherOrderByWithRelationInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrderInput | SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
    PvtOrgBy?: pvtOrgOrderByWithRelationInput
    BeneficiaryUser?: beneficiaryOrderByWithRelationInput
    ServiceProviderUser?: serviceProviderOrderByWithRelationInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    voucherId?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    voucherAmount?: IntFilter<"Voucher"> | number
    voucherCreatedAt?: DateTimeFilter<"Voucher"> | Date | string
    voucherRedeemed?: BoolFilter<"Voucher"> | boolean
    voucherRedeemedDate?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    voucherSPId?: StringFilter<"Voucher"> | string
    voucherBeneficiaryId?: StringFilter<"Voucher"> | string
    PvtOrgById?: StringFilter<"Voucher"> | string
    PvtOrgBy?: XOR<PvtOrgRelationFilter, pvtOrgWhereInput>
    BeneficiaryUser?: XOR<BeneficiaryRelationFilter, beneficiaryWhereInput>
    ServiceProviderUser?: XOR<ServiceProviderRelationFilter, serviceProviderWhereInput>
  }, "voucherId">

  export type VoucherOrderByWithAggregationInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrderInput | SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    voucherId?: StringWithAggregatesFilter<"Voucher"> | string
    voucherAmount?: IntWithAggregatesFilter<"Voucher"> | number
    voucherCreatedAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    voucherRedeemed?: BoolWithAggregatesFilter<"Voucher"> | boolean
    voucherRedeemedDate?: DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null
    voucherSPId?: StringWithAggregatesFilter<"Voucher"> | string
    voucherBeneficiaryId?: StringWithAggregatesFilter<"Voucher"> | string
    PvtOrgById?: StringWithAggregatesFilter<"Voucher"> | string
  }

  export type pvtOrgWhereInput = {
    AND?: pvtOrgWhereInput | pvtOrgWhereInput[]
    OR?: pvtOrgWhereInput[]
    NOT?: pvtOrgWhereInput | pvtOrgWhereInput[]
    privateOrgId?: StringFilter<"pvtOrg"> | string
    CompanyName?: StringNullableFilter<"pvtOrg"> | string | null
    positionInCompany?: StringNullableFilter<"pvtOrg"> | string | null
    VouchersCreated?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type pvtOrgOrderByWithRelationInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrderInput | SortOrder
    positionInCompany?: SortOrderInput | SortOrder
    VouchersCreated?: VoucherOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
  }

  export type pvtOrgWhereUniqueInput = Prisma.AtLeast<{
    privateOrgId?: string
    AND?: pvtOrgWhereInput | pvtOrgWhereInput[]
    OR?: pvtOrgWhereInput[]
    NOT?: pvtOrgWhereInput | pvtOrgWhereInput[]
    CompanyName?: StringNullableFilter<"pvtOrg"> | string | null
    positionInCompany?: StringNullableFilter<"pvtOrg"> | string | null
    VouchersCreated?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "privateOrgId">

  export type pvtOrgOrderByWithAggregationInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrderInput | SortOrder
    positionInCompany?: SortOrderInput | SortOrder
    _count?: pvtOrgCountOrderByAggregateInput
    _max?: pvtOrgMaxOrderByAggregateInput
    _min?: pvtOrgMinOrderByAggregateInput
  }

  export type pvtOrgScalarWhereWithAggregatesInput = {
    AND?: pvtOrgScalarWhereWithAggregatesInput | pvtOrgScalarWhereWithAggregatesInput[]
    OR?: pvtOrgScalarWhereWithAggregatesInput[]
    NOT?: pvtOrgScalarWhereWithAggregatesInput | pvtOrgScalarWhereWithAggregatesInput[]
    privateOrgId?: StringWithAggregatesFilter<"pvtOrg"> | string
    CompanyName?: StringNullableWithAggregatesFilter<"pvtOrg"> | string | null
    positionInCompany?: StringNullableWithAggregatesFilter<"pvtOrg"> | string | null
  }

  export type serviceProviderWhereInput = {
    AND?: serviceProviderWhereInput | serviceProviderWhereInput[]
    OR?: serviceProviderWhereInput[]
    NOT?: serviceProviderWhereInput | serviceProviderWhereInput[]
    serviceProviderId?: StringFilter<"serviceProvider"> | string
    BusinessName?: StringNullableFilter<"serviceProvider"> | string | null
    PositionInBusiness?: StringNullableFilter<"serviceProvider"> | string | null
    BusinessTag?: EnumServiceProviderTagNullableFilter<"serviceProvider"> | $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type serviceProviderOrderByWithRelationInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrderInput | SortOrder
    PositionInBusiness?: SortOrderInput | SortOrder
    BusinessTag?: SortOrderInput | SortOrder
    VouchersRequested?: VoucherOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
  }

  export type serviceProviderWhereUniqueInput = Prisma.AtLeast<{
    serviceProviderId?: string
    AND?: serviceProviderWhereInput | serviceProviderWhereInput[]
    OR?: serviceProviderWhereInput[]
    NOT?: serviceProviderWhereInput | serviceProviderWhereInput[]
    BusinessName?: StringNullableFilter<"serviceProvider"> | string | null
    PositionInBusiness?: StringNullableFilter<"serviceProvider"> | string | null
    BusinessTag?: EnumServiceProviderTagNullableFilter<"serviceProvider"> | $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherListRelationFilter
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "serviceProviderId">

  export type serviceProviderOrderByWithAggregationInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrderInput | SortOrder
    PositionInBusiness?: SortOrderInput | SortOrder
    BusinessTag?: SortOrderInput | SortOrder
    _count?: serviceProviderCountOrderByAggregateInput
    _max?: serviceProviderMaxOrderByAggregateInput
    _min?: serviceProviderMinOrderByAggregateInput
  }

  export type serviceProviderScalarWhereWithAggregatesInput = {
    AND?: serviceProviderScalarWhereWithAggregatesInput | serviceProviderScalarWhereWithAggregatesInput[]
    OR?: serviceProviderScalarWhereWithAggregatesInput[]
    NOT?: serviceProviderScalarWhereWithAggregatesInput | serviceProviderScalarWhereWithAggregatesInput[]
    serviceProviderId?: StringWithAggregatesFilter<"serviceProvider"> | string
    BusinessName?: StringNullableWithAggregatesFilter<"serviceProvider"> | string | null
    PositionInBusiness?: StringNullableWithAggregatesFilter<"serviceProvider"> | string | null
    BusinessTag?: EnumServiceProviderTagNullableWithAggregatesFilter<"serviceProvider"> | $Enums.ServiceProviderTag | null
  }

  export type UsersCreateInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    beneficiaryInfo?: beneficiaryCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    beneficiaryInfo?: beneficiaryUncheckedCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgUncheckedCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    beneficiaryInfo?: beneficiaryUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    beneficiaryInfo?: beneficiaryUncheckedUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUncheckedUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type beneficiaryCreateInput = {
    AvailableVoucher?: VoucherCreateNestedManyWithoutBeneficiaryUserInput
    Users?: UsersCreateNestedOneWithoutBeneficiaryInfoInput
  }

  export type beneficiaryUncheckedCreateInput = {
    beneficiaryId?: string
    AvailableVoucher?: VoucherUncheckedCreateNestedManyWithoutBeneficiaryUserInput
  }

  export type beneficiaryUpdateInput = {
    AvailableVoucher?: VoucherUpdateManyWithoutBeneficiaryUserNestedInput
    Users?: UsersUpdateOneRequiredWithoutBeneficiaryInfoNestedInput
  }

  export type beneficiaryUncheckedUpdateInput = {
    beneficiaryId?: StringFieldUpdateOperationsInput | string
    AvailableVoucher?: VoucherUncheckedUpdateManyWithoutBeneficiaryUserNestedInput
  }

  export type beneficiaryCreateManyInput = {
    beneficiaryId?: string
  }

  export type beneficiaryUpdateManyMutationInput = {

  }

  export type beneficiaryUncheckedUpdateManyInput = {
    beneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    PvtOrgBy?: pvtOrgCreateNestedOneWithoutVouchersCreatedInput
    BeneficiaryUser?: beneficiaryCreateNestedOneWithoutAvailableVoucherInput
    ServiceProviderUser?: serviceProviderCreateNestedOneWithoutVouchersRequestedInput
  }

  export type VoucherUncheckedCreateInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PvtOrgBy?: pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput
    BeneficiaryUser?: beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput
    ServiceProviderUser?: serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateManyInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateManyMutationInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoucherUncheckedUpdateManyInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type pvtOrgCreateInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherCreateNestedManyWithoutPvtOrgByInput
    Users?: UsersCreateNestedOneWithoutPvtOrgInfoInput
  }

  export type pvtOrgUncheckedCreateInput = {
    privateOrgId?: string
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherUncheckedCreateNestedManyWithoutPvtOrgByInput
  }

  export type pvtOrgUpdateInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUpdateManyWithoutPvtOrgByNestedInput
    Users?: UsersUpdateOneRequiredWithoutPvtOrgInfoNestedInput
  }

  export type pvtOrgUncheckedUpdateInput = {
    privateOrgId?: StringFieldUpdateOperationsInput | string
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUncheckedUpdateManyWithoutPvtOrgByNestedInput
  }

  export type pvtOrgCreateManyInput = {
    privateOrgId?: string
    CompanyName?: string | null
    positionInCompany?: string | null
  }

  export type pvtOrgUpdateManyMutationInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pvtOrgUncheckedUpdateManyInput = {
    privateOrgId?: StringFieldUpdateOperationsInput | string
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type serviceProviderCreateInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherCreateNestedManyWithoutServiceProviderUserInput
    Users?: UsersCreateNestedOneWithoutServiceProviderInfoInput
  }

  export type serviceProviderUncheckedCreateInput = {
    serviceProviderId?: string
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedCreateNestedManyWithoutServiceProviderUserInput
  }

  export type serviceProviderUpdateInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherUpdateManyWithoutServiceProviderUserNestedInput
    Users?: UsersUpdateOneRequiredWithoutServiceProviderInfoNestedInput
  }

  export type serviceProviderUncheckedUpdateInput = {
    serviceProviderId?: StringFieldUpdateOperationsInput | string
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedUpdateManyWithoutServiceProviderUserNestedInput
  }

  export type serviceProviderCreateManyInput = {
    serviceProviderId?: string
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: $Enums.ServiceProviderTag | null
  }

  export type serviceProviderUpdateManyMutationInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
  }

  export type serviceProviderUncheckedUpdateManyInput = {
    serviceProviderId?: StringFieldUpdateOperationsInput | string
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type BeneficiaryNullableRelationFilter = {
    is?: beneficiaryWhereInput | null
    isNot?: beneficiaryWhereInput | null
  }

  export type PvtOrgNullableRelationFilter = {
    is?: pvtOrgWhereInput | null
    isNot?: pvtOrgWhereInput | null
  }

  export type ServiceProviderNullableRelationFilter = {
    is?: serviceProviderWhereInput | null
    isNot?: serviceProviderWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    salt?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    salt?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    recoveryEmail?: SortOrder
    lastName?: SortOrder
    walletPin?: SortOrder
    salt?: SortOrder
    bankName?: SortOrder
    bankAccountHolderName?: SortOrder
    accountNumber?: SortOrder
    isBeneficiary?: SortOrder
    isPvtOrg?: SortOrder
    isServiceProvider?: SortOrder
    walletIdBeneficiary?: SortOrder
    walletIdPvtOrg?: SortOrder
    walletIdServiceProvider?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type beneficiaryCountOrderByAggregateInput = {
    beneficiaryId?: SortOrder
  }

  export type beneficiaryMaxOrderByAggregateInput = {
    beneficiaryId?: SortOrder
  }

  export type beneficiaryMinOrderByAggregateInput = {
    beneficiaryId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PvtOrgRelationFilter = {
    is?: pvtOrgWhereInput
    isNot?: pvtOrgWhereInput
  }

  export type BeneficiaryRelationFilter = {
    is?: beneficiaryWhereInput
    isNot?: beneficiaryWhereInput
  }

  export type ServiceProviderRelationFilter = {
    is?: serviceProviderWhereInput
    isNot?: serviceProviderWhereInput
  }

  export type VoucherCountOrderByAggregateInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    voucherAmount?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    voucherId?: SortOrder
    voucherAmount?: SortOrder
    voucherCreatedAt?: SortOrder
    voucherRedeemed?: SortOrder
    voucherRedeemedDate?: SortOrder
    voucherSPId?: SortOrder
    voucherBeneficiaryId?: SortOrder
    PvtOrgById?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    voucherAmount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type pvtOrgCountOrderByAggregateInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
  }

  export type pvtOrgMaxOrderByAggregateInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
  }

  export type pvtOrgMinOrderByAggregateInput = {
    privateOrgId?: SortOrder
    CompanyName?: SortOrder
    positionInCompany?: SortOrder
  }

  export type EnumServiceProviderTagNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceProviderTag | EnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceProviderTagNullableFilter<$PrismaModel> | $Enums.ServiceProviderTag | null
  }

  export type serviceProviderCountOrderByAggregateInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
  }

  export type serviceProviderMaxOrderByAggregateInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
  }

  export type serviceProviderMinOrderByAggregateInput = {
    serviceProviderId?: SortOrder
    BusinessName?: SortOrder
    PositionInBusiness?: SortOrder
    BusinessTag?: SortOrder
  }

  export type EnumServiceProviderTagNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceProviderTag | EnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceProviderTagNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceProviderTag | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceProviderTagNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceProviderTagNullableFilter<$PrismaModel>
  }

  export type beneficiaryCreateNestedOneWithoutUsersInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    connect?: beneficiaryWhereUniqueInput
  }

  export type pvtOrgCreateNestedOneWithoutUsersInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    connect?: pvtOrgWhereUniqueInput
  }

  export type serviceProviderCreateNestedOneWithoutUsersInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    connect?: serviceProviderWhereUniqueInput
  }

  export type beneficiaryUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    connect?: beneficiaryWhereUniqueInput
  }

  export type pvtOrgUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    connect?: pvtOrgWhereUniqueInput
  }

  export type serviceProviderUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    connect?: serviceProviderWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type beneficiaryUpdateOneWithoutUsersNestedInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    upsert?: beneficiaryUpsertWithoutUsersInput
    disconnect?: beneficiaryWhereInput | boolean
    delete?: beneficiaryWhereInput | boolean
    connect?: beneficiaryWhereUniqueInput
    update?: XOR<XOR<beneficiaryUpdateToOneWithWhereWithoutUsersInput, beneficiaryUpdateWithoutUsersInput>, beneficiaryUncheckedUpdateWithoutUsersInput>
  }

  export type pvtOrgUpdateOneWithoutUsersNestedInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    upsert?: pvtOrgUpsertWithoutUsersInput
    disconnect?: pvtOrgWhereInput | boolean
    delete?: pvtOrgWhereInput | boolean
    connect?: pvtOrgWhereUniqueInput
    update?: XOR<XOR<pvtOrgUpdateToOneWithWhereWithoutUsersInput, pvtOrgUpdateWithoutUsersInput>, pvtOrgUncheckedUpdateWithoutUsersInput>
  }

  export type serviceProviderUpdateOneWithoutUsersNestedInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    upsert?: serviceProviderUpsertWithoutUsersInput
    disconnect?: serviceProviderWhereInput | boolean
    delete?: serviceProviderWhereInput | boolean
    connect?: serviceProviderWhereUniqueInput
    update?: XOR<XOR<serviceProviderUpdateToOneWithWhereWithoutUsersInput, serviceProviderUpdateWithoutUsersInput>, serviceProviderUncheckedUpdateWithoutUsersInput>
  }

  export type beneficiaryUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutUsersInput
    upsert?: beneficiaryUpsertWithoutUsersInput
    disconnect?: beneficiaryWhereInput | boolean
    delete?: beneficiaryWhereInput | boolean
    connect?: beneficiaryWhereUniqueInput
    update?: XOR<XOR<beneficiaryUpdateToOneWithWhereWithoutUsersInput, beneficiaryUpdateWithoutUsersInput>, beneficiaryUncheckedUpdateWithoutUsersInput>
  }

  export type pvtOrgUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutUsersInput
    upsert?: pvtOrgUpsertWithoutUsersInput
    disconnect?: pvtOrgWhereInput | boolean
    delete?: pvtOrgWhereInput | boolean
    connect?: pvtOrgWhereUniqueInput
    update?: XOR<XOR<pvtOrgUpdateToOneWithWhereWithoutUsersInput, pvtOrgUpdateWithoutUsersInput>, pvtOrgUncheckedUpdateWithoutUsersInput>
  }

  export type serviceProviderUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutUsersInput
    upsert?: serviceProviderUpsertWithoutUsersInput
    disconnect?: serviceProviderWhereInput | boolean
    delete?: serviceProviderWhereInput | boolean
    connect?: serviceProviderWhereUniqueInput
    update?: XOR<XOR<serviceProviderUpdateToOneWithWhereWithoutUsersInput, serviceProviderUpdateWithoutUsersInput>, serviceProviderUncheckedUpdateWithoutUsersInput>
  }

  export type VoucherCreateNestedManyWithoutBeneficiaryUserInput = {
    create?: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput> | VoucherCreateWithoutBeneficiaryUserInput[] | VoucherUncheckedCreateWithoutBeneficiaryUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutBeneficiaryUserInput | VoucherCreateOrConnectWithoutBeneficiaryUserInput[]
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutBeneficiaryInfoInput = {
    create?: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBeneficiaryInfoInput
    connect?: UsersWhereUniqueInput
  }

  export type VoucherUncheckedCreateNestedManyWithoutBeneficiaryUserInput = {
    create?: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput> | VoucherCreateWithoutBeneficiaryUserInput[] | VoucherUncheckedCreateWithoutBeneficiaryUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutBeneficiaryUserInput | VoucherCreateOrConnectWithoutBeneficiaryUserInput[]
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type VoucherUpdateManyWithoutBeneficiaryUserNestedInput = {
    create?: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput> | VoucherCreateWithoutBeneficiaryUserInput[] | VoucherUncheckedCreateWithoutBeneficiaryUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutBeneficiaryUserInput | VoucherCreateOrConnectWithoutBeneficiaryUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput | VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput[]
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput | VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput | VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutBeneficiaryInfoNestedInput = {
    create?: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBeneficiaryInfoInput
    upsert?: UsersUpsertWithoutBeneficiaryInfoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBeneficiaryInfoInput, UsersUpdateWithoutBeneficiaryInfoInput>, UsersUncheckedUpdateWithoutBeneficiaryInfoInput>
  }

  export type VoucherUncheckedUpdateManyWithoutBeneficiaryUserNestedInput = {
    create?: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput> | VoucherCreateWithoutBeneficiaryUserInput[] | VoucherUncheckedCreateWithoutBeneficiaryUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutBeneficiaryUserInput | VoucherCreateOrConnectWithoutBeneficiaryUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput | VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput[]
    createMany?: VoucherCreateManyBeneficiaryUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput | VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput | VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type pvtOrgCreateNestedOneWithoutVouchersCreatedInput = {
    create?: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutVouchersCreatedInput
    connect?: pvtOrgWhereUniqueInput
  }

  export type beneficiaryCreateNestedOneWithoutAvailableVoucherInput = {
    create?: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutAvailableVoucherInput
    connect?: beneficiaryWhereUniqueInput
  }

  export type serviceProviderCreateNestedOneWithoutVouchersRequestedInput = {
    create?: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutVouchersRequestedInput
    connect?: serviceProviderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput = {
    create?: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
    connectOrCreate?: pvtOrgCreateOrConnectWithoutVouchersCreatedInput
    upsert?: pvtOrgUpsertWithoutVouchersCreatedInput
    connect?: pvtOrgWhereUniqueInput
    update?: XOR<XOR<pvtOrgUpdateToOneWithWhereWithoutVouchersCreatedInput, pvtOrgUpdateWithoutVouchersCreatedInput>, pvtOrgUncheckedUpdateWithoutVouchersCreatedInput>
  }

  export type beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput = {
    create?: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
    connectOrCreate?: beneficiaryCreateOrConnectWithoutAvailableVoucherInput
    upsert?: beneficiaryUpsertWithoutAvailableVoucherInput
    connect?: beneficiaryWhereUniqueInput
    update?: XOR<XOR<beneficiaryUpdateToOneWithWhereWithoutAvailableVoucherInput, beneficiaryUpdateWithoutAvailableVoucherInput>, beneficiaryUncheckedUpdateWithoutAvailableVoucherInput>
  }

  export type serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput = {
    create?: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
    connectOrCreate?: serviceProviderCreateOrConnectWithoutVouchersRequestedInput
    upsert?: serviceProviderUpsertWithoutVouchersRequestedInput
    connect?: serviceProviderWhereUniqueInput
    update?: XOR<XOR<serviceProviderUpdateToOneWithWhereWithoutVouchersRequestedInput, serviceProviderUpdateWithoutVouchersRequestedInput>, serviceProviderUncheckedUpdateWithoutVouchersRequestedInput>
  }

  export type VoucherCreateNestedManyWithoutPvtOrgByInput = {
    create?: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput> | VoucherCreateWithoutPvtOrgByInput[] | VoucherUncheckedCreateWithoutPvtOrgByInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPvtOrgByInput | VoucherCreateOrConnectWithoutPvtOrgByInput[]
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutPvtOrgInfoInput = {
    create?: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPvtOrgInfoInput
    connect?: UsersWhereUniqueInput
  }

  export type VoucherUncheckedCreateNestedManyWithoutPvtOrgByInput = {
    create?: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput> | VoucherCreateWithoutPvtOrgByInput[] | VoucherUncheckedCreateWithoutPvtOrgByInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPvtOrgByInput | VoucherCreateOrConnectWithoutPvtOrgByInput[]
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type VoucherUpdateManyWithoutPvtOrgByNestedInput = {
    create?: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput> | VoucherCreateWithoutPvtOrgByInput[] | VoucherUncheckedCreateWithoutPvtOrgByInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPvtOrgByInput | VoucherCreateOrConnectWithoutPvtOrgByInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput | VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput[]
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput | VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutPvtOrgByInput | VoucherUpdateManyWithWhereWithoutPvtOrgByInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutPvtOrgInfoNestedInput = {
    create?: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPvtOrgInfoInput
    upsert?: UsersUpsertWithoutPvtOrgInfoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPvtOrgInfoInput, UsersUpdateWithoutPvtOrgInfoInput>, UsersUncheckedUpdateWithoutPvtOrgInfoInput>
  }

  export type VoucherUncheckedUpdateManyWithoutPvtOrgByNestedInput = {
    create?: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput> | VoucherCreateWithoutPvtOrgByInput[] | VoucherUncheckedCreateWithoutPvtOrgByInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutPvtOrgByInput | VoucherCreateOrConnectWithoutPvtOrgByInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput | VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput[]
    createMany?: VoucherCreateManyPvtOrgByInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput | VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutPvtOrgByInput | VoucherUpdateManyWithWhereWithoutPvtOrgByInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type VoucherCreateNestedManyWithoutServiceProviderUserInput = {
    create?: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput> | VoucherCreateWithoutServiceProviderUserInput[] | VoucherUncheckedCreateWithoutServiceProviderUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutServiceProviderUserInput | VoucherCreateOrConnectWithoutServiceProviderUserInput[]
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutServiceProviderInfoInput = {
    create?: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServiceProviderInfoInput
    connect?: UsersWhereUniqueInput
  }

  export type VoucherUncheckedCreateNestedManyWithoutServiceProviderUserInput = {
    create?: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput> | VoucherCreateWithoutServiceProviderUserInput[] | VoucherUncheckedCreateWithoutServiceProviderUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutServiceProviderUserInput | VoucherCreateOrConnectWithoutServiceProviderUserInput[]
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type NullableEnumServiceProviderTagFieldUpdateOperationsInput = {
    set?: $Enums.ServiceProviderTag | null
  }

  export type VoucherUpdateManyWithoutServiceProviderUserNestedInput = {
    create?: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput> | VoucherCreateWithoutServiceProviderUserInput[] | VoucherUncheckedCreateWithoutServiceProviderUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutServiceProviderUserInput | VoucherCreateOrConnectWithoutServiceProviderUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput | VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput[]
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput | VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutServiceProviderUserInput | VoucherUpdateManyWithWhereWithoutServiceProviderUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutServiceProviderInfoNestedInput = {
    create?: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutServiceProviderInfoInput
    upsert?: UsersUpsertWithoutServiceProviderInfoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutServiceProviderInfoInput, UsersUpdateWithoutServiceProviderInfoInput>, UsersUncheckedUpdateWithoutServiceProviderInfoInput>
  }

  export type VoucherUncheckedUpdateManyWithoutServiceProviderUserNestedInput = {
    create?: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput> | VoucherCreateWithoutServiceProviderUserInput[] | VoucherUncheckedCreateWithoutServiceProviderUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutServiceProviderUserInput | VoucherCreateOrConnectWithoutServiceProviderUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput | VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput[]
    createMany?: VoucherCreateManyServiceProviderUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput | VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutServiceProviderUserInput | VoucherUpdateManyWithWhereWithoutServiceProviderUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumServiceProviderTagNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceProviderTag | EnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceProviderTagNullableFilter<$PrismaModel> | $Enums.ServiceProviderTag | null
  }

  export type NestedEnumServiceProviderTagNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceProviderTag | EnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceProviderTag[] | ListEnumServiceProviderTagFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceProviderTagNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceProviderTag | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceProviderTagNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceProviderTagNullableFilter<$PrismaModel>
  }

  export type beneficiaryCreateWithoutUsersInput = {
    AvailableVoucher?: VoucherCreateNestedManyWithoutBeneficiaryUserInput
  }

  export type beneficiaryUncheckedCreateWithoutUsersInput = {
    AvailableVoucher?: VoucherUncheckedCreateNestedManyWithoutBeneficiaryUserInput
  }

  export type beneficiaryCreateOrConnectWithoutUsersInput = {
    where: beneficiaryWhereUniqueInput
    create: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
  }

  export type pvtOrgCreateWithoutUsersInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherCreateNestedManyWithoutPvtOrgByInput
  }

  export type pvtOrgUncheckedCreateWithoutUsersInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    VouchersCreated?: VoucherUncheckedCreateNestedManyWithoutPvtOrgByInput
  }

  export type pvtOrgCreateOrConnectWithoutUsersInput = {
    where: pvtOrgWhereUniqueInput
    create: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
  }

  export type serviceProviderCreateWithoutUsersInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherCreateNestedManyWithoutServiceProviderUserInput
  }

  export type serviceProviderUncheckedCreateWithoutUsersInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedCreateNestedManyWithoutServiceProviderUserInput
  }

  export type serviceProviderCreateOrConnectWithoutUsersInput = {
    where: serviceProviderWhereUniqueInput
    create: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
  }

  export type beneficiaryUpsertWithoutUsersInput = {
    update: XOR<beneficiaryUpdateWithoutUsersInput, beneficiaryUncheckedUpdateWithoutUsersInput>
    create: XOR<beneficiaryCreateWithoutUsersInput, beneficiaryUncheckedCreateWithoutUsersInput>
    where?: beneficiaryWhereInput
  }

  export type beneficiaryUpdateToOneWithWhereWithoutUsersInput = {
    where?: beneficiaryWhereInput
    data: XOR<beneficiaryUpdateWithoutUsersInput, beneficiaryUncheckedUpdateWithoutUsersInput>
  }

  export type beneficiaryUpdateWithoutUsersInput = {
    AvailableVoucher?: VoucherUpdateManyWithoutBeneficiaryUserNestedInput
  }

  export type beneficiaryUncheckedUpdateWithoutUsersInput = {
    AvailableVoucher?: VoucherUncheckedUpdateManyWithoutBeneficiaryUserNestedInput
  }

  export type pvtOrgUpsertWithoutUsersInput = {
    update: XOR<pvtOrgUpdateWithoutUsersInput, pvtOrgUncheckedUpdateWithoutUsersInput>
    create: XOR<pvtOrgCreateWithoutUsersInput, pvtOrgUncheckedCreateWithoutUsersInput>
    where?: pvtOrgWhereInput
  }

  export type pvtOrgUpdateToOneWithWhereWithoutUsersInput = {
    where?: pvtOrgWhereInput
    data: XOR<pvtOrgUpdateWithoutUsersInput, pvtOrgUncheckedUpdateWithoutUsersInput>
  }

  export type pvtOrgUpdateWithoutUsersInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUpdateManyWithoutPvtOrgByNestedInput
  }

  export type pvtOrgUncheckedUpdateWithoutUsersInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    VouchersCreated?: VoucherUncheckedUpdateManyWithoutPvtOrgByNestedInput
  }

  export type serviceProviderUpsertWithoutUsersInput = {
    update: XOR<serviceProviderUpdateWithoutUsersInput, serviceProviderUncheckedUpdateWithoutUsersInput>
    create: XOR<serviceProviderCreateWithoutUsersInput, serviceProviderUncheckedCreateWithoutUsersInput>
    where?: serviceProviderWhereInput
  }

  export type serviceProviderUpdateToOneWithWhereWithoutUsersInput = {
    where?: serviceProviderWhereInput
    data: XOR<serviceProviderUpdateWithoutUsersInput, serviceProviderUncheckedUpdateWithoutUsersInput>
  }

  export type serviceProviderUpdateWithoutUsersInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherUpdateManyWithoutServiceProviderUserNestedInput
  }

  export type serviceProviderUncheckedUpdateWithoutUsersInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
    VouchersRequested?: VoucherUncheckedUpdateManyWithoutServiceProviderUserNestedInput
  }

  export type VoucherCreateWithoutBeneficiaryUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    PvtOrgBy?: pvtOrgCreateNestedOneWithoutVouchersCreatedInput
    ServiceProviderUser?: serviceProviderCreateNestedOneWithoutVouchersRequestedInput
  }

  export type VoucherUncheckedCreateWithoutBeneficiaryUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    PvtOrgById?: string
  }

  export type VoucherCreateOrConnectWithoutBeneficiaryUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput>
  }

  export type VoucherCreateManyBeneficiaryUserInputEnvelope = {
    data: VoucherCreateManyBeneficiaryUserInput | VoucherCreateManyBeneficiaryUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutBeneficiaryInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    pvtOrgInfo?: pvtOrgCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutBeneficiaryInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    pvtOrgInfo?: pvtOrgUncheckedCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutBeneficiaryInfoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutBeneficiaryUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutBeneficiaryUserInput, VoucherUncheckedUpdateWithoutBeneficiaryUserInput>
    create: XOR<VoucherCreateWithoutBeneficiaryUserInput, VoucherUncheckedCreateWithoutBeneficiaryUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutBeneficiaryUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutBeneficiaryUserInput, VoucherUncheckedUpdateWithoutBeneficiaryUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutBeneficiaryUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutBeneficiaryUserInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    voucherId?: StringFilter<"Voucher"> | string
    voucherAmount?: IntFilter<"Voucher"> | number
    voucherCreatedAt?: DateTimeFilter<"Voucher"> | Date | string
    voucherRedeemed?: BoolFilter<"Voucher"> | boolean
    voucherRedeemedDate?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    voucherSPId?: StringFilter<"Voucher"> | string
    voucherBeneficiaryId?: StringFilter<"Voucher"> | string
    PvtOrgById?: StringFilter<"Voucher"> | string
  }

  export type UsersUpsertWithoutBeneficiaryInfoInput = {
    update: XOR<UsersUpdateWithoutBeneficiaryInfoInput, UsersUncheckedUpdateWithoutBeneficiaryInfoInput>
    create: XOR<UsersCreateWithoutBeneficiaryInfoInput, UsersUncheckedCreateWithoutBeneficiaryInfoInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBeneficiaryInfoInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBeneficiaryInfoInput, UsersUncheckedUpdateWithoutBeneficiaryInfoInput>
  }

  export type UsersUpdateWithoutBeneficiaryInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    pvtOrgInfo?: pvtOrgUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutBeneficiaryInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    pvtOrgInfo?: pvtOrgUncheckedUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type pvtOrgCreateWithoutVouchersCreatedInput = {
    CompanyName?: string | null
    positionInCompany?: string | null
    Users?: UsersCreateNestedOneWithoutPvtOrgInfoInput
  }

  export type pvtOrgUncheckedCreateWithoutVouchersCreatedInput = {
    privateOrgId?: string
    CompanyName?: string | null
    positionInCompany?: string | null
  }

  export type pvtOrgCreateOrConnectWithoutVouchersCreatedInput = {
    where: pvtOrgWhereUniqueInput
    create: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
  }

  export type beneficiaryCreateWithoutAvailableVoucherInput = {
    Users?: UsersCreateNestedOneWithoutBeneficiaryInfoInput
  }

  export type beneficiaryUncheckedCreateWithoutAvailableVoucherInput = {
    beneficiaryId?: string
  }

  export type beneficiaryCreateOrConnectWithoutAvailableVoucherInput = {
    where: beneficiaryWhereUniqueInput
    create: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
  }

  export type serviceProviderCreateWithoutVouchersRequestedInput = {
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: $Enums.ServiceProviderTag | null
    Users?: UsersCreateNestedOneWithoutServiceProviderInfoInput
  }

  export type serviceProviderUncheckedCreateWithoutVouchersRequestedInput = {
    serviceProviderId?: string
    BusinessName?: string | null
    PositionInBusiness?: string | null
    BusinessTag?: $Enums.ServiceProviderTag | null
  }

  export type serviceProviderCreateOrConnectWithoutVouchersRequestedInput = {
    where: serviceProviderWhereUniqueInput
    create: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
  }

  export type pvtOrgUpsertWithoutVouchersCreatedInput = {
    update: XOR<pvtOrgUpdateWithoutVouchersCreatedInput, pvtOrgUncheckedUpdateWithoutVouchersCreatedInput>
    create: XOR<pvtOrgCreateWithoutVouchersCreatedInput, pvtOrgUncheckedCreateWithoutVouchersCreatedInput>
    where?: pvtOrgWhereInput
  }

  export type pvtOrgUpdateToOneWithWhereWithoutVouchersCreatedInput = {
    where?: pvtOrgWhereInput
    data: XOR<pvtOrgUpdateWithoutVouchersCreatedInput, pvtOrgUncheckedUpdateWithoutVouchersCreatedInput>
  }

  export type pvtOrgUpdateWithoutVouchersCreatedInput = {
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UsersUpdateOneRequiredWithoutPvtOrgInfoNestedInput
  }

  export type pvtOrgUncheckedUpdateWithoutVouchersCreatedInput = {
    privateOrgId?: StringFieldUpdateOperationsInput | string
    CompanyName?: NullableStringFieldUpdateOperationsInput | string | null
    positionInCompany?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type beneficiaryUpsertWithoutAvailableVoucherInput = {
    update: XOR<beneficiaryUpdateWithoutAvailableVoucherInput, beneficiaryUncheckedUpdateWithoutAvailableVoucherInput>
    create: XOR<beneficiaryCreateWithoutAvailableVoucherInput, beneficiaryUncheckedCreateWithoutAvailableVoucherInput>
    where?: beneficiaryWhereInput
  }

  export type beneficiaryUpdateToOneWithWhereWithoutAvailableVoucherInput = {
    where?: beneficiaryWhereInput
    data: XOR<beneficiaryUpdateWithoutAvailableVoucherInput, beneficiaryUncheckedUpdateWithoutAvailableVoucherInput>
  }

  export type beneficiaryUpdateWithoutAvailableVoucherInput = {
    Users?: UsersUpdateOneRequiredWithoutBeneficiaryInfoNestedInput
  }

  export type beneficiaryUncheckedUpdateWithoutAvailableVoucherInput = {
    beneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type serviceProviderUpsertWithoutVouchersRequestedInput = {
    update: XOR<serviceProviderUpdateWithoutVouchersRequestedInput, serviceProviderUncheckedUpdateWithoutVouchersRequestedInput>
    create: XOR<serviceProviderCreateWithoutVouchersRequestedInput, serviceProviderUncheckedCreateWithoutVouchersRequestedInput>
    where?: serviceProviderWhereInput
  }

  export type serviceProviderUpdateToOneWithWhereWithoutVouchersRequestedInput = {
    where?: serviceProviderWhereInput
    data: XOR<serviceProviderUpdateWithoutVouchersRequestedInput, serviceProviderUncheckedUpdateWithoutVouchersRequestedInput>
  }

  export type serviceProviderUpdateWithoutVouchersRequestedInput = {
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
    Users?: UsersUpdateOneRequiredWithoutServiceProviderInfoNestedInput
  }

  export type serviceProviderUncheckedUpdateWithoutVouchersRequestedInput = {
    serviceProviderId?: StringFieldUpdateOperationsInput | string
    BusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    PositionInBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    BusinessTag?: NullableEnumServiceProviderTagFieldUpdateOperationsInput | $Enums.ServiceProviderTag | null
  }

  export type VoucherCreateWithoutPvtOrgByInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    BeneficiaryUser?: beneficiaryCreateNestedOneWithoutAvailableVoucherInput
    ServiceProviderUser?: serviceProviderCreateNestedOneWithoutVouchersRequestedInput
  }

  export type VoucherUncheckedCreateWithoutPvtOrgByInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
  }

  export type VoucherCreateOrConnectWithoutPvtOrgByInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput>
  }

  export type VoucherCreateManyPvtOrgByInputEnvelope = {
    data: VoucherCreateManyPvtOrgByInput | VoucherCreateManyPvtOrgByInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutPvtOrgInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    beneficiaryInfo?: beneficiaryCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutPvtOrgInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    beneficiaryInfo?: beneficiaryUncheckedCreateNestedOneWithoutUsersInput
    serviceProviderInfo?: serviceProviderUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutPvtOrgInfoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutPvtOrgByInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutPvtOrgByInput, VoucherUncheckedUpdateWithoutPvtOrgByInput>
    create: XOR<VoucherCreateWithoutPvtOrgByInput, VoucherUncheckedCreateWithoutPvtOrgByInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutPvtOrgByInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutPvtOrgByInput, VoucherUncheckedUpdateWithoutPvtOrgByInput>
  }

  export type VoucherUpdateManyWithWhereWithoutPvtOrgByInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutPvtOrgByInput>
  }

  export type UsersUpsertWithoutPvtOrgInfoInput = {
    update: XOR<UsersUpdateWithoutPvtOrgInfoInput, UsersUncheckedUpdateWithoutPvtOrgInfoInput>
    create: XOR<UsersCreateWithoutPvtOrgInfoInput, UsersUncheckedCreateWithoutPvtOrgInfoInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPvtOrgInfoInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPvtOrgInfoInput, UsersUncheckedUpdateWithoutPvtOrgInfoInput>
  }

  export type UsersUpdateWithoutPvtOrgInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    beneficiaryInfo?: beneficiaryUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutPvtOrgInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    beneficiaryInfo?: beneficiaryUncheckedUpdateOneWithoutUsersNestedInput
    serviceProviderInfo?: serviceProviderUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type VoucherCreateWithoutServiceProviderUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    PvtOrgBy?: pvtOrgCreateNestedOneWithoutVouchersCreatedInput
    BeneficiaryUser?: beneficiaryCreateNestedOneWithoutAvailableVoucherInput
  }

  export type VoucherUncheckedCreateWithoutServiceProviderUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherCreateOrConnectWithoutServiceProviderUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput>
  }

  export type VoucherCreateManyServiceProviderUserInputEnvelope = {
    data: VoucherCreateManyServiceProviderUserInput | VoucherCreateManyServiceProviderUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutServiceProviderInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    beneficiaryInfo?: beneficiaryCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutServiceProviderInfoInput = {
    id?: string
    phoneNumber?: string | null
    firstName?: string | null
    recoveryEmail?: string | null
    lastName?: string | null
    walletPin?: string | null
    salt?: string | null
    bankName?: string | null
    bankAccountHolderName?: string | null
    accountNumber?: string | null
    isBeneficiary?: boolean
    isPvtOrg?: boolean | null
    isServiceProvider?: boolean | null
    walletIdBeneficiary?: string | null
    walletIdPvtOrg?: string | null
    walletIdServiceProvider?: string | null
    createdAt?: Date | string
    role?: $Enums.Role | null
    beneficiaryInfo?: beneficiaryUncheckedCreateNestedOneWithoutUsersInput
    pvtOrgInfo?: pvtOrgUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutServiceProviderInfoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutServiceProviderUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutServiceProviderUserInput, VoucherUncheckedUpdateWithoutServiceProviderUserInput>
    create: XOR<VoucherCreateWithoutServiceProviderUserInput, VoucherUncheckedCreateWithoutServiceProviderUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutServiceProviderUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutServiceProviderUserInput, VoucherUncheckedUpdateWithoutServiceProviderUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutServiceProviderUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutServiceProviderUserInput>
  }

  export type UsersUpsertWithoutServiceProviderInfoInput = {
    update: XOR<UsersUpdateWithoutServiceProviderInfoInput, UsersUncheckedUpdateWithoutServiceProviderInfoInput>
    create: XOR<UsersCreateWithoutServiceProviderInfoInput, UsersUncheckedCreateWithoutServiceProviderInfoInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutServiceProviderInfoInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutServiceProviderInfoInput, UsersUncheckedUpdateWithoutServiceProviderInfoInput>
  }

  export type UsersUpdateWithoutServiceProviderInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    beneficiaryInfo?: beneficiaryUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutServiceProviderInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    recoveryEmail?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    walletPin?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountHolderName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isBeneficiary?: BoolFieldUpdateOperationsInput | boolean
    isPvtOrg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isServiceProvider?: NullableBoolFieldUpdateOperationsInput | boolean | null
    walletIdBeneficiary?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdPvtOrg?: NullableStringFieldUpdateOperationsInput | string | null
    walletIdServiceProvider?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    beneficiaryInfo?: beneficiaryUncheckedUpdateOneWithoutUsersNestedInput
    pvtOrgInfo?: pvtOrgUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type VoucherCreateManyBeneficiaryUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateWithoutBeneficiaryUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PvtOrgBy?: pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput
    ServiceProviderUser?: serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput
  }

  export type VoucherUncheckedUpdateWithoutBeneficiaryUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherUncheckedUpdateManyWithoutBeneficiaryUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateManyPvtOrgByInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherSPId?: string
    voucherBeneficiaryId?: string
  }

  export type VoucherUpdateWithoutPvtOrgByInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BeneficiaryUser?: beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput
    ServiceProviderUser?: serviceProviderUpdateOneRequiredWithoutVouchersRequestedNestedInput
  }

  export type VoucherUncheckedUpdateWithoutPvtOrgByInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherUncheckedUpdateManyWithoutPvtOrgByInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherSPId?: StringFieldUpdateOperationsInput | string
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherCreateManyServiceProviderUserInput = {
    voucherId?: string
    voucherAmount: number
    voucherCreatedAt?: Date | string
    voucherRedeemed?: boolean
    voucherRedeemedDate?: Date | string | null
    voucherBeneficiaryId?: string
    PvtOrgById?: string
  }

  export type VoucherUpdateWithoutServiceProviderUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PvtOrgBy?: pvtOrgUpdateOneRequiredWithoutVouchersCreatedNestedInput
    BeneficiaryUser?: beneficiaryUpdateOneRequiredWithoutAvailableVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutServiceProviderUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }

  export type VoucherUncheckedUpdateManyWithoutServiceProviderUserInput = {
    voucherId?: StringFieldUpdateOperationsInput | string
    voucherAmount?: IntFieldUpdateOperationsInput | number
    voucherCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherRedeemed?: BoolFieldUpdateOperationsInput | boolean
    voucherRedeemedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    voucherBeneficiaryId?: StringFieldUpdateOperationsInput | string
    PvtOrgById?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BeneficiaryCountOutputTypeDefaultArgs instead
     */
    export type BeneficiaryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PvtOrgCountOutputTypeDefaultArgs instead
     */
    export type PvtOrgCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PvtOrgCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceProviderCountOutputTypeDefaultArgs instead
     */
    export type ServiceProviderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceProviderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use beneficiaryDefaultArgs instead
     */
    export type beneficiaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = beneficiaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VoucherDefaultArgs instead
     */
    export type VoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VoucherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pvtOrgDefaultArgs instead
     */
    export type pvtOrgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pvtOrgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use serviceProviderDefaultArgs instead
     */
    export type serviceProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = serviceProviderDefaultArgs<ExtArgs>

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