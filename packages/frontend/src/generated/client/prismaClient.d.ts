
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type ClausePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Clause"
  objects: {
    report_to_clause: Report_to_clausePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    label: string
    value: string
  }, ExtArgs["result"]["clause"]>
  composites: {}
}

/**
 * Model Clause
 * 
 */
export type Clause = runtime.Types.DefaultSelection<ClausePayload>
export type ReportPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Report"
  objects: {
    report_to_clause: Report_to_clausePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    title: string
    redacted_by: string
    created_by_id: string
    meet_date: Date
    meet_link: string
    applicant_name: string
    applicant_type: string
    project_status: string
    project_cadastral_ref: string
    project_land_contact: string
    project_space_type: string
    project_nature: string
    project_description: string
    decision: string
    decision_comment: string
    contacts: string
    created_at: Date
    updated_at: Date
  }, ExtArgs["result"]["report"]>
  composites: {}
}

/**
 * Model Report
 * 
 */
export type Report = runtime.Types.DefaultSelection<ReportPayload>
export type Report_to_clausePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Report_to_clause"
  objects: {
    clause: ClausePayload<ExtArgs>
    report: ReportPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    report_id: string
    clause_id: string
  }, ExtArgs["result"]["report_to_clause"]>
  composites: {}
}

/**
 * Model Report_to_clause
 * 
 */
