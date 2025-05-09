
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
 * Model Draw
 * 
 */
export type Draw = $Result.DefaultSelection<Prisma.$DrawPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model NumberStats
 * 
 */
export type NumberStats = $Result.DefaultSelection<Prisma.$NumberStatsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Draws
 * const draws = await prisma.draw.findMany()
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
   * // Fetch zero or more Draws
   * const draws = await prisma.draw.findMany()
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
   * `prisma.draw`: Exposes CRUD operations for the **Draw** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Draws
    * const draws = await prisma.draw.findMany()
    * ```
    */
  get draw(): Prisma.DrawDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.numberStats`: Exposes CRUD operations for the **NumberStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NumberStats
    * const numberStats = await prisma.numberStats.findMany()
    * ```
    */
  get numberStats(): Prisma.NumberStatsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Draw: 'Draw',
    Ticket: 'Ticket',
    NumberStats: 'NumberStats'
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
      modelProps: "draw" | "ticket" | "numberStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Draw: {
        payload: Prisma.$DrawPayload<ExtArgs>
        fields: Prisma.DrawFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          findFirst: {
            args: Prisma.DrawFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          findMany: {
            args: Prisma.DrawFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          create: {
            args: Prisma.DrawCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          createMany: {
            args: Prisma.DrawCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          delete: {
            args: Prisma.DrawDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          update: {
            args: Prisma.DrawUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          deleteMany: {
            args: Prisma.DrawDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          upsert: {
            args: Prisma.DrawUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          aggregate: {
            args: Prisma.DrawAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraw>
          }
          groupBy: {
            args: Prisma.DrawGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawCountArgs<ExtArgs>
            result: $Utils.Optional<DrawCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      NumberStats: {
        payload: Prisma.$NumberStatsPayload<ExtArgs>
        fields: Prisma.NumberStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NumberStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumberStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>
          }
          findFirst: {
            args: Prisma.NumberStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumberStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>
          }
          findMany: {
            args: Prisma.NumberStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>[]
          }
          create: {
            args: Prisma.NumberStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>
          }
          createMany: {
            args: Prisma.NumberStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NumberStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>[]
          }
          delete: {
            args: Prisma.NumberStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>
          }
          update: {
            args: Prisma.NumberStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>
          }
          deleteMany: {
            args: Prisma.NumberStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NumberStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NumberStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>[]
          }
          upsert: {
            args: Prisma.NumberStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberStatsPayload>
          }
          aggregate: {
            args: Prisma.NumberStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumberStats>
          }
          groupBy: {
            args: Prisma.NumberStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NumberStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumberStatsCountArgs<ExtArgs>
            result: $Utils.Optional<NumberStatsCountAggregateOutputType> | number
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
    draw?: DrawOmit
    ticket?: TicketOmit
    numberStats?: NumberStatsOmit
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
   * Models
   */

  /**
   * Model Draw
   */

  export type AggregateDraw = {
    _count: DrawCountAggregateOutputType | null
    _avg: DrawAvgAggregateOutputType | null
    _sum: DrawSumAggregateOutputType | null
    _min: DrawMinAggregateOutputType | null
    _max: DrawMaxAggregateOutputType | null
  }

  export type DrawAvgAggregateOutputType = {
    id: number | null
    drawNumber: number | null
    bonusNumber: number | null
    jackpot: number | null
    winnersCount: number | null
  }

  export type DrawSumAggregateOutputType = {
    id: number | null
    drawNumber: number | null
    bonusNumber: number | null
    jackpot: number | null
    winnersCount: number | null
  }

  export type DrawMinAggregateOutputType = {
    id: number | null
    drawNumber: number | null
    drawDate: Date | null
    numbersJson: string | null
    bonusNumber: number | null
    jackpot: number | null
    winnersCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrawMaxAggregateOutputType = {
    id: number | null
    drawNumber: number | null
    drawDate: Date | null
    numbersJson: string | null
    bonusNumber: number | null
    jackpot: number | null
    winnersCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DrawCountAggregateOutputType = {
    id: number
    drawNumber: number
    drawDate: number
    numbersJson: number
    bonusNumber: number
    jackpot: number
    winnersCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DrawAvgAggregateInputType = {
    id?: true
    drawNumber?: true
    bonusNumber?: true
    jackpot?: true
    winnersCount?: true
  }

  export type DrawSumAggregateInputType = {
    id?: true
    drawNumber?: true
    bonusNumber?: true
    jackpot?: true
    winnersCount?: true
  }

  export type DrawMinAggregateInputType = {
    id?: true
    drawNumber?: true
    drawDate?: true
    numbersJson?: true
    bonusNumber?: true
    jackpot?: true
    winnersCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrawMaxAggregateInputType = {
    id?: true
    drawNumber?: true
    drawDate?: true
    numbersJson?: true
    bonusNumber?: true
    jackpot?: true
    winnersCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DrawCountAggregateInputType = {
    id?: true
    drawNumber?: true
    drawDate?: true
    numbersJson?: true
    bonusNumber?: true
    jackpot?: true
    winnersCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DrawAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draw to aggregate.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Draws
    **/
    _count?: true | DrawCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrawAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrawSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawMaxAggregateInputType
  }

  export type GetDrawAggregateType<T extends DrawAggregateArgs> = {
        [P in keyof T & keyof AggregateDraw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraw[P]>
      : GetScalarType<T[P], AggregateDraw[P]>
  }




  export type DrawGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawWhereInput
    orderBy?: DrawOrderByWithAggregationInput | DrawOrderByWithAggregationInput[]
    by: DrawScalarFieldEnum[] | DrawScalarFieldEnum
    having?: DrawScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawCountAggregateInputType | true
    _avg?: DrawAvgAggregateInputType
    _sum?: DrawSumAggregateInputType
    _min?: DrawMinAggregateInputType
    _max?: DrawMaxAggregateInputType
  }

  export type DrawGroupByOutputType = {
    id: number
    drawNumber: number
    drawDate: Date
    numbersJson: string
    bonusNumber: number | null
    jackpot: number | null
    winnersCount: number | null
    createdAt: Date
    updatedAt: Date
    _count: DrawCountAggregateOutputType | null
    _avg: DrawAvgAggregateOutputType | null
    _sum: DrawSumAggregateOutputType | null
    _min: DrawMinAggregateOutputType | null
    _max: DrawMaxAggregateOutputType | null
  }

  type GetDrawGroupByPayload<T extends DrawGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawGroupByOutputType[P]>
            : GetScalarType<T[P], DrawGroupByOutputType[P]>
        }
      >
    >


  export type DrawSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawNumber?: boolean
    drawDate?: boolean
    numbersJson?: boolean
    bonusNumber?: boolean
    jackpot?: boolean
    winnersCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawNumber?: boolean
    drawDate?: boolean
    numbersJson?: boolean
    bonusNumber?: boolean
    jackpot?: boolean
    winnersCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawNumber?: boolean
    drawDate?: boolean
    numbersJson?: boolean
    bonusNumber?: boolean
    jackpot?: boolean
    winnersCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectScalar = {
    id?: boolean
    drawNumber?: boolean
    drawDate?: boolean
    numbersJson?: boolean
    bonusNumber?: boolean
    jackpot?: boolean
    winnersCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DrawOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawNumber" | "drawDate" | "numbersJson" | "bonusNumber" | "jackpot" | "winnersCount" | "createdAt" | "updatedAt", ExtArgs["result"]["draw"]>

  export type $DrawPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Draw"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      drawNumber: number
      drawDate: Date
      numbersJson: string
      bonusNumber: number | null
      jackpot: number | null
      winnersCount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["draw"]>
    composites: {}
  }

  type DrawGetPayload<S extends boolean | null | undefined | DrawDefaultArgs> = $Result.GetResult<Prisma.$DrawPayload, S>

  type DrawCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawCountAggregateInputType | true
    }

  export interface DrawDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Draw'], meta: { name: 'Draw' } }
    /**
     * Find zero or one Draw that matches the filter.
     * @param {DrawFindUniqueArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawFindUniqueArgs>(args: SelectSubset<T, DrawFindUniqueArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Draw that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawFindUniqueOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawFindFirstArgs>(args?: SelectSubset<T, DrawFindFirstArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draw that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Draws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Draws
     * const draws = await prisma.draw.findMany()
     * 
     * // Get first 10 Draws
     * const draws = await prisma.draw.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawWithIdOnly = await prisma.draw.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawFindManyArgs>(args?: SelectSubset<T, DrawFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Draw.
     * @param {DrawCreateArgs} args - Arguments to create a Draw.
     * @example
     * // Create one Draw
     * const Draw = await prisma.draw.create({
     *   data: {
     *     // ... data to create a Draw
     *   }
     * })
     * 
     */
    create<T extends DrawCreateArgs>(args: SelectSubset<T, DrawCreateArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Draws.
     * @param {DrawCreateManyArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawCreateManyArgs>(args?: SelectSubset<T, DrawCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Draws and returns the data saved in the database.
     * @param {DrawCreateManyAndReturnArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Draw.
     * @param {DrawDeleteArgs} args - Arguments to delete one Draw.
     * @example
     * // Delete one Draw
     * const Draw = await prisma.draw.delete({
     *   where: {
     *     // ... filter to delete one Draw
     *   }
     * })
     * 
     */
    delete<T extends DrawDeleteArgs>(args: SelectSubset<T, DrawDeleteArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Draw.
     * @param {DrawUpdateArgs} args - Arguments to update one Draw.
     * @example
     * // Update one Draw
     * const draw = await prisma.draw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawUpdateArgs>(args: SelectSubset<T, DrawUpdateArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Draws.
     * @param {DrawDeleteManyArgs} args - Arguments to filter Draws to delete.
     * @example
     * // Delete a few Draws
     * const { count } = await prisma.draw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawDeleteManyArgs>(args?: SelectSubset<T, DrawDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawUpdateManyArgs>(args: SelectSubset<T, DrawUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Draws and returns the data updated in the database.
     * @param {DrawUpdateManyAndReturnArgs} args - Arguments to update many Draws.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrawUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Draw.
     * @param {DrawUpsertArgs} args - Arguments to update or create a Draw.
     * @example
     * // Update or create a Draw
     * const draw = await prisma.draw.upsert({
     *   create: {
     *     // ... data to create a Draw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Draw we want to update
     *   }
     * })
     */
    upsert<T extends DrawUpsertArgs>(args: SelectSubset<T, DrawUpsertArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawCountArgs} args - Arguments to filter Draws to count.
     * @example
     * // Count the number of Draws
     * const count = await prisma.draw.count({
     *   where: {
     *     // ... the filter for the Draws we want to count
     *   }
     * })
    **/
    count<T extends DrawCountArgs>(
      args?: Subset<T, DrawCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrawAggregateArgs>(args: Subset<T, DrawAggregateArgs>): Prisma.PrismaPromise<GetDrawAggregateType<T>>

    /**
     * Group by Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawGroupByArgs} args - Group by arguments.
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
      T extends DrawGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawGroupByArgs['orderBy'] }
        : { orderBy?: DrawGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrawGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Draw model
   */
  readonly fields: DrawFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Draw.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Draw model
   */
  interface DrawFieldRefs {
    readonly id: FieldRef<"Draw", 'Int'>
    readonly drawNumber: FieldRef<"Draw", 'Int'>
    readonly drawDate: FieldRef<"Draw", 'DateTime'>
    readonly numbersJson: FieldRef<"Draw", 'String'>
    readonly bonusNumber: FieldRef<"Draw", 'Int'>
    readonly jackpot: FieldRef<"Draw", 'Float'>
    readonly winnersCount: FieldRef<"Draw", 'Int'>
    readonly createdAt: FieldRef<"Draw", 'DateTime'>
    readonly updatedAt: FieldRef<"Draw", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Draw findUnique
   */
  export type DrawFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw findUniqueOrThrow
   */
  export type DrawFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw findFirst
   */
  export type DrawFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Draws.
     */
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw findFirstOrThrow
   */
  export type DrawFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Draws.
     */
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw findMany
   */
  export type DrawFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Filter, which Draws to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw create
   */
  export type DrawCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data needed to create a Draw.
     */
    data: XOR<DrawCreateInput, DrawUncheckedCreateInput>
  }

  /**
   * Draw createMany
   */
  export type DrawCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Draws.
     */
    data: DrawCreateManyInput | DrawCreateManyInput[]
  }

  /**
   * Draw createManyAndReturn
   */
  export type DrawCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data used to create many Draws.
     */
    data: DrawCreateManyInput | DrawCreateManyInput[]
  }

  /**
   * Draw update
   */
  export type DrawUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data needed to update a Draw.
     */
    data: XOR<DrawUpdateInput, DrawUncheckedUpdateInput>
    /**
     * Choose, which Draw to update.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw updateMany
   */
  export type DrawUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Draws.
     */
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyInput>
    /**
     * Filter which Draws to update
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to update.
     */
    limit?: number
  }

  /**
   * Draw updateManyAndReturn
   */
  export type DrawUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data used to update Draws.
     */
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyInput>
    /**
     * Filter which Draws to update
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to update.
     */
    limit?: number
  }

  /**
   * Draw upsert
   */
  export type DrawUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The filter to search for the Draw to update in case it exists.
     */
    where: DrawWhereUniqueInput
    /**
     * In case the Draw found by the `where` argument doesn't exist, create a new Draw with this data.
     */
    create: XOR<DrawCreateInput, DrawUncheckedCreateInput>
    /**
     * In case the Draw was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawUpdateInput, DrawUncheckedUpdateInput>
  }

  /**
   * Draw delete
   */
  export type DrawDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Filter which Draw to delete.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw deleteMany
   */
  export type DrawDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draws to delete
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to delete.
     */
    limit?: number
  }

  /**
   * Draw without action
   */
  export type DrawDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    numbersJson: string | null
    algorithm: string | null
    parametersJson: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    numbersJson: string | null
    algorithm: string | null
    parametersJson: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    numbersJson: number
    algorithm: number
    parametersJson: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    numbersJson?: true
    algorithm?: true
    parametersJson?: true
    createdAt?: true
    userId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    numbersJson?: true
    algorithm?: true
    parametersJson?: true
    createdAt?: true
    userId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    numbersJson?: true
    algorithm?: true
    parametersJson?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    numbersJson: string
    algorithm: string
    parametersJson: string | null
    createdAt: Date
    userId: string | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numbersJson?: boolean
    algorithm?: boolean
    parametersJson?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numbersJson?: boolean
    algorithm?: boolean
    parametersJson?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numbersJson?: boolean
    algorithm?: boolean
    parametersJson?: boolean
    createdAt?: boolean
    userId?: boolean
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    numbersJson?: boolean
    algorithm?: boolean
    parametersJson?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numbersJson" | "algorithm" | "parametersJson" | "createdAt" | "userId", ExtArgs["result"]["ticket"]>

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numbersJson: string
      algorithm: string
      parametersJson: string | null
      createdAt: Date
      userId: string | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly numbersJson: FieldRef<"Ticket", 'String'>
    readonly algorithm: FieldRef<"Ticket", 'String'>
    readonly parametersJson: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly userId: FieldRef<"Ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
  }


  /**
   * Model NumberStats
   */

  export type AggregateNumberStats = {
    _count: NumberStatsCountAggregateOutputType | null
    _avg: NumberStatsAvgAggregateOutputType | null
    _sum: NumberStatsSumAggregateOutputType | null
    _min: NumberStatsMinAggregateOutputType | null
    _max: NumberStatsMaxAggregateOutputType | null
  }

  export type NumberStatsAvgAggregateOutputType = {
    number: number | null
    frequency: number | null
    hotColdScore: number | null
  }

  export type NumberStatsSumAggregateOutputType = {
    number: number | null
    frequency: number | null
    hotColdScore: number | null
  }

  export type NumberStatsMinAggregateOutputType = {
    number: number | null
    frequency: number | null
    lastAppearance: Date | null
    hotColdScore: number | null
    updatedAt: Date | null
  }

  export type NumberStatsMaxAggregateOutputType = {
    number: number | null
    frequency: number | null
    lastAppearance: Date | null
    hotColdScore: number | null
    updatedAt: Date | null
  }

  export type NumberStatsCountAggregateOutputType = {
    number: number
    frequency: number
    lastAppearance: number
    hotColdScore: number
    updatedAt: number
    _all: number
  }


  export type NumberStatsAvgAggregateInputType = {
    number?: true
    frequency?: true
    hotColdScore?: true
  }

  export type NumberStatsSumAggregateInputType = {
    number?: true
    frequency?: true
    hotColdScore?: true
  }

  export type NumberStatsMinAggregateInputType = {
    number?: true
    frequency?: true
    lastAppearance?: true
    hotColdScore?: true
    updatedAt?: true
  }

  export type NumberStatsMaxAggregateInputType = {
    number?: true
    frequency?: true
    lastAppearance?: true
    hotColdScore?: true
    updatedAt?: true
  }

  export type NumberStatsCountAggregateInputType = {
    number?: true
    frequency?: true
    lastAppearance?: true
    hotColdScore?: true
    updatedAt?: true
    _all?: true
  }

  export type NumberStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberStats to aggregate.
     */
    where?: NumberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberStats to fetch.
     */
    orderBy?: NumberStatsOrderByWithRelationInput | NumberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NumberStats
    **/
    _count?: true | NumberStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumberStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumberStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumberStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumberStatsMaxAggregateInputType
  }

  export type GetNumberStatsAggregateType<T extends NumberStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateNumberStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumberStats[P]>
      : GetScalarType<T[P], AggregateNumberStats[P]>
  }




  export type NumberStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumberStatsWhereInput
    orderBy?: NumberStatsOrderByWithAggregationInput | NumberStatsOrderByWithAggregationInput[]
    by: NumberStatsScalarFieldEnum[] | NumberStatsScalarFieldEnum
    having?: NumberStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumberStatsCountAggregateInputType | true
    _avg?: NumberStatsAvgAggregateInputType
    _sum?: NumberStatsSumAggregateInputType
    _min?: NumberStatsMinAggregateInputType
    _max?: NumberStatsMaxAggregateInputType
  }

  export type NumberStatsGroupByOutputType = {
    number: number
    frequency: number
    lastAppearance: Date | null
    hotColdScore: number | null
    updatedAt: Date
    _count: NumberStatsCountAggregateOutputType | null
    _avg: NumberStatsAvgAggregateOutputType | null
    _sum: NumberStatsSumAggregateOutputType | null
    _min: NumberStatsMinAggregateOutputType | null
    _max: NumberStatsMaxAggregateOutputType | null
  }

  type GetNumberStatsGroupByPayload<T extends NumberStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NumberStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumberStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumberStatsGroupByOutputType[P]>
            : GetScalarType<T[P], NumberStatsGroupByOutputType[P]>
        }
      >
    >


  export type NumberStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    frequency?: boolean
    lastAppearance?: boolean
    hotColdScore?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["numberStats"]>

  export type NumberStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    frequency?: boolean
    lastAppearance?: boolean
    hotColdScore?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["numberStats"]>

  export type NumberStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    frequency?: boolean
    lastAppearance?: boolean
    hotColdScore?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["numberStats"]>

  export type NumberStatsSelectScalar = {
    number?: boolean
    frequency?: boolean
    lastAppearance?: boolean
    hotColdScore?: boolean
    updatedAt?: boolean
  }

  export type NumberStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"number" | "frequency" | "lastAppearance" | "hotColdScore" | "updatedAt", ExtArgs["result"]["numberStats"]>

  export type $NumberStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NumberStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      number: number
      frequency: number
      lastAppearance: Date | null
      hotColdScore: number | null
      updatedAt: Date
    }, ExtArgs["result"]["numberStats"]>
    composites: {}
  }

  type NumberStatsGetPayload<S extends boolean | null | undefined | NumberStatsDefaultArgs> = $Result.GetResult<Prisma.$NumberStatsPayload, S>

  type NumberStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NumberStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NumberStatsCountAggregateInputType | true
    }

  export interface NumberStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NumberStats'], meta: { name: 'NumberStats' } }
    /**
     * Find zero or one NumberStats that matches the filter.
     * @param {NumberStatsFindUniqueArgs} args - Arguments to find a NumberStats
     * @example
     * // Get one NumberStats
     * const numberStats = await prisma.numberStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NumberStatsFindUniqueArgs>(args: SelectSubset<T, NumberStatsFindUniqueArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NumberStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NumberStatsFindUniqueOrThrowArgs} args - Arguments to find a NumberStats
     * @example
     * // Get one NumberStats
     * const numberStats = await prisma.numberStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NumberStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, NumberStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberStatsFindFirstArgs} args - Arguments to find a NumberStats
     * @example
     * // Get one NumberStats
     * const numberStats = await prisma.numberStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NumberStatsFindFirstArgs>(args?: SelectSubset<T, NumberStatsFindFirstArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberStatsFindFirstOrThrowArgs} args - Arguments to find a NumberStats
     * @example
     * // Get one NumberStats
     * const numberStats = await prisma.numberStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NumberStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, NumberStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NumberStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NumberStats
     * const numberStats = await prisma.numberStats.findMany()
     * 
     * // Get first 10 NumberStats
     * const numberStats = await prisma.numberStats.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const numberStatsWithNumberOnly = await prisma.numberStats.findMany({ select: { number: true } })
     * 
     */
    findMany<T extends NumberStatsFindManyArgs>(args?: SelectSubset<T, NumberStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NumberStats.
     * @param {NumberStatsCreateArgs} args - Arguments to create a NumberStats.
     * @example
     * // Create one NumberStats
     * const NumberStats = await prisma.numberStats.create({
     *   data: {
     *     // ... data to create a NumberStats
     *   }
     * })
     * 
     */
    create<T extends NumberStatsCreateArgs>(args: SelectSubset<T, NumberStatsCreateArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NumberStats.
     * @param {NumberStatsCreateManyArgs} args - Arguments to create many NumberStats.
     * @example
     * // Create many NumberStats
     * const numberStats = await prisma.numberStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NumberStatsCreateManyArgs>(args?: SelectSubset<T, NumberStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NumberStats and returns the data saved in the database.
     * @param {NumberStatsCreateManyAndReturnArgs} args - Arguments to create many NumberStats.
     * @example
     * // Create many NumberStats
     * const numberStats = await prisma.numberStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NumberStats and only return the `number`
     * const numberStatsWithNumberOnly = await prisma.numberStats.createManyAndReturn({
     *   select: { number: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NumberStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, NumberStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NumberStats.
     * @param {NumberStatsDeleteArgs} args - Arguments to delete one NumberStats.
     * @example
     * // Delete one NumberStats
     * const NumberStats = await prisma.numberStats.delete({
     *   where: {
     *     // ... filter to delete one NumberStats
     *   }
     * })
     * 
     */
    delete<T extends NumberStatsDeleteArgs>(args: SelectSubset<T, NumberStatsDeleteArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NumberStats.
     * @param {NumberStatsUpdateArgs} args - Arguments to update one NumberStats.
     * @example
     * // Update one NumberStats
     * const numberStats = await prisma.numberStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NumberStatsUpdateArgs>(args: SelectSubset<T, NumberStatsUpdateArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NumberStats.
     * @param {NumberStatsDeleteManyArgs} args - Arguments to filter NumberStats to delete.
     * @example
     * // Delete a few NumberStats
     * const { count } = await prisma.numberStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NumberStatsDeleteManyArgs>(args?: SelectSubset<T, NumberStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NumberStats
     * const numberStats = await prisma.numberStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NumberStatsUpdateManyArgs>(args: SelectSubset<T, NumberStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberStats and returns the data updated in the database.
     * @param {NumberStatsUpdateManyAndReturnArgs} args - Arguments to update many NumberStats.
     * @example
     * // Update many NumberStats
     * const numberStats = await prisma.numberStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NumberStats and only return the `number`
     * const numberStatsWithNumberOnly = await prisma.numberStats.updateManyAndReturn({
     *   select: { number: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NumberStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, NumberStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NumberStats.
     * @param {NumberStatsUpsertArgs} args - Arguments to update or create a NumberStats.
     * @example
     * // Update or create a NumberStats
     * const numberStats = await prisma.numberStats.upsert({
     *   create: {
     *     // ... data to create a NumberStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NumberStats we want to update
     *   }
     * })
     */
    upsert<T extends NumberStatsUpsertArgs>(args: SelectSubset<T, NumberStatsUpsertArgs<ExtArgs>>): Prisma__NumberStatsClient<$Result.GetResult<Prisma.$NumberStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NumberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberStatsCountArgs} args - Arguments to filter NumberStats to count.
     * @example
     * // Count the number of NumberStats
     * const count = await prisma.numberStats.count({
     *   where: {
     *     // ... the filter for the NumberStats we want to count
     *   }
     * })
    **/
    count<T extends NumberStatsCountArgs>(
      args?: Subset<T, NumberStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumberStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NumberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NumberStatsAggregateArgs>(args: Subset<T, NumberStatsAggregateArgs>): Prisma.PrismaPromise<GetNumberStatsAggregateType<T>>

    /**
     * Group by NumberStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberStatsGroupByArgs} args - Group by arguments.
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
      T extends NumberStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumberStatsGroupByArgs['orderBy'] }
        : { orderBy?: NumberStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NumberStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumberStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NumberStats model
   */
  readonly fields: NumberStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NumberStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NumberStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the NumberStats model
   */
  interface NumberStatsFieldRefs {
    readonly number: FieldRef<"NumberStats", 'Int'>
    readonly frequency: FieldRef<"NumberStats", 'Int'>
    readonly lastAppearance: FieldRef<"NumberStats", 'DateTime'>
    readonly hotColdScore: FieldRef<"NumberStats", 'Float'>
    readonly updatedAt: FieldRef<"NumberStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NumberStats findUnique
   */
  export type NumberStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * Filter, which NumberStats to fetch.
     */
    where: NumberStatsWhereUniqueInput
  }

  /**
   * NumberStats findUniqueOrThrow
   */
  export type NumberStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * Filter, which NumberStats to fetch.
     */
    where: NumberStatsWhereUniqueInput
  }

  /**
   * NumberStats findFirst
   */
  export type NumberStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * Filter, which NumberStats to fetch.
     */
    where?: NumberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberStats to fetch.
     */
    orderBy?: NumberStatsOrderByWithRelationInput | NumberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberStats.
     */
    cursor?: NumberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberStats.
     */
    distinct?: NumberStatsScalarFieldEnum | NumberStatsScalarFieldEnum[]
  }

  /**
   * NumberStats findFirstOrThrow
   */
  export type NumberStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * Filter, which NumberStats to fetch.
     */
    where?: NumberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberStats to fetch.
     */
    orderBy?: NumberStatsOrderByWithRelationInput | NumberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberStats.
     */
    cursor?: NumberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberStats.
     */
    distinct?: NumberStatsScalarFieldEnum | NumberStatsScalarFieldEnum[]
  }

  /**
   * NumberStats findMany
   */
  export type NumberStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * Filter, which NumberStats to fetch.
     */
    where?: NumberStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberStats to fetch.
     */
    orderBy?: NumberStatsOrderByWithRelationInput | NumberStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NumberStats.
     */
    cursor?: NumberStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberStats.
     */
    skip?: number
    distinct?: NumberStatsScalarFieldEnum | NumberStatsScalarFieldEnum[]
  }

  /**
   * NumberStats create
   */
  export type NumberStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a NumberStats.
     */
    data: XOR<NumberStatsCreateInput, NumberStatsUncheckedCreateInput>
  }

  /**
   * NumberStats createMany
   */
  export type NumberStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NumberStats.
     */
    data: NumberStatsCreateManyInput | NumberStatsCreateManyInput[]
  }

  /**
   * NumberStats createManyAndReturn
   */
  export type NumberStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * The data used to create many NumberStats.
     */
    data: NumberStatsCreateManyInput | NumberStatsCreateManyInput[]
  }

  /**
   * NumberStats update
   */
  export type NumberStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a NumberStats.
     */
    data: XOR<NumberStatsUpdateInput, NumberStatsUncheckedUpdateInput>
    /**
     * Choose, which NumberStats to update.
     */
    where: NumberStatsWhereUniqueInput
  }

  /**
   * NumberStats updateMany
   */
  export type NumberStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NumberStats.
     */
    data: XOR<NumberStatsUpdateManyMutationInput, NumberStatsUncheckedUpdateManyInput>
    /**
     * Filter which NumberStats to update
     */
    where?: NumberStatsWhereInput
    /**
     * Limit how many NumberStats to update.
     */
    limit?: number
  }

  /**
   * NumberStats updateManyAndReturn
   */
  export type NumberStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * The data used to update NumberStats.
     */
    data: XOR<NumberStatsUpdateManyMutationInput, NumberStatsUncheckedUpdateManyInput>
    /**
     * Filter which NumberStats to update
     */
    where?: NumberStatsWhereInput
    /**
     * Limit how many NumberStats to update.
     */
    limit?: number
  }

  /**
   * NumberStats upsert
   */
  export type NumberStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the NumberStats to update in case it exists.
     */
    where: NumberStatsWhereUniqueInput
    /**
     * In case the NumberStats found by the `where` argument doesn't exist, create a new NumberStats with this data.
     */
    create: XOR<NumberStatsCreateInput, NumberStatsUncheckedCreateInput>
    /**
     * In case the NumberStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumberStatsUpdateInput, NumberStatsUncheckedUpdateInput>
  }

  /**
   * NumberStats delete
   */
  export type NumberStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
    /**
     * Filter which NumberStats to delete.
     */
    where: NumberStatsWhereUniqueInput
  }

  /**
   * NumberStats deleteMany
   */
  export type NumberStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberStats to delete
     */
    where?: NumberStatsWhereInput
    /**
     * Limit how many NumberStats to delete.
     */
    limit?: number
  }

  /**
   * NumberStats without action
   */
  export type NumberStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberStats
     */
    select?: NumberStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberStats
     */
    omit?: NumberStatsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DrawScalarFieldEnum: {
    id: 'id',
    drawNumber: 'drawNumber',
    drawDate: 'drawDate',
    numbersJson: 'numbersJson',
    bonusNumber: 'bonusNumber',
    jackpot: 'jackpot',
    winnersCount: 'winnersCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DrawScalarFieldEnum = (typeof DrawScalarFieldEnum)[keyof typeof DrawScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    numbersJson: 'numbersJson',
    algorithm: 'algorithm',
    parametersJson: 'parametersJson',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const NumberStatsScalarFieldEnum: {
    number: 'number',
    frequency: 'frequency',
    lastAppearance: 'lastAppearance',
    hotColdScore: 'hotColdScore',
    updatedAt: 'updatedAt'
  };

  export type NumberStatsScalarFieldEnum = (typeof NumberStatsScalarFieldEnum)[keyof typeof NumberStatsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DrawWhereInput = {
    AND?: DrawWhereInput | DrawWhereInput[]
    OR?: DrawWhereInput[]
    NOT?: DrawWhereInput | DrawWhereInput[]
    id?: IntFilter<"Draw"> | number
    drawNumber?: IntFilter<"Draw"> | number
    drawDate?: DateTimeFilter<"Draw"> | Date | string
    numbersJson?: StringFilter<"Draw"> | string
    bonusNumber?: IntNullableFilter<"Draw"> | number | null
    jackpot?: FloatNullableFilter<"Draw"> | number | null
    winnersCount?: IntNullableFilter<"Draw"> | number | null
    createdAt?: DateTimeFilter<"Draw"> | Date | string
    updatedAt?: DateTimeFilter<"Draw"> | Date | string
  }

  export type DrawOrderByWithRelationInput = {
    id?: SortOrder
    drawNumber?: SortOrder
    drawDate?: SortOrder
    numbersJson?: SortOrder
    bonusNumber?: SortOrderInput | SortOrder
    jackpot?: SortOrderInput | SortOrder
    winnersCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    drawNumber?: number
    AND?: DrawWhereInput | DrawWhereInput[]
    OR?: DrawWhereInput[]
    NOT?: DrawWhereInput | DrawWhereInput[]
    drawDate?: DateTimeFilter<"Draw"> | Date | string
    numbersJson?: StringFilter<"Draw"> | string
    bonusNumber?: IntNullableFilter<"Draw"> | number | null
    jackpot?: FloatNullableFilter<"Draw"> | number | null
    winnersCount?: IntNullableFilter<"Draw"> | number | null
    createdAt?: DateTimeFilter<"Draw"> | Date | string
    updatedAt?: DateTimeFilter<"Draw"> | Date | string
  }, "id" | "drawNumber">

  export type DrawOrderByWithAggregationInput = {
    id?: SortOrder
    drawNumber?: SortOrder
    drawDate?: SortOrder
    numbersJson?: SortOrder
    bonusNumber?: SortOrderInput | SortOrder
    jackpot?: SortOrderInput | SortOrder
    winnersCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DrawCountOrderByAggregateInput
    _avg?: DrawAvgOrderByAggregateInput
    _max?: DrawMaxOrderByAggregateInput
    _min?: DrawMinOrderByAggregateInput
    _sum?: DrawSumOrderByAggregateInput
  }

  export type DrawScalarWhereWithAggregatesInput = {
    AND?: DrawScalarWhereWithAggregatesInput | DrawScalarWhereWithAggregatesInput[]
    OR?: DrawScalarWhereWithAggregatesInput[]
    NOT?: DrawScalarWhereWithAggregatesInput | DrawScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Draw"> | number
    drawNumber?: IntWithAggregatesFilter<"Draw"> | number
    drawDate?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
    numbersJson?: StringWithAggregatesFilter<"Draw"> | string
    bonusNumber?: IntNullableWithAggregatesFilter<"Draw"> | number | null
    jackpot?: FloatNullableWithAggregatesFilter<"Draw"> | number | null
    winnersCount?: IntNullableWithAggregatesFilter<"Draw"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    numbersJson?: StringFilter<"Ticket"> | string
    algorithm?: StringFilter<"Ticket"> | string
    parametersJson?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    userId?: StringNullableFilter<"Ticket"> | string | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    numbersJson?: SortOrder
    algorithm?: SortOrder
    parametersJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    numbersJson?: StringFilter<"Ticket"> | string
    algorithm?: StringFilter<"Ticket"> | string
    parametersJson?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    userId?: StringNullableFilter<"Ticket"> | string | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    numbersJson?: SortOrder
    algorithm?: SortOrder
    parametersJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    numbersJson?: StringWithAggregatesFilter<"Ticket"> | string
    algorithm?: StringWithAggregatesFilter<"Ticket"> | string
    parametersJson?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
  }

  export type NumberStatsWhereInput = {
    AND?: NumberStatsWhereInput | NumberStatsWhereInput[]
    OR?: NumberStatsWhereInput[]
    NOT?: NumberStatsWhereInput | NumberStatsWhereInput[]
    number?: IntFilter<"NumberStats"> | number
    frequency?: IntFilter<"NumberStats"> | number
    lastAppearance?: DateTimeNullableFilter<"NumberStats"> | Date | string | null
    hotColdScore?: FloatNullableFilter<"NumberStats"> | number | null
    updatedAt?: DateTimeFilter<"NumberStats"> | Date | string
  }

  export type NumberStatsOrderByWithRelationInput = {
    number?: SortOrder
    frequency?: SortOrder
    lastAppearance?: SortOrderInput | SortOrder
    hotColdScore?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type NumberStatsWhereUniqueInput = Prisma.AtLeast<{
    number?: number
    AND?: NumberStatsWhereInput | NumberStatsWhereInput[]
    OR?: NumberStatsWhereInput[]
    NOT?: NumberStatsWhereInput | NumberStatsWhereInput[]
    frequency?: IntFilter<"NumberStats"> | number
    lastAppearance?: DateTimeNullableFilter<"NumberStats"> | Date | string | null
    hotColdScore?: FloatNullableFilter<"NumberStats"> | number | null
    updatedAt?: DateTimeFilter<"NumberStats"> | Date | string
  }, "number">

  export type NumberStatsOrderByWithAggregationInput = {
    number?: SortOrder
    frequency?: SortOrder
    lastAppearance?: SortOrderInput | SortOrder
    hotColdScore?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: NumberStatsCountOrderByAggregateInput
    _avg?: NumberStatsAvgOrderByAggregateInput
    _max?: NumberStatsMaxOrderByAggregateInput
    _min?: NumberStatsMinOrderByAggregateInput
    _sum?: NumberStatsSumOrderByAggregateInput
  }

  export type NumberStatsScalarWhereWithAggregatesInput = {
    AND?: NumberStatsScalarWhereWithAggregatesInput | NumberStatsScalarWhereWithAggregatesInput[]
    OR?: NumberStatsScalarWhereWithAggregatesInput[]
    NOT?: NumberStatsScalarWhereWithAggregatesInput | NumberStatsScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"NumberStats"> | number
    frequency?: IntWithAggregatesFilter<"NumberStats"> | number
    lastAppearance?: DateTimeNullableWithAggregatesFilter<"NumberStats"> | Date | string | null
    hotColdScore?: FloatNullableWithAggregatesFilter<"NumberStats"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"NumberStats"> | Date | string
  }

  export type DrawCreateInput = {
    drawNumber: number
    drawDate: Date | string
    numbersJson: string
    bonusNumber?: number | null
    jackpot?: number | null
    winnersCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawUncheckedCreateInput = {
    id?: number
    drawNumber: number
    drawDate: Date | string
    numbersJson: string
    bonusNumber?: number | null
    jackpot?: number | null
    winnersCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawUpdateInput = {
    drawNumber?: IntFieldUpdateOperationsInput | number
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    numbersJson?: StringFieldUpdateOperationsInput | string
    bonusNumber?: NullableIntFieldUpdateOperationsInput | number | null
    jackpot?: NullableFloatFieldUpdateOperationsInput | number | null
    winnersCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawNumber?: IntFieldUpdateOperationsInput | number
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    numbersJson?: StringFieldUpdateOperationsInput | string
    bonusNumber?: NullableIntFieldUpdateOperationsInput | number | null
    jackpot?: NullableFloatFieldUpdateOperationsInput | number | null
    winnersCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawCreateManyInput = {
    id?: number
    drawNumber: number
    drawDate: Date | string
    numbersJson: string
    bonusNumber?: number | null
    jackpot?: number | null
    winnersCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DrawUpdateManyMutationInput = {
    drawNumber?: IntFieldUpdateOperationsInput | number
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    numbersJson?: StringFieldUpdateOperationsInput | string
    bonusNumber?: NullableIntFieldUpdateOperationsInput | number | null
    jackpot?: NullableFloatFieldUpdateOperationsInput | number | null
    winnersCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    drawNumber?: IntFieldUpdateOperationsInput | number
    drawDate?: DateTimeFieldUpdateOperationsInput | Date | string
    numbersJson?: StringFieldUpdateOperationsInput | string
    bonusNumber?: NullableIntFieldUpdateOperationsInput | number | null
    jackpot?: NullableFloatFieldUpdateOperationsInput | number | null
    winnersCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    numbersJson: string
    algorithm: string
    parametersJson?: string | null
    createdAt?: Date | string
    userId?: string | null
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    numbersJson: string
    algorithm: string
    parametersJson?: string | null
    createdAt?: Date | string
    userId?: string | null
  }

  export type TicketUpdateInput = {
    numbersJson?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    parametersJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numbersJson?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    parametersJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateManyInput = {
    id?: number
    numbersJson: string
    algorithm: string
    parametersJson?: string | null
    createdAt?: Date | string
    userId?: string | null
  }

  export type TicketUpdateManyMutationInput = {
    numbersJson?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    parametersJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numbersJson?: StringFieldUpdateOperationsInput | string
    algorithm?: StringFieldUpdateOperationsInput | string
    parametersJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NumberStatsCreateInput = {
    number: number
    frequency?: number
    lastAppearance?: Date | string | null
    hotColdScore?: number | null
    updatedAt?: Date | string
  }

  export type NumberStatsUncheckedCreateInput = {
    number: number
    frequency?: number
    lastAppearance?: Date | string | null
    hotColdScore?: number | null
    updatedAt?: Date | string
  }

  export type NumberStatsUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    lastAppearance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotColdScore?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumberStatsUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    lastAppearance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotColdScore?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumberStatsCreateManyInput = {
    number: number
    frequency?: number
    lastAppearance?: Date | string | null
    hotColdScore?: number | null
    updatedAt?: Date | string
  }

  export type NumberStatsUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    lastAppearance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotColdScore?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumberStatsUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    frequency?: IntFieldUpdateOperationsInput | number
    lastAppearance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotColdScore?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DrawCountOrderByAggregateInput = {
    id?: SortOrder
    drawNumber?: SortOrder
    drawDate?: SortOrder
    numbersJson?: SortOrder
    bonusNumber?: SortOrder
    jackpot?: SortOrder
    winnersCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawAvgOrderByAggregateInput = {
    id?: SortOrder
    drawNumber?: SortOrder
    bonusNumber?: SortOrder
    jackpot?: SortOrder
    winnersCount?: SortOrder
  }

  export type DrawMaxOrderByAggregateInput = {
    id?: SortOrder
    drawNumber?: SortOrder
    drawDate?: SortOrder
    numbersJson?: SortOrder
    bonusNumber?: SortOrder
    jackpot?: SortOrder
    winnersCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawMinOrderByAggregateInput = {
    id?: SortOrder
    drawNumber?: SortOrder
    drawDate?: SortOrder
    numbersJson?: SortOrder
    bonusNumber?: SortOrder
    jackpot?: SortOrder
    winnersCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DrawSumOrderByAggregateInput = {
    id?: SortOrder
    drawNumber?: SortOrder
    bonusNumber?: SortOrder
    jackpot?: SortOrder
    winnersCount?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    numbersJson?: SortOrder
    algorithm?: SortOrder
    parametersJson?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    numbersJson?: SortOrder
    algorithm?: SortOrder
    parametersJson?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    numbersJson?: SortOrder
    algorithm?: SortOrder
    parametersJson?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NumberStatsCountOrderByAggregateInput = {
    number?: SortOrder
    frequency?: SortOrder
    lastAppearance?: SortOrder
    hotColdScore?: SortOrder
    updatedAt?: SortOrder
  }

  export type NumberStatsAvgOrderByAggregateInput = {
    number?: SortOrder
    frequency?: SortOrder
    hotColdScore?: SortOrder
  }

  export type NumberStatsMaxOrderByAggregateInput = {
    number?: SortOrder
    frequency?: SortOrder
    lastAppearance?: SortOrder
    hotColdScore?: SortOrder
    updatedAt?: SortOrder
  }

  export type NumberStatsMinOrderByAggregateInput = {
    number?: SortOrder
    frequency?: SortOrder
    lastAppearance?: SortOrder
    hotColdScore?: SortOrder
    updatedAt?: SortOrder
  }

  export type NumberStatsSumOrderByAggregateInput = {
    number?: SortOrder
    frequency?: SortOrder
    hotColdScore?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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