export type Report_to_clause = runtime.Types.DefaultSelection<Report_to_clausePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clauses
 * const clauses = await prisma.clause.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clauses
   * const clauses = await prisma.clause.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.clause`: Exposes CRUD operations for the **Clause** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clauses
    * const clauses = await prisma.clause.findMany()
    * ```
    */
  get clause(): Prisma.ClauseDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.report_to_clause`: Exposes CRUD operations for the **Report_to_clause** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Report_to_clauses
    * const report_to_clauses = await prisma.report_to_clause.findMany()
    * ```
    */
  get report_to_clause(): Prisma.Report_to_clauseDelegate<GlobalReject, ExtArgs>;
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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
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
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Clause: 'Clause',
    Report: 'Report',
    Report_to_clause: 'Report_to_clause'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'clause' | 'report' | 'report_to_clause'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Clause: {
        payload: ClausePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ClauseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClauseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload>
          }
          findFirst: {
            args: Prisma.ClauseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClauseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload>
          }
          findMany: {
            args: Prisma.ClauseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload>[]
          }
          create: {
            args: Prisma.ClauseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload>
          }
          createMany: {
            args: Prisma.ClauseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClauseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload>
          }
          update: {
            args: Prisma.ClauseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload>
          }
          deleteMany: {
            args: Prisma.ClauseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClauseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClauseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ClausePayload>
          }
          aggregate: {
            args: Prisma.ClauseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClause>
          }
          groupBy: {
            args: Prisma.ClauseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClauseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClauseCountArgs<ExtArgs>,
            result: $Utils.Optional<ClauseCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: ReportPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>,
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Report_to_clause: {
        payload: Report_to_clausePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.Report_to_clauseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Report_to_clauseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload>
          }
          findFirst: {
            args: Prisma.Report_to_clauseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Report_to_clauseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload>
          }
          findMany: {
            args: Prisma.Report_to_clauseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload>[]
          }
          create: {
            args: Prisma.Report_to_clauseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload>
          }
          createMany: {
            args: Prisma.Report_to_clauseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Report_to_clauseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload>
          }
          update: {
            args: Prisma.Report_to_clauseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload>
          }
          deleteMany: {
            args: Prisma.Report_to_clauseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Report_to_clauseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Report_to_clauseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Report_to_clausePayload>
          }
          aggregate: {
            args: Prisma.Report_to_clauseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReport_to_clause>
          }
          groupBy: {
            args: Prisma.Report_to_clauseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Report_to_clauseGroupByOutputType>[]
          }
          count: {
            args: Prisma.Report_to_clauseCountArgs<ExtArgs>,
            result: $Utils.Optional<Report_to_clauseCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type ClauseCountOutputType
   */


  export type ClauseCountOutputType = {
    report_to_clause: number
  }

  export type ClauseCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    report_to_clause?: boolean | ClauseCountOutputTypeCountReport_to_clauseArgs
  }

  // Custom InputTypes

  /**
   * ClauseCountOutputType without action
   */
  export type ClauseCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClauseCountOutputType
     */
    select?: ClauseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClauseCountOutputType without action
   */
  export type ClauseCountOutputTypeCountReport_to_clauseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Report_to_clauseWhereInput
  }



  /**
   * Count Type ReportCountOutputType
   */


  export type ReportCountOutputType = {
    report_to_clause: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    report_to_clause?: boolean | ReportCountOutputTypeCountReport_to_clauseArgs
  }

  // Custom InputTypes

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountReport_to_clauseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Report_to_clauseWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Clause
   */


  export type AggregateClause = {
    _count: ClauseCountAggregateOutputType | null
    _min: ClauseMinAggregateOutputType | null
    _max: ClauseMaxAggregateOutputType | null
  }

  export type ClauseMinAggregateOutputType = {
    id: string | null
    label: string | null
    value: string | null
  }

  export type ClauseMaxAggregateOutputType = {
    id: string | null
    label: string | null
    value: string | null
  }

  export type ClauseCountAggregateOutputType = {
    id: number
    label: number
    value: number
    _all: number
  }


  export type ClauseMinAggregateInputType = {
    id?: true
    label?: true
    value?: true
  }

  export type ClauseMaxAggregateInputType = {
    id?: true
    label?: true
    value?: true
  }

  export type ClauseCountAggregateInputType = {
    id?: true
    label?: true
    value?: true
    _all?: true
  }

  export type ClauseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clause to aggregate.
     */
    where?: ClauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clauses to fetch.
     */
    orderBy?: Enumerable<ClauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clauses
    **/
    _count?: true | ClauseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClauseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClauseMaxAggregateInputType
  }

  export type GetClauseAggregateType<T extends ClauseAggregateArgs> = {
        [P in keyof T & keyof AggregateClause]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClause[P]>
      : GetScalarType<T[P], AggregateClause[P]>
  }




  export type ClauseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ClauseWhereInput
    orderBy?: Enumerable<ClauseOrderByWithAggregationInput>
    by: ClauseScalarFieldEnum[]
    having?: ClauseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClauseCountAggregateInputType | true
    _min?: ClauseMinAggregateInputType
    _max?: ClauseMaxAggregateInputType
  }


  export type ClauseGroupByOutputType = {
    id: string
    label: string
    value: string
    _count: ClauseCountAggregateOutputType | null
    _min: ClauseMinAggregateOutputType | null
    _max: ClauseMaxAggregateOutputType | null
  }

  type GetClauseGroupByPayload<T extends ClauseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ClauseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClauseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClauseGroupByOutputType[P]>
            : GetScalarType<T[P], ClauseGroupByOutputType[P]>
        }
      >
    >


  export type ClauseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    value?: boolean
    report_to_clause?: boolean | Clause$report_to_clauseArgs<ExtArgs>
    _count?: boolean | ClauseCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["clause"]>

  export type ClauseSelectScalar = {
    id?: boolean
    label?: boolean
    value?: boolean
  }

  export type ClauseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    report_to_clause?: boolean | Clause$report_to_clauseArgs<ExtArgs>
    _count?: boolean | ClauseCountOutputTypeArgs<ExtArgs>
  }


  type ClauseGetPayload<S extends boolean | null | undefined | ClauseArgs> = $Types.GetResult<ClausePayload, S>

  type ClauseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ClauseFindManyArgs, 'select' | 'include'> & {
      select?: ClauseCountAggregateInputType | true
    }

  export interface ClauseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clause'], meta: { name: 'Clause' } }
    /**
     * Find zero or one Clause that matches the filter.
     * @param {ClauseFindUniqueArgs} args - Arguments to find a Clause
     * @example
     * // Get one Clause
     * const clause = await prisma.clause.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClauseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClauseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Clause'> extends True ? Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Clause that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClauseFindUniqueOrThrowArgs} args - Arguments to find a Clause
     * @example
     * // Get one Clause
     * const clause = await prisma.clause.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClauseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClauseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Clause that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClauseFindFirstArgs} args - Arguments to find a Clause
     * @example
     * // Get one Clause
     * const clause = await prisma.clause.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClauseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClauseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Clause'> extends True ? Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Clause that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClauseFindFirstOrThrowArgs} args - Arguments to find a Clause
     * @example
     * // Get one Clause
     * const clause = await prisma.clause.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClauseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClauseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Clauses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClauseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clauses
     * const clauses = await prisma.clause.findMany()
     * 
     * // Get first 10 Clauses
     * const clauses = await prisma.clause.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clauseWithIdOnly = await prisma.clause.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClauseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClauseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Clause.
     * @param {ClauseCreateArgs} args - Arguments to create a Clause.
     * @example
     * // Create one Clause
     * const Clause = await prisma.clause.create({
     *   data: {
     *     // ... data to create a Clause
     *   }
     * })
     * 
    **/
    create<T extends ClauseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClauseCreateArgs<ExtArgs>>
    ): Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Clauses.
     *     @param {ClauseCreateManyArgs} args - Arguments to create many Clauses.
     *     @example
     *     // Create many Clauses
     *     const clause = await prisma.clause.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClauseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClauseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clause.
     * @param {ClauseDeleteArgs} args - Arguments to delete one Clause.
     * @example
     * // Delete one Clause
     * const Clause = await prisma.clause.delete({
     *   where: {
     *     // ... filter to delete one Clause
     *   }
     * })
     * 
    **/
    delete<T extends ClauseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClauseDeleteArgs<ExtArgs>>
    ): Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Clause.
     * @param {ClauseUpdateArgs} args - Arguments to update one Clause.
     * @example
     * // Update one Clause
     * const clause = await prisma.clause.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClauseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClauseUpdateArgs<ExtArgs>>
    ): Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Clauses.
     * @param {ClauseDeleteManyArgs} args - Arguments to filter Clauses to delete.
     * @example
     * // Delete a few Clauses
     * const { count } = await prisma.clause.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClauseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClauseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClauseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clauses
     * const clause = await prisma.clause.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClauseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClauseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clause.
     * @param {ClauseUpsertArgs} args - Arguments to update or create a Clause.
     * @example
     * // Update or create a Clause
     * const clause = await prisma.clause.upsert({
     *   create: {
     *     // ... data to create a Clause
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clause we want to update
     *   }
     * })
    **/
    upsert<T extends ClauseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClauseUpsertArgs<ExtArgs>>
    ): Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Clauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClauseCountArgs} args - Arguments to filter Clauses to count.
     * @example
     * // Count the number of Clauses
     * const count = await prisma.clause.count({
     *   where: {
     *     // ... the filter for the Clauses we want to count
     *   }
     * })
    **/
    count<T extends ClauseCountArgs>(
      args?: Subset<T, ClauseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClauseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClauseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClauseAggregateArgs>(args: Subset<T, ClauseAggregateArgs>): Prisma.PrismaPromise<GetClauseAggregateType<T>>

    /**
     * Group by Clause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClauseGroupByArgs} args - Group by arguments.
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
      T extends ClauseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClauseGroupByArgs['orderBy'] }
        : { orderBy?: ClauseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClauseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClauseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Clause.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClauseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    report_to_clause<T extends Clause$report_to_clauseArgs<ExtArgs> = {}>(args?: Subset<T, Clause$report_to_clauseArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Clause base type for findUnique actions
   */
  export type ClauseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * Filter, which Clause to fetch.
     */
    where: ClauseWhereUniqueInput
  }

  /**
   * Clause findUnique
   */
  export interface ClauseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ClauseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Clause findUniqueOrThrow
   */
  export type ClauseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * Filter, which Clause to fetch.
     */
    where: ClauseWhereUniqueInput
  }


  /**
   * Clause base type for findFirst actions
   */
  export type ClauseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * Filter, which Clause to fetch.
     */
    where?: ClauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clauses to fetch.
     */
    orderBy?: Enumerable<ClauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clauses.
     */
    cursor?: ClauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clauses.
     */
    distinct?: Enumerable<ClauseScalarFieldEnum>
  }

  /**
   * Clause findFirst
   */
  export interface ClauseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ClauseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Clause findFirstOrThrow
   */
  export type ClauseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * Filter, which Clause to fetch.
     */
    where?: ClauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clauses to fetch.
     */
    orderBy?: Enumerable<ClauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clauses.
     */
    cursor?: ClauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clauses.
     */
    distinct?: Enumerable<ClauseScalarFieldEnum>
  }


  /**
   * Clause findMany
   */
  export type ClauseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * Filter, which Clauses to fetch.
     */
    where?: ClauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clauses to fetch.
     */
    orderBy?: Enumerable<ClauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clauses.
     */
    cursor?: ClauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clauses.
     */
    skip?: number
    distinct?: Enumerable<ClauseScalarFieldEnum>
  }


  /**
   * Clause create
   */
  export type ClauseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * The data needed to create a Clause.
     */
    data: XOR<ClauseCreateInput, ClauseUncheckedCreateInput>
  }


  /**
   * Clause createMany
   */
  export type ClauseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clauses.
     */
    data: Enumerable<ClauseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Clause update
   */
  export type ClauseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * The data needed to update a Clause.
     */
    data: XOR<ClauseUpdateInput, ClauseUncheckedUpdateInput>
    /**
     * Choose, which Clause to update.
     */
    where: ClauseWhereUniqueInput
  }


  /**
   * Clause updateMany
   */
  export type ClauseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clauses.
     */
    data: XOR<ClauseUpdateManyMutationInput, ClauseUncheckedUpdateManyInput>
    /**
     * Filter which Clauses to update
     */
    where?: ClauseWhereInput
  }


  /**
   * Clause upsert
   */
  export type ClauseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * The filter to search for the Clause to update in case it exists.
     */
    where: ClauseWhereUniqueInput
    /**
     * In case the Clause found by the `where` argument doesn't exist, create a new Clause with this data.
     */
    create: XOR<ClauseCreateInput, ClauseUncheckedCreateInput>
    /**
     * In case the Clause was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClauseUpdateInput, ClauseUncheckedUpdateInput>
  }


  /**
   * Clause delete
   */
  export type ClauseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
    /**
     * Filter which Clause to delete.
     */
    where: ClauseWhereUniqueInput
  }


  /**
   * Clause deleteMany
   */
  export type ClauseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clauses to delete
     */
    where?: ClauseWhereInput
  }


  /**
   * Clause.report_to_clause
   */
  export type Clause$report_to_clauseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    where?: Report_to_clauseWhereInput
    orderBy?: Enumerable<Report_to_clauseOrderByWithRelationInput>
    cursor?: Report_to_clauseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Report_to_clauseScalarFieldEnum>
  }


  /**
   * Clause without action
   */
  export type ClauseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clause
     */
    select?: ClauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClauseInclude<ExtArgs> | null
  }



  /**
   * Model Report
   */


  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    title: string | null
    redacted_by: string | null
    created_by_id: string | null
    meet_date: Date | null
    meet_link: string | null
    applicant_name: string | null
    applicant_type: string | null
    project_status: string | null
    project_cadastral_ref: string | null
    project_land_contact: string | null
    project_space_type: string | null
    project_nature: string | null
    project_description: string | null
    decision: string | null
    decision_comment: string | null
    contacts: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    redacted_by: string | null
    created_by_id: string | null
    meet_date: Date | null
    meet_link: string | null
    applicant_name: string | null
    applicant_type: string | null
    project_status: string | null
    project_cadastral_ref: string | null
    project_land_contact: string | null
    project_space_type: string | null
    project_nature: string | null
    project_description: string | null
    decision: string | null
    decision_comment: string | null
    contacts: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    title: number
    redacted_by: number
    created_by_id: number
    meet_date: number
    meet_link: number
    applicant_name: number
    applicant_type: number
    project_status: number
    project_cadastral_ref: number
    project_land_contact: number
    project_space_type: number
    project_nature: number
    project_description: number
    decision: number
    decision_comment: number
    contacts: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    title?: true
    redacted_by?: true
    created_by_id?: true
    meet_date?: true
    meet_link?: true
    applicant_name?: true
    applicant_type?: true
    project_status?: true
    project_cadastral_ref?: true
    project_land_contact?: true
    project_space_type?: true
    project_nature?: true
    project_description?: true
    decision?: true
    decision_comment?: true
    contacts?: true
    created_at?: true
    updated_at?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    title?: true
    redacted_by?: true
    created_by_id?: true
    meet_date?: true
    meet_link?: true
    applicant_name?: true
    applicant_type?: true
    project_status?: true
    project_cadastral_ref?: true
    project_land_contact?: true
    project_space_type?: true
    project_nature?: true
    project_description?: true
    decision?: true
    decision_comment?: true
    contacts?: true
    created_at?: true
    updated_at?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    title?: true
    redacted_by?: true
    created_by_id?: true
    meet_date?: true
    meet_link?: true
    applicant_name?: true
    applicant_type?: true
    project_status?: true
    project_cadastral_ref?: true
    project_land_contact?: true
    project_space_type?: true
    project_nature?: true
    project_description?: true
    decision?: true
    decision_comment?: true
    contacts?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: Enumerable<ReportOrderByWithAggregationInput>
    by: ReportScalarFieldEnum[]
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }


  export type ReportGroupByOutputType = {
    id: string
    title: string
    redacted_by: string
    created_by_id: string
    meet_date: Date
    meet_link: string
    applicant_name: string
    applicant_type: string
    project_status: string
    project_cadastral_ref: string
    project_land_contact: string
    project_space_type: string
    project_nature: string
    project_description: string
    decision: string
    decision_comment: string
    contacts: string
    created_at: Date
    updated_at: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    redacted_by?: boolean
    created_by_id?: boolean
    meet_date?: boolean
    meet_link?: boolean
    applicant_name?: boolean
    applicant_type?: boolean
    project_status?: boolean
    project_cadastral_ref?: boolean
    project_land_contact?: boolean
    project_space_type?: boolean
    project_nature?: boolean
    project_description?: boolean
    decision?: boolean
    decision_comment?: boolean
    contacts?: boolean
    created_at?: boolean
    updated_at?: boolean
    report_to_clause?: boolean | Report$report_to_clauseArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    title?: boolean
    redacted_by?: boolean
    created_by_id?: boolean
    meet_date?: boolean
    meet_link?: boolean
    applicant_name?: boolean
    applicant_type?: boolean
    project_status?: boolean
    project_cadastral_ref?: boolean
    project_land_contact?: boolean
    project_space_type?: boolean
    project_nature?: boolean
    project_description?: boolean
    decision?: boolean
    decision_comment?: boolean
    contacts?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReportInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    report_to_clause?: boolean | Report$report_to_clauseArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeArgs<ExtArgs>
  }


  type ReportGetPayload<S extends boolean | null | undefined | ReportArgs> = $Types.GetResult<ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReportFindManyArgs, 'select' | 'include'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReportFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Report'> extends True ? Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Report that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReportFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Report'> extends True ? Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Report that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
    **/
    create<T extends ReportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportCreateArgs<ExtArgs>>
    ): Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Reports.
     *     @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     *     @example
     *     // Create many Reports
     *     const report = await prisma.report.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
    **/
    delete<T extends ReportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>
    ): Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>
    ): Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
    **/
    upsert<T extends ReportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>
    ): Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    report_to_clause<T extends Report$report_to_clauseArgs<ExtArgs> = {}>(args?: Subset<T, Report$report_to_clauseArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Report base type for findUnique actions
   */
  export type ReportFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUnique
   */
  export interface ReportFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReportFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }


  /**
   * Report base type for findFirst actions
   */
  export type ReportFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: Enumerable<ReportScalarFieldEnum>
  }

  /**
   * Report findFirst
   */
  export interface ReportFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReportFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: Enumerable<ReportScalarFieldEnum>
  }


  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: Enumerable<ReportOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: Enumerable<ReportScalarFieldEnum>
  }


  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }


  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: Enumerable<ReportCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }


  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
  }


  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }


  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }


  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
  }


  /**
   * Report.report_to_clause
   */
  export type Report$report_to_clauseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    where?: Report_to_clauseWhereInput
    orderBy?: Enumerable<Report_to_clauseOrderByWithRelationInput>
    cursor?: Report_to_clauseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Report_to_clauseScalarFieldEnum>
  }


  /**
   * Report without action
   */
  export type ReportArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReportInclude<ExtArgs> | null
  }



  /**
   * Model Report_to_clause
   */


  export type AggregateReport_to_clause = {
    _count: Report_to_clauseCountAggregateOutputType | null
    _min: Report_to_clauseMinAggregateOutputType | null
    _max: Report_to_clauseMaxAggregateOutputType | null
  }

  export type Report_to_clauseMinAggregateOutputType = {
    id: string | null
    report_id: string | null
    clause_id: string | null
  }

  export type Report_to_clauseMaxAggregateOutputType = {
    id: string | null
    report_id: string | null
    clause_id: string | null
  }

  export type Report_to_clauseCountAggregateOutputType = {
    id: number
    report_id: number
    clause_id: number
    _all: number
  }


  export type Report_to_clauseMinAggregateInputType = {
    id?: true
    report_id?: true
    clause_id?: true
  }

  export type Report_to_clauseMaxAggregateInputType = {
    id?: true
    report_id?: true
    clause_id?: true
  }

  export type Report_to_clauseCountAggregateInputType = {
    id?: true
    report_id?: true
    clause_id?: true
    _all?: true
  }

  export type Report_to_clauseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report_to_clause to aggregate.
     */
    where?: Report_to_clauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Report_to_clauses to fetch.
     */
    orderBy?: Enumerable<Report_to_clauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Report_to_clauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Report_to_clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Report_to_clauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Report_to_clauses
    **/
    _count?: true | Report_to_clauseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Report_to_clauseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Report_to_clauseMaxAggregateInputType
  }

  export type GetReport_to_clauseAggregateType<T extends Report_to_clauseAggregateArgs> = {
        [P in keyof T & keyof AggregateReport_to_clause]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport_to_clause[P]>
      : GetScalarType<T[P], AggregateReport_to_clause[P]>
  }




  export type Report_to_clauseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Report_to_clauseWhereInput
    orderBy?: Enumerable<Report_to_clauseOrderByWithAggregationInput>
    by: Report_to_clauseScalarFieldEnum[]
    having?: Report_to_clauseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Report_to_clauseCountAggregateInputType | true
    _min?: Report_to_clauseMinAggregateInputType
    _max?: Report_to_clauseMaxAggregateInputType
  }


  export type Report_to_clauseGroupByOutputType = {
    id: string
    report_id: string
    clause_id: string
    _count: Report_to_clauseCountAggregateOutputType | null
    _min: Report_to_clauseMinAggregateOutputType | null
    _max: Report_to_clauseMaxAggregateOutputType | null
  }

  type GetReport_to_clauseGroupByPayload<T extends Report_to_clauseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Report_to_clauseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Report_to_clauseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Report_to_clauseGroupByOutputType[P]>
            : GetScalarType<T[P], Report_to_clauseGroupByOutputType[P]>
        }
      >
    >


  export type Report_to_clauseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    report_id?: boolean
    clause_id?: boolean
    clause?: boolean | ClauseArgs<ExtArgs>
    report?: boolean | ReportArgs<ExtArgs>
  }, ExtArgs["result"]["report_to_clause"]>

  export type Report_to_clauseSelectScalar = {
    id?: boolean
    report_id?: boolean
    clause_id?: boolean
  }

  export type Report_to_clauseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    clause?: boolean | ClauseArgs<ExtArgs>
    report?: boolean | ReportArgs<ExtArgs>
  }


  type Report_to_clauseGetPayload<S extends boolean | null | undefined | Report_to_clauseArgs> = $Types.GetResult<Report_to_clausePayload, S>

  type Report_to_clauseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Report_to_clauseFindManyArgs, 'select' | 'include'> & {
      select?: Report_to_clauseCountAggregateInputType | true
    }

  export interface Report_to_clauseDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report_to_clause'], meta: { name: 'Report_to_clause' } }
    /**
     * Find zero or one Report_to_clause that matches the filter.
     * @param {Report_to_clauseFindUniqueArgs} args - Arguments to find a Report_to_clause
     * @example
     * // Get one Report_to_clause
     * const report_to_clause = await prisma.report_to_clause.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Report_to_clauseFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Report_to_clauseFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Report_to_clause'> extends True ? Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Report_to_clause that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Report_to_clauseFindUniqueOrThrowArgs} args - Arguments to find a Report_to_clause
     * @example
     * // Get one Report_to_clause
     * const report_to_clause = await prisma.report_to_clause.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Report_to_clauseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Report_to_clauseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Report_to_clause that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_to_clauseFindFirstArgs} args - Arguments to find a Report_to_clause
     * @example
     * // Get one Report_to_clause
     * const report_to_clause = await prisma.report_to_clause.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Report_to_clauseFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Report_to_clauseFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Report_to_clause'> extends True ? Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Report_to_clause that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_to_clauseFindFirstOrThrowArgs} args - Arguments to find a Report_to_clause
     * @example
     * // Get one Report_to_clause
     * const report_to_clause = await prisma.report_to_clause.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Report_to_clauseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Report_to_clauseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Report_to_clauses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_to_clauseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Report_to_clauses
     * const report_to_clauses = await prisma.report_to_clause.findMany()
     * 
     * // Get first 10 Report_to_clauses
     * const report_to_clauses = await prisma.report_to_clause.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const report_to_clauseWithIdOnly = await prisma.report_to_clause.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Report_to_clauseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Report_to_clauseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Report_to_clause.
     * @param {Report_to_clauseCreateArgs} args - Arguments to create a Report_to_clause.
     * @example
     * // Create one Report_to_clause
     * const Report_to_clause = await prisma.report_to_clause.create({
     *   data: {
     *     // ... data to create a Report_to_clause
     *   }
     * })
     * 
    **/
    create<T extends Report_to_clauseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Report_to_clauseCreateArgs<ExtArgs>>
    ): Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Report_to_clauses.
     *     @param {Report_to_clauseCreateManyArgs} args - Arguments to create many Report_to_clauses.
     *     @example
     *     // Create many Report_to_clauses
     *     const report_to_clause = await prisma.report_to_clause.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Report_to_clauseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Report_to_clauseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report_to_clause.
     * @param {Report_to_clauseDeleteArgs} args - Arguments to delete one Report_to_clause.
     * @example
     * // Delete one Report_to_clause
     * const Report_to_clause = await prisma.report_to_clause.delete({
     *   where: {
     *     // ... filter to delete one Report_to_clause
     *   }
     * })
     * 
    **/
    delete<T extends Report_to_clauseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Report_to_clauseDeleteArgs<ExtArgs>>
    ): Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Report_to_clause.
     * @param {Report_to_clauseUpdateArgs} args - Arguments to update one Report_to_clause.
     * @example
     * // Update one Report_to_clause
     * const report_to_clause = await prisma.report_to_clause.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Report_to_clauseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Report_to_clauseUpdateArgs<ExtArgs>>
    ): Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Report_to_clauses.
     * @param {Report_to_clauseDeleteManyArgs} args - Arguments to filter Report_to_clauses to delete.
     * @example
     * // Delete a few Report_to_clauses
     * const { count } = await prisma.report_to_clause.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Report_to_clauseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Report_to_clauseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Report_to_clauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_to_clauseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Report_to_clauses
     * const report_to_clause = await prisma.report_to_clause.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Report_to_clauseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Report_to_clauseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report_to_clause.
     * @param {Report_to_clauseUpsertArgs} args - Arguments to update or create a Report_to_clause.
     * @example
     * // Update or create a Report_to_clause
     * const report_to_clause = await prisma.report_to_clause.upsert({
     *   create: {
     *     // ... data to create a Report_to_clause
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report_to_clause we want to update
     *   }
     * })
    **/
    upsert<T extends Report_to_clauseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Report_to_clauseUpsertArgs<ExtArgs>>
    ): Prisma__Report_to_clauseClient<$Types.GetResult<Report_to_clausePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Report_to_clauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_to_clauseCountArgs} args - Arguments to filter Report_to_clauses to count.
     * @example
     * // Count the number of Report_to_clauses
     * const count = await prisma.report_to_clause.count({
     *   where: {
     *     // ... the filter for the Report_to_clauses we want to count
     *   }
     * })
    **/
    count<T extends Report_to_clauseCountArgs>(
      args?: Subset<T, Report_to_clauseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Report_to_clauseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report_to_clause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_to_clauseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Report_to_clauseAggregateArgs>(args: Subset<T, Report_to_clauseAggregateArgs>): Prisma.PrismaPromise<GetReport_to_clauseAggregateType<T>>

    /**
     * Group by Report_to_clause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_to_clauseGroupByArgs} args - Group by arguments.
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
      T extends Report_to_clauseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Report_to_clauseGroupByArgs['orderBy'] }
        : { orderBy?: Report_to_clauseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Report_to_clauseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReport_to_clauseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Report_to_clause.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Report_to_clauseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    clause<T extends ClauseArgs<ExtArgs> = {}>(args?: Subset<T, ClauseArgs<ExtArgs>>): Prisma__ClauseClient<$Types.GetResult<ClausePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    report<T extends ReportArgs<ExtArgs> = {}>(args?: Subset<T, ReportArgs<ExtArgs>>): Prisma__ReportClient<$Types.GetResult<ReportPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Report_to_clause base type for findUnique actions
   */
  export type Report_to_clauseFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * Filter, which Report_to_clause to fetch.
     */
    where: Report_to_clauseWhereUniqueInput
  }

  /**
   * Report_to_clause findUnique
   */
  export interface Report_to_clauseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Report_to_clauseFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Report_to_clause findUniqueOrThrow
   */
  export type Report_to_clauseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * Filter, which Report_to_clause to fetch.
     */
    where: Report_to_clauseWhereUniqueInput
  }


  /**
   * Report_to_clause base type for findFirst actions
   */
  export type Report_to_clauseFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * Filter, which Report_to_clause to fetch.
     */
    where?: Report_to_clauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Report_to_clauses to fetch.
     */
    orderBy?: Enumerable<Report_to_clauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Report_to_clauses.
     */
    cursor?: Report_to_clauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Report_to_clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Report_to_clauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Report_to_clauses.
     */
    distinct?: Enumerable<Report_to_clauseScalarFieldEnum>
  }

  /**
   * Report_to_clause findFirst
   */
  export interface Report_to_clauseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Report_to_clauseFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Report_to_clause findFirstOrThrow
   */
  export type Report_to_clauseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * Filter, which Report_to_clause to fetch.
     */
    where?: Report_to_clauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Report_to_clauses to fetch.
     */
    orderBy?: Enumerable<Report_to_clauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Report_to_clauses.
     */
    cursor?: Report_to_clauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Report_to_clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Report_to_clauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Report_to_clauses.
     */
    distinct?: Enumerable<Report_to_clauseScalarFieldEnum>
  }


  /**
   * Report_to_clause findMany
   */
  export type Report_to_clauseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * Filter, which Report_to_clauses to fetch.
     */
    where?: Report_to_clauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Report_to_clauses to fetch.
     */
    orderBy?: Enumerable<Report_to_clauseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Report_to_clauses.
     */
    cursor?: Report_to_clauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Report_to_clauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Report_to_clauses.
     */
    skip?: number
    distinct?: Enumerable<Report_to_clauseScalarFieldEnum>
  }


  /**
   * Report_to_clause create
   */
  export type Report_to_clauseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * The data needed to create a Report_to_clause.
     */
    data: XOR<Report_to_clauseCreateInput, Report_to_clauseUncheckedCreateInput>
  }


  /**
   * Report_to_clause createMany
   */
  export type Report_to_clauseCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Report_to_clauses.
     */
    data: Enumerable<Report_to_clauseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Report_to_clause update
   */
  export type Report_to_clauseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * The data needed to update a Report_to_clause.
     */
    data: XOR<Report_to_clauseUpdateInput, Report_to_clauseUncheckedUpdateInput>
    /**
     * Choose, which Report_to_clause to update.
     */
    where: Report_to_clauseWhereUniqueInput
  }


  /**
   * Report_to_clause updateMany
   */
  export type Report_to_clauseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Report_to_clauses.
     */
    data: XOR<Report_to_clauseUpdateManyMutationInput, Report_to_clauseUncheckedUpdateManyInput>
    /**
     * Filter which Report_to_clauses to update
     */
    where?: Report_to_clauseWhereInput
  }


  /**
   * Report_to_clause upsert
   */
  export type Report_to_clauseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * The filter to search for the Report_to_clause to update in case it exists.
     */
    where: Report_to_clauseWhereUniqueInput
    /**
     * In case the Report_to_clause found by the `where` argument doesn't exist, create a new Report_to_clause with this data.
     */
    create: XOR<Report_to_clauseCreateInput, Report_to_clauseUncheckedCreateInput>
    /**
     * In case the Report_to_clause was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Report_to_clauseUpdateInput, Report_to_clauseUncheckedUpdateInput>
  }


  /**
   * Report_to_clause delete
   */
  export type Report_to_clauseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
    /**
     * Filter which Report_to_clause to delete.
     */
    where: Report_to_clauseWhereUniqueInput
  }


  /**
   * Report_to_clause deleteMany
   */
  export type Report_to_clauseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report_to_clauses to delete
     */
    where?: Report_to_clauseWhereInput
  }


  /**
   * Report_to_clause without action
   */
  export type Report_to_clauseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report_to_clause
     */
    select?: Report_to_clauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Report_to_clauseInclude<ExtArgs> | null
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


  export const ClauseScalarFieldEnum: {
    id: 'id',
    label: 'label',
    value: 'value'
  };

  export type ClauseScalarFieldEnum = (typeof ClauseScalarFieldEnum)[keyof typeof ClauseScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    redacted_by: 'redacted_by',
    created_by_id: 'created_by_id',
    meet_date: 'meet_date',
    meet_link: 'meet_link',
    applicant_name: 'applicant_name',
    applicant_type: 'applicant_type',
    project_status: 'project_status',
    project_cadastral_ref: 'project_cadastral_ref',
    project_land_contact: 'project_land_contact',
    project_space_type: 'project_space_type',
    project_nature: 'project_nature',
    project_description: 'project_description',
    decision: 'decision',
    decision_comment: 'decision_comment',
    contacts: 'contacts',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const Report_to_clauseScalarFieldEnum: {
    id: 'id',
    report_id: 'report_id',
    clause_id: 'clause_id'
  };

  export type Report_to_clauseScalarFieldEnum = (typeof Report_to_clauseScalarFieldEnum)[keyof typeof Report_to_clauseScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type ClauseWhereInput = {
    AND?: Enumerable<ClauseWhereInput>
    OR?: Enumerable<ClauseWhereInput>
    NOT?: Enumerable<ClauseWhereInput>
    id?: StringFilter | string
    label?: StringFilter | string
    value?: StringFilter | string
    report_to_clause?: Report_to_clauseListRelationFilter
  }

  export type ClauseOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    report_to_clause?: Report_to_clauseOrderByRelationAggregateInput
  }

  export type ClauseWhereUniqueInput = {
    id?: string
  }

  export type ClauseOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    _count?: ClauseCountOrderByAggregateInput
    _max?: ClauseMaxOrderByAggregateInput
    _min?: ClauseMinOrderByAggregateInput
  }

  export type ClauseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClauseScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClauseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClauseScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
    value?: StringWithAggregatesFilter | string
  }

  export type ReportWhereInput = {
    AND?: Enumerable<ReportWhereInput>
    OR?: Enumerable<ReportWhereInput>
    NOT?: Enumerable<ReportWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    redacted_by?: StringFilter | string
    created_by_id?: StringFilter | string
    meet_date?: DateTimeFilter | Date | string
    meet_link?: StringFilter | string
    applicant_name?: StringFilter | string
    applicant_type?: StringFilter | string
    project_status?: StringFilter | string
    project_cadastral_ref?: StringFilter | string
    project_land_contact?: StringFilter | string
    project_space_type?: StringFilter | string
    project_nature?: StringFilter | string
    project_description?: StringFilter | string
    decision?: StringFilter | string
    decision_comment?: StringFilter | string
    contacts?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    report_to_clause?: Report_to_clauseListRelationFilter
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    redacted_by?: SortOrder
    created_by_id?: SortOrder
    meet_date?: SortOrder
    meet_link?: SortOrder
    applicant_name?: SortOrder
    applicant_type?: SortOrder
    project_status?: SortOrder
    project_cadastral_ref?: SortOrder
    project_land_contact?: SortOrder
    project_space_type?: SortOrder
    project_nature?: SortOrder
    project_description?: SortOrder
    decision?: SortOrder
    decision_comment?: SortOrder
    contacts?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    report_to_clause?: Report_to_clauseOrderByRelationAggregateInput
  }

  export type ReportWhereUniqueInput = {
    id?: string
  }

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    redacted_by?: SortOrder
    created_by_id?: SortOrder
    meet_date?: SortOrder
    meet_link?: SortOrder
    applicant_name?: SortOrder
    applicant_type?: SortOrder
    project_status?: SortOrder
    project_cadastral_ref?: SortOrder
    project_land_contact?: SortOrder
    project_space_type?: SortOrder
    project_nature?: SortOrder
    project_description?: SortOrder
    decision?: SortOrder
    decision_comment?: SortOrder
    contacts?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReportScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReportScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReportScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    redacted_by?: StringWithAggregatesFilter | string
    created_by_id?: StringWithAggregatesFilter | string
    meet_date?: DateTimeWithAggregatesFilter | Date | string
    meet_link?: StringWithAggregatesFilter | string
    applicant_name?: StringWithAggregatesFilter | string
    applicant_type?: StringWithAggregatesFilter | string
    project_status?: StringWithAggregatesFilter | string
    project_cadastral_ref?: StringWithAggregatesFilter | string
    project_land_contact?: StringWithAggregatesFilter | string
    project_space_type?: StringWithAggregatesFilter | string
    project_nature?: StringWithAggregatesFilter | string
    project_description?: StringWithAggregatesFilter | string
    decision?: StringWithAggregatesFilter | string
    decision_comment?: StringWithAggregatesFilter | string
    contacts?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type Report_to_clauseWhereInput = {
    AND?: Enumerable<Report_to_clauseWhereInput>
    OR?: Enumerable<Report_to_clauseWhereInput>
    NOT?: Enumerable<Report_to_clauseWhereInput>
    id?: StringFilter | string
    report_id?: StringFilter | string
    clause_id?: StringFilter | string
    clause?: XOR<ClauseRelationFilter, ClauseWhereInput>
    report?: XOR<ReportRelationFilter, ReportWhereInput>
  }

  export type Report_to_clauseOrderByWithRelationInput = {
    id?: SortOrder
    report_id?: SortOrder
    clause_id?: SortOrder
    clause?: ClauseOrderByWithRelationInput
    report?: ReportOrderByWithRelationInput
  }

  export type Report_to_clauseWhereUniqueInput = {
    id?: string
  }

  export type Report_to_clauseOrderByWithAggregationInput = {
    id?: SortOrder
    report_id?: SortOrder
    clause_id?: SortOrder
    _count?: Report_to_clauseCountOrderByAggregateInput
    _max?: Report_to_clauseMaxOrderByAggregateInput
    _min?: Report_to_clauseMinOrderByAggregateInput
  }

  export type Report_to_clauseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Report_to_clauseScalarWhereWithAggregatesInput>
    OR?: Enumerable<Report_to_clauseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Report_to_clauseScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    report_id?: StringWithAggregatesFilter | string
    clause_id?: StringWithAggregatesFilter | string
  }

  export type ClauseCreateInput = {
    id: string
    label: string
    value: string
    report_to_clause?: Report_to_clauseCreateNestedManyWithoutClauseInput
  }

  export type ClauseUncheckedCreateInput = {
    id: string
    label: string
    value: string
    report_to_clause?: Report_to_clauseUncheckedCreateNestedManyWithoutClauseInput
  }

  export type ClauseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    report_to_clause?: Report_to_clauseUpdateManyWithoutClauseNestedInput
  }

  export type ClauseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    report_to_clause?: Report_to_clauseUncheckedUpdateManyWithoutClauseNestedInput
  }

  export type ClauseCreateManyInput = {
    id: string
    label: string
    value: string
  }

  export type ClauseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ClauseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ReportCreateInput = {
    id: string
    title: string
    redacted_by: string
    created_by_id: string
    meet_date: Date | string
    meet_link: string
    applicant_name: string
    applicant_type: string
    project_status: string
    project_cadastral_ref: string
    project_land_contact: string
    project_space_type: string
    project_nature: string
    project_description: string
    decision: string
    decision_comment: string
    contacts: string
    created_at: Date | string
    updated_at: Date | string
    report_to_clause?: Report_to_clauseCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id: string
    title: string
    redacted_by: string
    created_by_id: string
    meet_date: Date | string
    meet_link: string
    applicant_name: string
    applicant_type: string
    project_status: string
    project_cadastral_ref: string
    project_land_contact: string
    project_space_type: string
    project_nature: string
    project_description: string
    decision: string
    decision_comment: string
    contacts: string
    created_at: Date | string
    updated_at: Date | string
    report_to_clause?: Report_to_clauseUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    redacted_by?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    meet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    meet_link?: StringFieldUpdateOperationsInput | string
    applicant_name?: StringFieldUpdateOperationsInput | string
    applicant_type?: StringFieldUpdateOperationsInput | string
    project_status?: StringFieldUpdateOperationsInput | string
    project_cadastral_ref?: StringFieldUpdateOperationsInput | string
    project_land_contact?: StringFieldUpdateOperationsInput | string
    project_space_type?: StringFieldUpdateOperationsInput | string
    project_nature?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    decision_comment?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    report_to_clause?: Report_to_clauseUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    redacted_by?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    meet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    meet_link?: StringFieldUpdateOperationsInput | string
    applicant_name?: StringFieldUpdateOperationsInput | string
    applicant_type?: StringFieldUpdateOperationsInput | string
    project_status?: StringFieldUpdateOperationsInput | string
    project_cadastral_ref?: StringFieldUpdateOperationsInput | string
    project_land_contact?: StringFieldUpdateOperationsInput | string
    project_space_type?: StringFieldUpdateOperationsInput | string
    project_nature?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    decision_comment?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    report_to_clause?: Report_to_clauseUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id: string
    title: string
    redacted_by: string
    created_by_id: string
    meet_date: Date | string
    meet_link: string
    applicant_name: string
    applicant_type: string
    project_status: string
    project_cadastral_ref: string
    project_land_contact: string
    project_space_type: string
    project_nature: string
    project_description: string
    decision: string
    decision_comment: string
    contacts: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    redacted_by?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    meet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    meet_link?: StringFieldUpdateOperationsInput | string
    applicant_name?: StringFieldUpdateOperationsInput | string
    applicant_type?: StringFieldUpdateOperationsInput | string
    project_status?: StringFieldUpdateOperationsInput | string
    project_cadastral_ref?: StringFieldUpdateOperationsInput | string
    project_land_contact?: StringFieldUpdateOperationsInput | string
    project_space_type?: StringFieldUpdateOperationsInput | string
    project_nature?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    decision_comment?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    redacted_by?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    meet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    meet_link?: StringFieldUpdateOperationsInput | string
    applicant_name?: StringFieldUpdateOperationsInput | string
    applicant_type?: StringFieldUpdateOperationsInput | string
    project_status?: StringFieldUpdateOperationsInput | string
    project_cadastral_ref?: StringFieldUpdateOperationsInput | string
    project_land_contact?: StringFieldUpdateOperationsInput | string
    project_space_type?: StringFieldUpdateOperationsInput | string
    project_nature?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    decision_comment?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Report_to_clauseCreateInput = {
    id: string
    clause: ClauseCreateNestedOneWithoutReport_to_clauseInput
    report: ReportCreateNestedOneWithoutReport_to_clauseInput
  }

  export type Report_to_clauseUncheckedCreateInput = {
    id: string
    report_id: string
    clause_id: string
  }

  export type Report_to_clauseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clause?: ClauseUpdateOneRequiredWithoutReport_to_clauseNestedInput
    report?: ReportUpdateOneRequiredWithoutReport_to_clauseNestedInput
  }

  export type Report_to_clauseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_id?: StringFieldUpdateOperationsInput | string
    clause_id?: StringFieldUpdateOperationsInput | string
  }

  export type Report_to_clauseCreateManyInput = {
    id: string
    report_id: string
    clause_id: string
  }

  export type Report_to_clauseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type Report_to_clauseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_id?: StringFieldUpdateOperationsInput | string
    clause_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type Report_to_clauseListRelationFilter = {
    every?: Report_to_clauseWhereInput
    some?: Report_to_clauseWhereInput
    none?: Report_to_clauseWhereInput
  }

  export type Report_to_clauseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClauseCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
  }

  export type ClauseMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
  }

  export type ClauseMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    redacted_by?: SortOrder
    created_by_id?: SortOrder
    meet_date?: SortOrder
    meet_link?: SortOrder
    applicant_name?: SortOrder
    applicant_type?: SortOrder
    project_status?: SortOrder
    project_cadastral_ref?: SortOrder
    project_land_contact?: SortOrder
    project_space_type?: SortOrder
    project_nature?: SortOrder
    project_description?: SortOrder
    decision?: SortOrder
    decision_comment?: SortOrder
    contacts?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    redacted_by?: SortOrder
    created_by_id?: SortOrder
    meet_date?: SortOrder
    meet_link?: SortOrder
    applicant_name?: SortOrder
    applicant_type?: SortOrder
    project_status?: SortOrder
    project_cadastral_ref?: SortOrder
    project_land_contact?: SortOrder
    project_space_type?: SortOrder
    project_nature?: SortOrder
    project_description?: SortOrder
    decision?: SortOrder
    decision_comment?: SortOrder
    contacts?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    redacted_by?: SortOrder
    created_by_id?: SortOrder
    meet_date?: SortOrder
    meet_link?: SortOrder
    applicant_name?: SortOrder
    applicant_type?: SortOrder
    project_status?: SortOrder
    project_cadastral_ref?: SortOrder
    project_land_contact?: SortOrder
    project_space_type?: SortOrder
    project_nature?: SortOrder
    project_description?: SortOrder
    decision?: SortOrder
    decision_comment?: SortOrder
    contacts?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ClauseRelationFilter = {
    is?: ClauseWhereInput | null
    isNot?: ClauseWhereInput | null
  }

  export type ReportRelationFilter = {
    is?: ReportWhereInput | null
    isNot?: ReportWhereInput | null
  }

  export type Report_to_clauseCountOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    clause_id?: SortOrder
  }

  export type Report_to_clauseMaxOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    clause_id?: SortOrder
  }

  export type Report_to_clauseMinOrderByAggregateInput = {
    id?: SortOrder
    report_id?: SortOrder
    clause_id?: SortOrder
  }

  export type Report_to_clauseCreateNestedManyWithoutClauseInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutClauseInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutClauseInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutClauseInput>
    createMany?: Report_to_clauseCreateManyClauseInputEnvelope
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
  }

  export type Report_to_clauseUncheckedCreateNestedManyWithoutClauseInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutClauseInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutClauseInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutClauseInput>
    createMany?: Report_to_clauseCreateManyClauseInputEnvelope
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Report_to_clauseUpdateManyWithoutClauseNestedInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutClauseInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutClauseInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutClauseInput>
    upsert?: Enumerable<Report_to_clauseUpsertWithWhereUniqueWithoutClauseInput>
    createMany?: Report_to_clauseCreateManyClauseInputEnvelope
    set?: Enumerable<Report_to_clauseWhereUniqueInput>
    disconnect?: Enumerable<Report_to_clauseWhereUniqueInput>
    delete?: Enumerable<Report_to_clauseWhereUniqueInput>
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
    update?: Enumerable<Report_to_clauseUpdateWithWhereUniqueWithoutClauseInput>
    updateMany?: Enumerable<Report_to_clauseUpdateManyWithWhereWithoutClauseInput>
    deleteMany?: Enumerable<Report_to_clauseScalarWhereInput>
  }

  export type Report_to_clauseUncheckedUpdateManyWithoutClauseNestedInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutClauseInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutClauseInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutClauseInput>
    upsert?: Enumerable<Report_to_clauseUpsertWithWhereUniqueWithoutClauseInput>
    createMany?: Report_to_clauseCreateManyClauseInputEnvelope
    set?: Enumerable<Report_to_clauseWhereUniqueInput>
    disconnect?: Enumerable<Report_to_clauseWhereUniqueInput>
    delete?: Enumerable<Report_to_clauseWhereUniqueInput>
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
    update?: Enumerable<Report_to_clauseUpdateWithWhereUniqueWithoutClauseInput>
    updateMany?: Enumerable<Report_to_clauseUpdateManyWithWhereWithoutClauseInput>
    deleteMany?: Enumerable<Report_to_clauseScalarWhereInput>
  }

  export type Report_to_clauseCreateNestedManyWithoutReportInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutReportInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutReportInput>
    createMany?: Report_to_clauseCreateManyReportInputEnvelope
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
  }

  export type Report_to_clauseUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutReportInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutReportInput>
    createMany?: Report_to_clauseCreateManyReportInputEnvelope
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Report_to_clauseUpdateManyWithoutReportNestedInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutReportInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutReportInput>
    upsert?: Enumerable<Report_to_clauseUpsertWithWhereUniqueWithoutReportInput>
    createMany?: Report_to_clauseCreateManyReportInputEnvelope
    set?: Enumerable<Report_to_clauseWhereUniqueInput>
    disconnect?: Enumerable<Report_to_clauseWhereUniqueInput>
    delete?: Enumerable<Report_to_clauseWhereUniqueInput>
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
    update?: Enumerable<Report_to_clauseUpdateWithWhereUniqueWithoutReportInput>
    updateMany?: Enumerable<Report_to_clauseUpdateManyWithWhereWithoutReportInput>
    deleteMany?: Enumerable<Report_to_clauseScalarWhereInput>
  }

  export type Report_to_clauseUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<Enumerable<Report_to_clauseCreateWithoutReportInput>, Enumerable<Report_to_clauseUncheckedCreateWithoutReportInput>>
    connectOrCreate?: Enumerable<Report_to_clauseCreateOrConnectWithoutReportInput>
    upsert?: Enumerable<Report_to_clauseUpsertWithWhereUniqueWithoutReportInput>
    createMany?: Report_to_clauseCreateManyReportInputEnvelope
    set?: Enumerable<Report_to_clauseWhereUniqueInput>
    disconnect?: Enumerable<Report_to_clauseWhereUniqueInput>
    delete?: Enumerable<Report_to_clauseWhereUniqueInput>
    connect?: Enumerable<Report_to_clauseWhereUniqueInput>
    update?: Enumerable<Report_to_clauseUpdateWithWhereUniqueWithoutReportInput>
    updateMany?: Enumerable<Report_to_clauseUpdateManyWithWhereWithoutReportInput>
    deleteMany?: Enumerable<Report_to_clauseScalarWhereInput>
  }

  export type ClauseCreateNestedOneWithoutReport_to_clauseInput = {
    create?: XOR<ClauseCreateWithoutReport_to_clauseInput, ClauseUncheckedCreateWithoutReport_to_clauseInput>
    connectOrCreate?: ClauseCreateOrConnectWithoutReport_to_clauseInput
    connect?: ClauseWhereUniqueInput
  }

  export type ReportCreateNestedOneWithoutReport_to_clauseInput = {
    create?: XOR<ReportCreateWithoutReport_to_clauseInput, ReportUncheckedCreateWithoutReport_to_clauseInput>
    connectOrCreate?: ReportCreateOrConnectWithoutReport_to_clauseInput
    connect?: ReportWhereUniqueInput
  }

  export type ClauseUpdateOneRequiredWithoutReport_to_clauseNestedInput = {
    create?: XOR<ClauseCreateWithoutReport_to_clauseInput, ClauseUncheckedCreateWithoutReport_to_clauseInput>
    connectOrCreate?: ClauseCreateOrConnectWithoutReport_to_clauseInput
    upsert?: ClauseUpsertWithoutReport_to_clauseInput
    connect?: ClauseWhereUniqueInput
    update?: XOR<ClauseUpdateWithoutReport_to_clauseInput, ClauseUncheckedUpdateWithoutReport_to_clauseInput>
  }

  export type ReportUpdateOneRequiredWithoutReport_to_clauseNestedInput = {
    create?: XOR<ReportCreateWithoutReport_to_clauseInput, ReportUncheckedCreateWithoutReport_to_clauseInput>
    connectOrCreate?: ReportCreateOrConnectWithoutReport_to_clauseInput
    upsert?: ReportUpsertWithoutReport_to_clauseInput
    connect?: ReportWhereUniqueInput
    update?: XOR<ReportUpdateWithoutReport_to_clauseInput, ReportUncheckedUpdateWithoutReport_to_clauseInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type Report_to_clauseCreateWithoutClauseInput = {
    id: string
    report: ReportCreateNestedOneWithoutReport_to_clauseInput
  }

  export type Report_to_clauseUncheckedCreateWithoutClauseInput = {
    id: string
    report_id: string
  }

  export type Report_to_clauseCreateOrConnectWithoutClauseInput = {
    where: Report_to_clauseWhereUniqueInput
    create: XOR<Report_to_clauseCreateWithoutClauseInput, Report_to_clauseUncheckedCreateWithoutClauseInput>
  }

  export type Report_to_clauseCreateManyClauseInputEnvelope = {
    data: Enumerable<Report_to_clauseCreateManyClauseInput>
    skipDuplicates?: boolean
  }

  export type Report_to_clauseUpsertWithWhereUniqueWithoutClauseInput = {
    where: Report_to_clauseWhereUniqueInput
    update: XOR<Report_to_clauseUpdateWithoutClauseInput, Report_to_clauseUncheckedUpdateWithoutClauseInput>
    create: XOR<Report_to_clauseCreateWithoutClauseInput, Report_to_clauseUncheckedCreateWithoutClauseInput>
  }

  export type Report_to_clauseUpdateWithWhereUniqueWithoutClauseInput = {
    where: Report_to_clauseWhereUniqueInput
    data: XOR<Report_to_clauseUpdateWithoutClauseInput, Report_to_clauseUncheckedUpdateWithoutClauseInput>
  }

  export type Report_to_clauseUpdateManyWithWhereWithoutClauseInput = {
    where: Report_to_clauseScalarWhereInput
    data: XOR<Report_to_clauseUpdateManyMutationInput, Report_to_clauseUncheckedUpdateManyWithoutReport_to_clauseInput>
  }

  export type Report_to_clauseScalarWhereInput = {
    AND?: Enumerable<Report_to_clauseScalarWhereInput>
    OR?: Enumerable<Report_to_clauseScalarWhereInput>
    NOT?: Enumerable<Report_to_clauseScalarWhereInput>
    id?: StringFilter | string
    report_id?: StringFilter | string
    clause_id?: StringFilter | string
  }

  export type Report_to_clauseCreateWithoutReportInput = {
    id: string
    clause: ClauseCreateNestedOneWithoutReport_to_clauseInput
  }

  export type Report_to_clauseUncheckedCreateWithoutReportInput = {
    id: string
    clause_id: string
  }

  export type Report_to_clauseCreateOrConnectWithoutReportInput = {
    where: Report_to_clauseWhereUniqueInput
    create: XOR<Report_to_clauseCreateWithoutReportInput, Report_to_clauseUncheckedCreateWithoutReportInput>
  }

  export type Report_to_clauseCreateManyReportInputEnvelope = {
    data: Enumerable<Report_to_clauseCreateManyReportInput>
    skipDuplicates?: boolean
  }

  export type Report_to_clauseUpsertWithWhereUniqueWithoutReportInput = {
    where: Report_to_clauseWhereUniqueInput
    update: XOR<Report_to_clauseUpdateWithoutReportInput, Report_to_clauseUncheckedUpdateWithoutReportInput>
    create: XOR<Report_to_clauseCreateWithoutReportInput, Report_to_clauseUncheckedCreateWithoutReportInput>
  }

  export type Report_to_clauseUpdateWithWhereUniqueWithoutReportInput = {
    where: Report_to_clauseWhereUniqueInput
    data: XOR<Report_to_clauseUpdateWithoutReportInput, Report_to_clauseUncheckedUpdateWithoutReportInput>
  }

  export type Report_to_clauseUpdateManyWithWhereWithoutReportInput = {
    where: Report_to_clauseScalarWhereInput
    data: XOR<Report_to_clauseUpdateManyMutationInput, Report_to_clauseUncheckedUpdateManyWithoutReport_to_clauseInput>
  }

  export type ClauseCreateWithoutReport_to_clauseInput = {
    id: string
    label: string
    value: string
  }

  export type ClauseUncheckedCreateWithoutReport_to_clauseInput = {
    id: string
    label: string
    value: string
  }

  export type ClauseCreateOrConnectWithoutReport_to_clauseInput = {
    where: ClauseWhereUniqueInput
    create: XOR<ClauseCreateWithoutReport_to_clauseInput, ClauseUncheckedCreateWithoutReport_to_clauseInput>
  }

  export type ReportCreateWithoutReport_to_clauseInput = {
    id: string
    title: string
    redacted_by: string
    created_by_id: string
    meet_date: Date | string
    meet_link: string
    applicant_name: string
    applicant_type: string
    project_status: string
    project_cadastral_ref: string
    project_land_contact: string
    project_space_type: string
    project_nature: string
    project_description: string
    decision: string
    decision_comment: string
    contacts: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type ReportUncheckedCreateWithoutReport_to_clauseInput = {
    id: string
    title: string
    redacted_by: string
    created_by_id: string
    meet_date: Date | string
    meet_link: string
    applicant_name: string
    applicant_type: string
    project_status: string
    project_cadastral_ref: string
    project_land_contact: string
    project_space_type: string
    project_nature: string
    project_description: string
    decision: string
    decision_comment: string
    contacts: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type ReportCreateOrConnectWithoutReport_to_clauseInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReport_to_clauseInput, ReportUncheckedCreateWithoutReport_to_clauseInput>
  }

  export type ClauseUpsertWithoutReport_to_clauseInput = {
    update: XOR<ClauseUpdateWithoutReport_to_clauseInput, ClauseUncheckedUpdateWithoutReport_to_clauseInput>
    create: XOR<ClauseCreateWithoutReport_to_clauseInput, ClauseUncheckedCreateWithoutReport_to_clauseInput>
  }

  export type ClauseUpdateWithoutReport_to_clauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ClauseUncheckedUpdateWithoutReport_to_clauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ReportUpsertWithoutReport_to_clauseInput = {
    update: XOR<ReportUpdateWithoutReport_to_clauseInput, ReportUncheckedUpdateWithoutReport_to_clauseInput>
    create: XOR<ReportCreateWithoutReport_to_clauseInput, ReportUncheckedCreateWithoutReport_to_clauseInput>
  }

  export type ReportUpdateWithoutReport_to_clauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    redacted_by?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    meet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    meet_link?: StringFieldUpdateOperationsInput | string
    applicant_name?: StringFieldUpdateOperationsInput | string
    applicant_type?: StringFieldUpdateOperationsInput | string
    project_status?: StringFieldUpdateOperationsInput | string
    project_cadastral_ref?: StringFieldUpdateOperationsInput | string
    project_land_contact?: StringFieldUpdateOperationsInput | string
    project_space_type?: StringFieldUpdateOperationsInput | string
    project_nature?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    decision_comment?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutReport_to_clauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    redacted_by?: StringFieldUpdateOperationsInput | string
    created_by_id?: StringFieldUpdateOperationsInput | string
    meet_date?: DateTimeFieldUpdateOperationsInput | Date | string
    meet_link?: StringFieldUpdateOperationsInput | string
    applicant_name?: StringFieldUpdateOperationsInput | string
    applicant_type?: StringFieldUpdateOperationsInput | string
    project_status?: StringFieldUpdateOperationsInput | string
    project_cadastral_ref?: StringFieldUpdateOperationsInput | string
    project_land_contact?: StringFieldUpdateOperationsInput | string
    project_space_type?: StringFieldUpdateOperationsInput | string
    project_nature?: StringFieldUpdateOperationsInput | string
    project_description?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    decision_comment?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Report_to_clauseCreateManyClauseInput = {
    id: string
    report_id: string
  }

  export type Report_to_clauseUpdateWithoutClauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    report?: ReportUpdateOneRequiredWithoutReport_to_clauseNestedInput
  }

  export type Report_to_clauseUncheckedUpdateWithoutClauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_id?: StringFieldUpdateOperationsInput | string
  }

  export type Report_to_clauseUncheckedUpdateManyWithoutReport_to_clauseInput = {
    id?: StringFieldUpdateOperationsInput | string
    report_id?: StringFieldUpdateOperationsInput | string
  }

  export type Report_to_clauseCreateManyReportInput = {
    id: string
    clause_id: string
  }

  export type Report_to_clauseUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    clause?: ClauseUpdateOneRequiredWithoutReport_to_clauseNestedInput
  }

  export type Report_to_clauseUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    clause_id?: StringFieldUpdateOperationsInput | string
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