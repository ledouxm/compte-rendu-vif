import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const ClauseScalarFieldEnumSchema = z.enum(['id','label','value']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const ReportScalarFieldEnumSchema = z.enum(['id','title','redacted_by','created_by_id','meet_date','meet_link','applicant_name','applicant_type','project_status','project_cadastral_ref','project_land_contact','project_space_type','project_nature','project_description','decision','decision_comment','contacts','created_at','updated_at']);

export const Report_to_clauseScalarFieldEnumSchema = z.enum(['id','report_id','clause_id']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CLAUSE SCHEMA
/////////////////////////////////////////

export const ClauseSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
})

export type Clause = z.infer<typeof ClauseSchema>

/////////////////////////////////////////
// REPORT SCHEMA
/////////////////////////////////////////

export const ReportSchema = z.object({
  id: z.string(),
  title: z.string(),
  redacted_by: z.string(),
  created_by_id: z.string(),
  meet_date: z.coerce.date(),
  meet_link: z.string(),
  applicant_name: z.string(),
  applicant_type: z.string(),
  project_status: z.string(),
  project_cadastral_ref: z.string(),
  project_land_contact: z.string(),
  project_space_type: z.string(),
  project_nature: z.string(),
  project_description: z.string(),
  decision: z.string(),
  decision_comment: z.string(),
  contacts: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type Report = z.infer<typeof ReportSchema>

/////////////////////////////////////////
// REPORT TO CLAUSE SCHEMA
/////////////////////////////////////////

export const Report_to_clauseSchema = z.object({
  id: z.string(),
  report_id: z.string(),
  clause_id: z.string(),
})

export type Report_to_clause = z.infer<typeof Report_to_clauseSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CLAUSE
//------------------------------------------------------

export const ClauseIncludeSchema: z.ZodType<Prisma.ClauseInclude> = z.object({
  report_to_clause: z.union([z.boolean(),z.lazy(() => Report_to_clauseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClauseArgsSchema: z.ZodType<Prisma.ClauseArgs> = z.object({
  select: z.lazy(() => ClauseSelectSchema).optional(),
  include: z.lazy(() => ClauseIncludeSchema).optional(),
}).strict();

export const ClauseCountOutputTypeArgsSchema: z.ZodType<Prisma.ClauseCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ClauseCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ClauseCountOutputTypeSelectSchema: z.ZodType<Prisma.ClauseCountOutputTypeSelect> = z.object({
  report_to_clause: z.boolean().optional(),
}).strict();

export const ClauseSelectSchema: z.ZodType<Prisma.ClauseSelect> = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  value: z.boolean().optional(),
  report_to_clause: z.union([z.boolean(),z.lazy(() => Report_to_clauseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClauseCountOutputTypeArgsSchema)]).optional(),
}).strict()

// REPORT
//------------------------------------------------------

export const ReportIncludeSchema: z.ZodType<Prisma.ReportInclude> = z.object({
  report_to_clause: z.union([z.boolean(),z.lazy(() => Report_to_clauseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReportCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ReportArgsSchema: z.ZodType<Prisma.ReportArgs> = z.object({
  select: z.lazy(() => ReportSelectSchema).optional(),
  include: z.lazy(() => ReportIncludeSchema).optional(),
}).strict();

export const ReportCountOutputTypeArgsSchema: z.ZodType<Prisma.ReportCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ReportCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ReportCountOutputTypeSelectSchema: z.ZodType<Prisma.ReportCountOutputTypeSelect> = z.object({
  report_to_clause: z.boolean().optional(),
}).strict();

export const ReportSelectSchema: z.ZodType<Prisma.ReportSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  redacted_by: z.boolean().optional(),
  created_by_id: z.boolean().optional(),
  meet_date: z.boolean().optional(),
  meet_link: z.boolean().optional(),
  applicant_name: z.boolean().optional(),
  applicant_type: z.boolean().optional(),
  project_status: z.boolean().optional(),
  project_cadastral_ref: z.boolean().optional(),
  project_land_contact: z.boolean().optional(),
  project_space_type: z.boolean().optional(),
  project_nature: z.boolean().optional(),
  project_description: z.boolean().optional(),
  decision: z.boolean().optional(),
  decision_comment: z.boolean().optional(),
  contacts: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  report_to_clause: z.union([z.boolean(),z.lazy(() => Report_to_clauseFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ReportCountOutputTypeArgsSchema)]).optional(),
}).strict()

// REPORT TO CLAUSE
//------------------------------------------------------

export const Report_to_clauseIncludeSchema: z.ZodType<Prisma.Report_to_clauseInclude> = z.object({
  clause: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()

export const Report_to_clauseArgsSchema: z.ZodType<Prisma.Report_to_clauseArgs> = z.object({
  select: z.lazy(() => Report_to_clauseSelectSchema).optional(),
  include: z.lazy(() => Report_to_clauseIncludeSchema).optional(),
}).strict();

export const Report_to_clauseSelectSchema: z.ZodType<Prisma.Report_to_clauseSelect> = z.object({
  id: z.boolean().optional(),
  report_id: z.boolean().optional(),
  clause_id: z.boolean().optional(),
  clause: z.union([z.boolean(),z.lazy(() => ClauseArgsSchema)]).optional(),
  report: z.union([z.boolean(),z.lazy(() => ReportArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ClauseWhereInputSchema: z.ZodType<Prisma.ClauseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClauseWhereInputSchema),z.lazy(() => ClauseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseWhereInputSchema),z.lazy(() => ClauseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseListRelationFilterSchema).optional()
}).strict();

export const ClauseOrderByWithRelationInputSchema: z.ZodType<Prisma.ClauseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ClauseWhereUniqueInputSchema: z.ZodType<Prisma.ClauseWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ClauseOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClauseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClauseCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClauseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClauseMinOrderByAggregateInputSchema).optional()
}).strict();

export const ClauseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClauseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema),z.lazy(() => ClauseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ReportWhereInputSchema: z.ZodType<Prisma.ReportWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReportWhereInputSchema),z.lazy(() => ReportWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportWhereInputSchema),z.lazy(() => ReportWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  redacted_by: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_by_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  meet_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  meet_link: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  applicant_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  applicant_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  project_status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  project_cadastral_ref: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  project_land_contact: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  project_space_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  project_nature: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  project_description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  decision: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  decision_comment: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contacts: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseListRelationFilterSchema).optional()
}).strict();

export const ReportOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  redacted_by: z.lazy(() => SortOrderSchema).optional(),
  created_by_id: z.lazy(() => SortOrderSchema).optional(),
  meet_date: z.lazy(() => SortOrderSchema).optional(),
  meet_link: z.lazy(() => SortOrderSchema).optional(),
  applicant_name: z.lazy(() => SortOrderSchema).optional(),
  applicant_type: z.lazy(() => SortOrderSchema).optional(),
  project_status: z.lazy(() => SortOrderSchema).optional(),
  project_cadastral_ref: z.lazy(() => SortOrderSchema).optional(),
  project_land_contact: z.lazy(() => SortOrderSchema).optional(),
  project_space_type: z.lazy(() => SortOrderSchema).optional(),
  project_nature: z.lazy(() => SortOrderSchema).optional(),
  project_description: z.lazy(() => SortOrderSchema).optional(),
  decision: z.lazy(() => SortOrderSchema).optional(),
  decision_comment: z.lazy(() => SortOrderSchema).optional(),
  contacts: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ReportWhereUniqueInputSchema: z.ZodType<Prisma.ReportWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ReportOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReportOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  redacted_by: z.lazy(() => SortOrderSchema).optional(),
  created_by_id: z.lazy(() => SortOrderSchema).optional(),
  meet_date: z.lazy(() => SortOrderSchema).optional(),
  meet_link: z.lazy(() => SortOrderSchema).optional(),
  applicant_name: z.lazy(() => SortOrderSchema).optional(),
  applicant_type: z.lazy(() => SortOrderSchema).optional(),
  project_status: z.lazy(() => SortOrderSchema).optional(),
  project_cadastral_ref: z.lazy(() => SortOrderSchema).optional(),
  project_land_contact: z.lazy(() => SortOrderSchema).optional(),
  project_space_type: z.lazy(() => SortOrderSchema).optional(),
  project_nature: z.lazy(() => SortOrderSchema).optional(),
  project_description: z.lazy(() => SortOrderSchema).optional(),
  decision: z.lazy(() => SortOrderSchema).optional(),
  decision_comment: z.lazy(() => SortOrderSchema).optional(),
  contacts: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReportCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReportMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReportMinOrderByAggregateInputSchema).optional()
}).strict();

export const ReportScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReportScalarWhereWithAggregatesInputSchema),z.lazy(() => ReportScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportScalarWhereWithAggregatesInputSchema),z.lazy(() => ReportScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  redacted_by: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_by_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  meet_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  meet_link: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  applicant_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  applicant_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  project_status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  project_cadastral_ref: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  project_land_contact: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  project_space_type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  project_nature: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  project_description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  decision: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  decision_comment: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  contacts: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updated_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Report_to_clauseWhereInputSchema: z.ZodType<Prisma.Report_to_clauseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Report_to_clauseWhereInputSchema),z.lazy(() => Report_to_clauseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Report_to_clauseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Report_to_clauseWhereInputSchema),z.lazy(() => Report_to_clauseWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  report_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clause_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clause: z.union([ z.lazy(() => ClauseRelationFilterSchema),z.lazy(() => ClauseWhereInputSchema) ]).optional(),
  report: z.union([ z.lazy(() => ReportRelationFilterSchema),z.lazy(() => ReportWhereInputSchema) ]).optional(),
}).strict();

export const Report_to_clauseOrderByWithRelationInputSchema: z.ZodType<Prisma.Report_to_clauseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  report_id: z.lazy(() => SortOrderSchema).optional(),
  clause_id: z.lazy(() => SortOrderSchema).optional(),
  clause: z.lazy(() => ClauseOrderByWithRelationInputSchema).optional(),
  report: z.lazy(() => ReportOrderByWithRelationInputSchema).optional()
}).strict();

export const Report_to_clauseWhereUniqueInputSchema: z.ZodType<Prisma.Report_to_clauseWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const Report_to_clauseOrderByWithAggregationInputSchema: z.ZodType<Prisma.Report_to_clauseOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  report_id: z.lazy(() => SortOrderSchema).optional(),
  clause_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Report_to_clauseCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Report_to_clauseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Report_to_clauseMinOrderByAggregateInputSchema).optional()
}).strict();

export const Report_to_clauseScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Report_to_clauseScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Report_to_clauseScalarWhereWithAggregatesInputSchema),z.lazy(() => Report_to_clauseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Report_to_clauseScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Report_to_clauseScalarWhereWithAggregatesInputSchema),z.lazy(() => Report_to_clauseScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  report_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  clause_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ClauseCreateInputSchema: z.ZodType<Prisma.ClauseCreateInput> = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  report_to_clause: z.lazy(() => Report_to_clauseCreateNestedManyWithoutClauseInputSchema).optional()
}).strict();

export const ClauseUncheckedCreateInputSchema: z.ZodType<Prisma.ClauseUncheckedCreateInput> = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  report_to_clause: z.lazy(() => Report_to_clauseUncheckedCreateNestedManyWithoutClauseInputSchema).optional()
}).strict();

export const ClauseUpdateInputSchema: z.ZodType<Prisma.ClauseUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseUpdateManyWithoutClauseNestedInputSchema).optional()
}).strict();

export const ClauseUncheckedUpdateInputSchema: z.ZodType<Prisma.ClauseUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseUncheckedUpdateManyWithoutClauseNestedInputSchema).optional()
}).strict();

export const ClauseCreateManyInputSchema: z.ZodType<Prisma.ClauseCreateManyInput> = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string()
}).strict();

export const ClauseUpdateManyMutationInputSchema: z.ZodType<Prisma.ClauseUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClauseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClauseUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReportCreateInputSchema: z.ZodType<Prisma.ReportCreateInput> = z.object({
  id: z.string(),
  title: z.string(),
  redacted_by: z.string(),
  created_by_id: z.string(),
  meet_date: z.coerce.date(),
  meet_link: z.string(),
  applicant_name: z.string(),
  applicant_type: z.string(),
  project_status: z.string(),
  project_cadastral_ref: z.string(),
  project_land_contact: z.string(),
  project_space_type: z.string(),
  project_nature: z.string(),
  project_description: z.string(),
  decision: z.string(),
  decision_comment: z.string(),
  contacts: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  report_to_clause: z.lazy(() => Report_to_clauseCreateNestedManyWithoutReportInputSchema).optional()
}).strict();

export const ReportUncheckedCreateInputSchema: z.ZodType<Prisma.ReportUncheckedCreateInput> = z.object({
  id: z.string(),
  title: z.string(),
  redacted_by: z.string(),
  created_by_id: z.string(),
  meet_date: z.coerce.date(),
  meet_link: z.string(),
  applicant_name: z.string(),
  applicant_type: z.string(),
  project_status: z.string(),
  project_cadastral_ref: z.string(),
  project_land_contact: z.string(),
  project_space_type: z.string(),
  project_nature: z.string(),
  project_description: z.string(),
  decision: z.string(),
  decision_comment: z.string(),
  contacts: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  report_to_clause: z.lazy(() => Report_to_clauseUncheckedCreateNestedManyWithoutReportInputSchema).optional()
}).strict();

export const ReportUpdateInputSchema: z.ZodType<Prisma.ReportUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  redacted_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_by_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  meet_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  meet_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_cadastral_ref: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_land_contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_space_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_nature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision_comment: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contacts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseUpdateManyWithoutReportNestedInputSchema).optional()
}).strict();

export const ReportUncheckedUpdateInputSchema: z.ZodType<Prisma.ReportUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  redacted_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_by_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  meet_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  meet_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_cadastral_ref: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_land_contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_space_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_nature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision_comment: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contacts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  report_to_clause: z.lazy(() => Report_to_clauseUncheckedUpdateManyWithoutReportNestedInputSchema).optional()
}).strict();

export const ReportCreateManyInputSchema: z.ZodType<Prisma.ReportCreateManyInput> = z.object({
  id: z.string(),
  title: z.string(),
  redacted_by: z.string(),
  created_by_id: z.string(),
  meet_date: z.coerce.date(),
  meet_link: z.string(),
  applicant_name: z.string(),
  applicant_type: z.string(),
  project_status: z.string(),
  project_cadastral_ref: z.string(),
  project_land_contact: z.string(),
  project_space_type: z.string(),
  project_nature: z.string(),
  project_description: z.string(),
  decision: z.string(),
  decision_comment: z.string(),
  contacts: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const ReportUpdateManyMutationInputSchema: z.ZodType<Prisma.ReportUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  redacted_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_by_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  meet_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  meet_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_cadastral_ref: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_land_contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_space_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_nature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision_comment: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contacts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReportUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReportUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  redacted_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_by_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  meet_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  meet_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_cadastral_ref: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_land_contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_space_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_nature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision_comment: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contacts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Report_to_clauseCreateInputSchema: z.ZodType<Prisma.Report_to_clauseCreateInput> = z.object({
  id: z.string(),
  clause: z.lazy(() => ClauseCreateNestedOneWithoutReport_to_clauseInputSchema),
  report: z.lazy(() => ReportCreateNestedOneWithoutReport_to_clauseInputSchema)
}).strict();

export const Report_to_clauseUncheckedCreateInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedCreateInput> = z.object({
  id: z.string(),
  report_id: z.string(),
  clause_id: z.string()
}).strict();

export const Report_to_clauseUpdateInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clause: z.lazy(() => ClauseUpdateOneRequiredWithoutReport_to_clauseNestedInputSchema).optional(),
  report: z.lazy(() => ReportUpdateOneRequiredWithoutReport_to_clauseNestedInputSchema).optional()
}).strict();

export const Report_to_clauseUncheckedUpdateInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  report_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clause_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Report_to_clauseCreateManyInputSchema: z.ZodType<Prisma.Report_to_clauseCreateManyInput> = z.object({
  id: z.string(),
  report_id: z.string(),
  clause_id: z.string()
}).strict();

export const Report_to_clauseUpdateManyMutationInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Report_to_clauseUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  report_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clause_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const Report_to_clauseListRelationFilterSchema: z.ZodType<Prisma.Report_to_clauseListRelationFilter> = z.object({
  every: z.lazy(() => Report_to_clauseWhereInputSchema).optional(),
  some: z.lazy(() => Report_to_clauseWhereInputSchema).optional(),
  none: z.lazy(() => Report_to_clauseWhereInputSchema).optional()
}).strict();

export const Report_to_clauseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Report_to_clauseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClauseCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClauseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClauseMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  label: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const ReportCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReportCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  redacted_by: z.lazy(() => SortOrderSchema).optional(),
  created_by_id: z.lazy(() => SortOrderSchema).optional(),
  meet_date: z.lazy(() => SortOrderSchema).optional(),
  meet_link: z.lazy(() => SortOrderSchema).optional(),
  applicant_name: z.lazy(() => SortOrderSchema).optional(),
  applicant_type: z.lazy(() => SortOrderSchema).optional(),
  project_status: z.lazy(() => SortOrderSchema).optional(),
  project_cadastral_ref: z.lazy(() => SortOrderSchema).optional(),
  project_land_contact: z.lazy(() => SortOrderSchema).optional(),
  project_space_type: z.lazy(() => SortOrderSchema).optional(),
  project_nature: z.lazy(() => SortOrderSchema).optional(),
  project_description: z.lazy(() => SortOrderSchema).optional(),
  decision: z.lazy(() => SortOrderSchema).optional(),
  decision_comment: z.lazy(() => SortOrderSchema).optional(),
  contacts: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReportMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReportMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  redacted_by: z.lazy(() => SortOrderSchema).optional(),
  created_by_id: z.lazy(() => SortOrderSchema).optional(),
  meet_date: z.lazy(() => SortOrderSchema).optional(),
  meet_link: z.lazy(() => SortOrderSchema).optional(),
  applicant_name: z.lazy(() => SortOrderSchema).optional(),
  applicant_type: z.lazy(() => SortOrderSchema).optional(),
  project_status: z.lazy(() => SortOrderSchema).optional(),
  project_cadastral_ref: z.lazy(() => SortOrderSchema).optional(),
  project_land_contact: z.lazy(() => SortOrderSchema).optional(),
  project_space_type: z.lazy(() => SortOrderSchema).optional(),
  project_nature: z.lazy(() => SortOrderSchema).optional(),
  project_description: z.lazy(() => SortOrderSchema).optional(),
  decision: z.lazy(() => SortOrderSchema).optional(),
  decision_comment: z.lazy(() => SortOrderSchema).optional(),
  contacts: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReportMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReportMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  redacted_by: z.lazy(() => SortOrderSchema).optional(),
  created_by_id: z.lazy(() => SortOrderSchema).optional(),
  meet_date: z.lazy(() => SortOrderSchema).optional(),
  meet_link: z.lazy(() => SortOrderSchema).optional(),
  applicant_name: z.lazy(() => SortOrderSchema).optional(),
  applicant_type: z.lazy(() => SortOrderSchema).optional(),
  project_status: z.lazy(() => SortOrderSchema).optional(),
  project_cadastral_ref: z.lazy(() => SortOrderSchema).optional(),
  project_land_contact: z.lazy(() => SortOrderSchema).optional(),
  project_space_type: z.lazy(() => SortOrderSchema).optional(),
  project_nature: z.lazy(() => SortOrderSchema).optional(),
  project_description: z.lazy(() => SortOrderSchema).optional(),
  decision: z.lazy(() => SortOrderSchema).optional(),
  decision_comment: z.lazy(() => SortOrderSchema).optional(),
  contacts: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  updated_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const ClauseRelationFilterSchema: z.ZodType<Prisma.ClauseRelationFilter> = z.object({
  is: z.lazy(() => ClauseWhereInputSchema).optional(),
  isNot: z.lazy(() => ClauseWhereInputSchema).optional()
}).strict();

export const ReportRelationFilterSchema: z.ZodType<Prisma.ReportRelationFilter> = z.object({
  is: z.lazy(() => ReportWhereInputSchema).optional(),
  isNot: z.lazy(() => ReportWhereInputSchema).optional()
}).strict();

export const Report_to_clauseCountOrderByAggregateInputSchema: z.ZodType<Prisma.Report_to_clauseCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  report_id: z.lazy(() => SortOrderSchema).optional(),
  clause_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Report_to_clauseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Report_to_clauseMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  report_id: z.lazy(() => SortOrderSchema).optional(),
  clause_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Report_to_clauseMinOrderByAggregateInputSchema: z.ZodType<Prisma.Report_to_clauseMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  report_id: z.lazy(() => SortOrderSchema).optional(),
  clause_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Report_to_clauseCreateNestedManyWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseCreateNestedManyWithoutClauseInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyClauseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Report_to_clauseUncheckedCreateNestedManyWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedCreateNestedManyWithoutClauseInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyClauseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const Report_to_clauseUpdateManyWithoutClauseNestedInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateManyWithoutClauseNestedInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyClauseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutClauseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Report_to_clauseScalarWhereInputSchema),z.lazy(() => Report_to_clauseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Report_to_clauseUncheckedUpdateManyWithoutClauseNestedInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedUpdateManyWithoutClauseNestedInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyClauseInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutClauseInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutClauseInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Report_to_clauseScalarWhereInputSchema),z.lazy(() => Report_to_clauseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Report_to_clauseCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyReportInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Report_to_clauseUncheckedCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyReportInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const Report_to_clauseUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutReportInputSchema),z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyReportInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutReportInputSchema),z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutReportInputSchema),z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutReportInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Report_to_clauseScalarWhereInputSchema),z.lazy(() => Report_to_clauseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Report_to_clauseUncheckedUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedUpdateManyWithoutReportNestedInput> = z.object({
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema).array(),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema),z.lazy(() => Report_to_clauseCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutReportInputSchema),z.lazy(() => Report_to_clauseUpsertWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Report_to_clauseCreateManyReportInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Report_to_clauseWhereUniqueInputSchema),z.lazy(() => Report_to_clauseWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutReportInputSchema),z.lazy(() => Report_to_clauseUpdateWithWhereUniqueWithoutReportInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutReportInputSchema),z.lazy(() => Report_to_clauseUpdateManyWithWhereWithoutReportInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Report_to_clauseScalarWhereInputSchema),z.lazy(() => Report_to_clauseScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClauseCreateNestedOneWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ClauseCreateNestedOneWithoutReport_to_clauseInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutReport_to_clauseInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutReport_to_clauseInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional()
}).strict();

export const ReportCreateNestedOneWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutReport_to_clauseInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ReportUncheckedCreateWithoutReport_to_clauseInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutReport_to_clauseInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional()
}).strict();

export const ClauseUpdateOneRequiredWithoutReport_to_clauseNestedInputSchema: z.ZodType<Prisma.ClauseUpdateOneRequiredWithoutReport_to_clauseNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutReport_to_clauseInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutReport_to_clauseInputSchema).optional(),
  upsert: z.lazy(() => ClauseUpsertWithoutReport_to_clauseInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateWithoutReport_to_clauseInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutReport_to_clauseInputSchema) ]).optional(),
}).strict();

export const ReportUpdateOneRequiredWithoutReport_to_clauseNestedInputSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutReport_to_clauseNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ReportUncheckedCreateWithoutReport_to_clauseInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutReport_to_clauseInputSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutReport_to_clauseInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReportUpdateWithoutReport_to_clauseInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutReport_to_clauseInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const Report_to_clauseCreateWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseCreateWithoutClauseInput> = z.object({
  id: z.string(),
  report: z.lazy(() => ReportCreateNestedOneWithoutReport_to_clauseInputSchema)
}).strict();

export const Report_to_clauseUncheckedCreateWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedCreateWithoutClauseInput> = z.object({
  id: z.string(),
  report_id: z.string()
}).strict();

export const Report_to_clauseCreateOrConnectWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseCreateOrConnectWithoutClauseInput> = z.object({
  where: z.lazy(() => Report_to_clauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema) ]),
}).strict();

export const Report_to_clauseCreateManyClauseInputEnvelopeSchema: z.ZodType<Prisma.Report_to_clauseCreateManyClauseInputEnvelope> = z.object({
  data: z.lazy(() => Report_to_clauseCreateManyClauseInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Report_to_clauseUpsertWithWhereUniqueWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseUpsertWithWhereUniqueWithoutClauseInput> = z.object({
  where: z.lazy(() => Report_to_clauseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Report_to_clauseUpdateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedUpdateWithoutClauseInputSchema) ]),
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutClauseInputSchema) ]),
}).strict();

export const Report_to_clauseUpdateWithWhereUniqueWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateWithWhereUniqueWithoutClauseInput> = z.object({
  where: z.lazy(() => Report_to_clauseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Report_to_clauseUpdateWithoutClauseInputSchema),z.lazy(() => Report_to_clauseUncheckedUpdateWithoutClauseInputSchema) ]),
}).strict();

export const Report_to_clauseUpdateManyWithWhereWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateManyWithWhereWithoutClauseInput> = z.object({
  where: z.lazy(() => Report_to_clauseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Report_to_clauseUpdateManyMutationInputSchema),z.lazy(() => Report_to_clauseUncheckedUpdateManyWithoutReport_to_clauseInputSchema) ]),
}).strict();

export const Report_to_clauseScalarWhereInputSchema: z.ZodType<Prisma.Report_to_clauseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Report_to_clauseScalarWhereInputSchema),z.lazy(() => Report_to_clauseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Report_to_clauseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Report_to_clauseScalarWhereInputSchema),z.lazy(() => Report_to_clauseScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  report_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clause_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const Report_to_clauseCreateWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseCreateWithoutReportInput> = z.object({
  id: z.string(),
  clause: z.lazy(() => ClauseCreateNestedOneWithoutReport_to_clauseInputSchema)
}).strict();

export const Report_to_clauseUncheckedCreateWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedCreateWithoutReportInput> = z.object({
  id: z.string(),
  clause_id: z.string()
}).strict();

export const Report_to_clauseCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => Report_to_clauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export const Report_to_clauseCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.Report_to_clauseCreateManyReportInputEnvelope> = z.object({
  data: z.lazy(() => Report_to_clauseCreateManyReportInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Report_to_clauseUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => Report_to_clauseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Report_to_clauseUpdateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedUpdateWithoutReportInputSchema) ]),
  create: z.union([ z.lazy(() => Report_to_clauseCreateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export const Report_to_clauseUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => Report_to_clauseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Report_to_clauseUpdateWithoutReportInputSchema),z.lazy(() => Report_to_clauseUncheckedUpdateWithoutReportInputSchema) ]),
}).strict();

export const Report_to_clauseUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateManyWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => Report_to_clauseScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Report_to_clauseUpdateManyMutationInputSchema),z.lazy(() => Report_to_clauseUncheckedUpdateManyWithoutReport_to_clauseInputSchema) ]),
}).strict();

export const ClauseCreateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ClauseCreateWithoutReport_to_clauseInput> = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string()
}).strict();

export const ClauseUncheckedCreateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ClauseUncheckedCreateWithoutReport_to_clauseInput> = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string()
}).strict();

export const ClauseCreateOrConnectWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutReport_to_clauseInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutReport_to_clauseInputSchema) ]),
}).strict();

export const ReportCreateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ReportCreateWithoutReport_to_clauseInput> = z.object({
  id: z.string(),
  title: z.string(),
  redacted_by: z.string(),
  created_by_id: z.string(),
  meet_date: z.coerce.date(),
  meet_link: z.string(),
  applicant_name: z.string(),
  applicant_type: z.string(),
  project_status: z.string(),
  project_cadastral_ref: z.string(),
  project_land_contact: z.string(),
  project_space_type: z.string(),
  project_nature: z.string(),
  project_description: z.string(),
  decision: z.string(),
  decision_comment: z.string(),
  contacts: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const ReportUncheckedCreateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ReportUncheckedCreateWithoutReport_to_clauseInput> = z.object({
  id: z.string(),
  title: z.string(),
  redacted_by: z.string(),
  created_by_id: z.string(),
  meet_date: z.coerce.date(),
  meet_link: z.string(),
  applicant_name: z.string(),
  applicant_type: z.string(),
  project_status: z.string(),
  project_cadastral_ref: z.string(),
  project_land_contact: z.string(),
  project_space_type: z.string(),
  project_nature: z.string(),
  project_description: z.string(),
  decision: z.string(),
  decision_comment: z.string(),
  contacts: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date()
}).strict();

export const ReportCreateOrConnectWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutReport_to_clauseInput> = z.object({
  where: z.lazy(() => ReportWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ReportUncheckedCreateWithoutReport_to_clauseInputSchema) ]),
}).strict();

export const ClauseUpsertWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ClauseUpsertWithoutReport_to_clauseInput> = z.object({
  update: z.union([ z.lazy(() => ClauseUpdateWithoutReport_to_clauseInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutReport_to_clauseInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutReport_to_clauseInputSchema) ]),
}).strict();

export const ClauseUpdateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ClauseUpdateWithoutReport_to_clauseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClauseUncheckedUpdateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ClauseUncheckedUpdateWithoutReport_to_clauseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReportUpsertWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ReportUpsertWithoutReport_to_clauseInput> = z.object({
  update: z.union([ z.lazy(() => ReportUpdateWithoutReport_to_clauseInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutReport_to_clauseInputSchema) ]),
  create: z.union([ z.lazy(() => ReportCreateWithoutReport_to_clauseInputSchema),z.lazy(() => ReportUncheckedCreateWithoutReport_to_clauseInputSchema) ]),
}).strict();

export const ReportUpdateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ReportUpdateWithoutReport_to_clauseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  redacted_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_by_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  meet_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  meet_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_cadastral_ref: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_land_contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_space_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_nature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision_comment: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contacts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReportUncheckedUpdateWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.ReportUncheckedUpdateWithoutReport_to_clauseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  redacted_by: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_by_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  meet_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  meet_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  applicant_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_cadastral_ref: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_land_contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_space_type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_nature: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  project_description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  decision_comment: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contacts: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updated_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Report_to_clauseCreateManyClauseInputSchema: z.ZodType<Prisma.Report_to_clauseCreateManyClauseInput> = z.object({
  id: z.string(),
  report_id: z.string()
}).strict();

export const Report_to_clauseUpdateWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateWithoutClauseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  report: z.lazy(() => ReportUpdateOneRequiredWithoutReport_to_clauseNestedInputSchema).optional()
}).strict();

export const Report_to_clauseUncheckedUpdateWithoutClauseInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedUpdateWithoutClauseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  report_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Report_to_clauseUncheckedUpdateManyWithoutReport_to_clauseInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedUpdateManyWithoutReport_to_clauseInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  report_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Report_to_clauseCreateManyReportInputSchema: z.ZodType<Prisma.Report_to_clauseCreateManyReportInput> = z.object({
  id: z.string(),
  clause_id: z.string()
}).strict();

export const Report_to_clauseUpdateWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseUpdateWithoutReportInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clause: z.lazy(() => ClauseUpdateOneRequiredWithoutReport_to_clauseNestedInputSchema).optional()
}).strict();

export const Report_to_clauseUncheckedUpdateWithoutReportInputSchema: z.ZodType<Prisma.Report_to_clauseUncheckedUpdateWithoutReportInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clause_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ClauseFindFirstArgsSchema: z.ZodType<Prisma.ClauseFindFirstArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithRelationInputSchema.array(),ClauseOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClauseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ClauseFindFirstArgs>

export const ClauseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClauseFindFirstOrThrowArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithRelationInputSchema.array(),ClauseOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClauseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ClauseFindFirstOrThrowArgs>

export const ClauseFindManyArgsSchema: z.ZodType<Prisma.ClauseFindManyArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithRelationInputSchema.array(),ClauseOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ClauseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ClauseFindManyArgs>

export const ClauseAggregateArgsSchema: z.ZodType<Prisma.ClauseAggregateArgs> = z.object({
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithRelationInputSchema.array(),ClauseOrderByWithRelationInputSchema ]).optional(),
  cursor: ClauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseAggregateArgs>

export const ClauseGroupByArgsSchema: z.ZodType<Prisma.ClauseGroupByArgs> = z.object({
  where: ClauseWhereInputSchema.optional(),
  orderBy: z.union([ ClauseOrderByWithAggregationInputSchema.array(),ClauseOrderByWithAggregationInputSchema ]).optional(),
  by: ClauseScalarFieldEnumSchema.array(),
  having: ClauseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClauseGroupByArgs>

export const ClauseFindUniqueArgsSchema: z.ZodType<Prisma.ClauseFindUniqueArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  where: ClauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClauseFindUniqueArgs>

export const ClauseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClauseFindUniqueOrThrowArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  where: ClauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClauseFindUniqueOrThrowArgs>

export const ReportFindFirstArgsSchema: z.ZodType<Prisma.ReportFindFirstArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  where: ReportWhereInputSchema.optional(),
  orderBy: z.union([ ReportOrderByWithRelationInputSchema.array(),ReportOrderByWithRelationInputSchema ]).optional(),
  cursor: ReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ReportScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ReportFindFirstArgs>

export const ReportFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReportFindFirstOrThrowArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  where: ReportWhereInputSchema.optional(),
  orderBy: z.union([ ReportOrderByWithRelationInputSchema.array(),ReportOrderByWithRelationInputSchema ]).optional(),
  cursor: ReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ReportScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ReportFindFirstOrThrowArgs>

export const ReportFindManyArgsSchema: z.ZodType<Prisma.ReportFindManyArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  where: ReportWhereInputSchema.optional(),
  orderBy: z.union([ ReportOrderByWithRelationInputSchema.array(),ReportOrderByWithRelationInputSchema ]).optional(),
  cursor: ReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ReportScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ReportFindManyArgs>

export const ReportAggregateArgsSchema: z.ZodType<Prisma.ReportAggregateArgs> = z.object({
  where: ReportWhereInputSchema.optional(),
  orderBy: z.union([ ReportOrderByWithRelationInputSchema.array(),ReportOrderByWithRelationInputSchema ]).optional(),
  cursor: ReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ReportAggregateArgs>

export const ReportGroupByArgsSchema: z.ZodType<Prisma.ReportGroupByArgs> = z.object({
  where: ReportWhereInputSchema.optional(),
  orderBy: z.union([ ReportOrderByWithAggregationInputSchema.array(),ReportOrderByWithAggregationInputSchema ]).optional(),
  by: ReportScalarFieldEnumSchema.array(),
  having: ReportScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ReportGroupByArgs>

export const ReportFindUniqueArgsSchema: z.ZodType<Prisma.ReportFindUniqueArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  where: ReportWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ReportFindUniqueArgs>

export const ReportFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReportFindUniqueOrThrowArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  where: ReportWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ReportFindUniqueOrThrowArgs>

export const Report_to_clauseFindFirstArgsSchema: z.ZodType<Prisma.Report_to_clauseFindFirstArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  where: Report_to_clauseWhereInputSchema.optional(),
  orderBy: z.union([ Report_to_clauseOrderByWithRelationInputSchema.array(),Report_to_clauseOrderByWithRelationInputSchema ]).optional(),
  cursor: Report_to_clauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Report_to_clauseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseFindFirstArgs>

export const Report_to_clauseFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Report_to_clauseFindFirstOrThrowArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  where: Report_to_clauseWhereInputSchema.optional(),
  orderBy: z.union([ Report_to_clauseOrderByWithRelationInputSchema.array(),Report_to_clauseOrderByWithRelationInputSchema ]).optional(),
  cursor: Report_to_clauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Report_to_clauseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseFindFirstOrThrowArgs>

export const Report_to_clauseFindManyArgsSchema: z.ZodType<Prisma.Report_to_clauseFindManyArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  where: Report_to_clauseWhereInputSchema.optional(),
  orderBy: z.union([ Report_to_clauseOrderByWithRelationInputSchema.array(),Report_to_clauseOrderByWithRelationInputSchema ]).optional(),
  cursor: Report_to_clauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Report_to_clauseScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseFindManyArgs>

export const Report_to_clauseAggregateArgsSchema: z.ZodType<Prisma.Report_to_clauseAggregateArgs> = z.object({
  where: Report_to_clauseWhereInputSchema.optional(),
  orderBy: z.union([ Report_to_clauseOrderByWithRelationInputSchema.array(),Report_to_clauseOrderByWithRelationInputSchema ]).optional(),
  cursor: Report_to_clauseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseAggregateArgs>

export const Report_to_clauseGroupByArgsSchema: z.ZodType<Prisma.Report_to_clauseGroupByArgs> = z.object({
  where: Report_to_clauseWhereInputSchema.optional(),
  orderBy: z.union([ Report_to_clauseOrderByWithAggregationInputSchema.array(),Report_to_clauseOrderByWithAggregationInputSchema ]).optional(),
  by: Report_to_clauseScalarFieldEnumSchema.array(),
  having: Report_to_clauseScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseGroupByArgs>

export const Report_to_clauseFindUniqueArgsSchema: z.ZodType<Prisma.Report_to_clauseFindUniqueArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  where: Report_to_clauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Report_to_clauseFindUniqueArgs>

export const Report_to_clauseFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Report_to_clauseFindUniqueOrThrowArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  where: Report_to_clauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Report_to_clauseFindUniqueOrThrowArgs>

export const ClauseCreateArgsSchema: z.ZodType<Prisma.ClauseCreateArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  data: z.union([ ClauseCreateInputSchema,ClauseUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ClauseCreateArgs>

export const ClauseUpsertArgsSchema: z.ZodType<Prisma.ClauseUpsertArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  where: ClauseWhereUniqueInputSchema,
  create: z.union([ ClauseCreateInputSchema,ClauseUncheckedCreateInputSchema ]),
  update: z.union([ ClauseUpdateInputSchema,ClauseUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ClauseUpsertArgs>

export const ClauseCreateManyArgsSchema: z.ZodType<Prisma.ClauseCreateManyArgs> = z.object({
  data: ClauseCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClauseCreateManyArgs>

export const ClauseDeleteArgsSchema: z.ZodType<Prisma.ClauseDeleteArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  where: ClauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClauseDeleteArgs>

export const ClauseUpdateArgsSchema: z.ZodType<Prisma.ClauseUpdateArgs> = z.object({
  select: ClauseSelectSchema.optional(),
  include: ClauseIncludeSchema.optional(),
  data: z.union([ ClauseUpdateInputSchema,ClauseUncheckedUpdateInputSchema ]),
  where: ClauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClauseUpdateArgs>

export const ClauseUpdateManyArgsSchema: z.ZodType<Prisma.ClauseUpdateManyArgs> = z.object({
  data: z.union([ ClauseUpdateManyMutationInputSchema,ClauseUncheckedUpdateManyInputSchema ]),
  where: ClauseWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ClauseUpdateManyArgs>

export const ClauseDeleteManyArgsSchema: z.ZodType<Prisma.ClauseDeleteManyArgs> = z.object({
  where: ClauseWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ClauseDeleteManyArgs>

export const ReportCreateArgsSchema: z.ZodType<Prisma.ReportCreateArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  data: z.union([ ReportCreateInputSchema,ReportUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ReportCreateArgs>

export const ReportUpsertArgsSchema: z.ZodType<Prisma.ReportUpsertArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  where: ReportWhereUniqueInputSchema,
  create: z.union([ ReportCreateInputSchema,ReportUncheckedCreateInputSchema ]),
  update: z.union([ ReportUpdateInputSchema,ReportUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ReportUpsertArgs>

export const ReportCreateManyArgsSchema: z.ZodType<Prisma.ReportCreateManyArgs> = z.object({
  data: ReportCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ReportCreateManyArgs>

export const ReportDeleteArgsSchema: z.ZodType<Prisma.ReportDeleteArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  where: ReportWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ReportDeleteArgs>

export const ReportUpdateArgsSchema: z.ZodType<Prisma.ReportUpdateArgs> = z.object({
  select: ReportSelectSchema.optional(),
  include: ReportIncludeSchema.optional(),
  data: z.union([ ReportUpdateInputSchema,ReportUncheckedUpdateInputSchema ]),
  where: ReportWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ReportUpdateArgs>

export const ReportUpdateManyArgsSchema: z.ZodType<Prisma.ReportUpdateManyArgs> = z.object({
  data: z.union([ ReportUpdateManyMutationInputSchema,ReportUncheckedUpdateManyInputSchema ]),
  where: ReportWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ReportUpdateManyArgs>

export const ReportDeleteManyArgsSchema: z.ZodType<Prisma.ReportDeleteManyArgs> = z.object({
  where: ReportWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ReportDeleteManyArgs>

export const Report_to_clauseCreateArgsSchema: z.ZodType<Prisma.Report_to_clauseCreateArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  data: z.union([ Report_to_clauseCreateInputSchema,Report_to_clauseUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Report_to_clauseCreateArgs>

export const Report_to_clauseUpsertArgsSchema: z.ZodType<Prisma.Report_to_clauseUpsertArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  where: Report_to_clauseWhereUniqueInputSchema,
  create: z.union([ Report_to_clauseCreateInputSchema,Report_to_clauseUncheckedCreateInputSchema ]),
  update: z.union([ Report_to_clauseUpdateInputSchema,Report_to_clauseUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Report_to_clauseUpsertArgs>

export const Report_to_clauseCreateManyArgsSchema: z.ZodType<Prisma.Report_to_clauseCreateManyArgs> = z.object({
  data: Report_to_clauseCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseCreateManyArgs>

export const Report_to_clauseDeleteArgsSchema: z.ZodType<Prisma.Report_to_clauseDeleteArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  where: Report_to_clauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Report_to_clauseDeleteArgs>

export const Report_to_clauseUpdateArgsSchema: z.ZodType<Prisma.Report_to_clauseUpdateArgs> = z.object({
  select: Report_to_clauseSelectSchema.optional(),
  include: Report_to_clauseIncludeSchema.optional(),
  data: z.union([ Report_to_clauseUpdateInputSchema,Report_to_clauseUncheckedUpdateInputSchema ]),
  where: Report_to_clauseWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Report_to_clauseUpdateArgs>

export const Report_to_clauseUpdateManyArgsSchema: z.ZodType<Prisma.Report_to_clauseUpdateManyArgs> = z.object({
  data: z.union([ Report_to_clauseUpdateManyMutationInputSchema,Report_to_clauseUncheckedUpdateManyInputSchema ]),
  where: Report_to_clauseWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseUpdateManyArgs>

export const Report_to_clauseDeleteManyArgsSchema: z.ZodType<Prisma.Report_to_clauseDeleteManyArgs> = z.object({
  where: Report_to_clauseWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Report_to_clauseDeleteManyArgs>

interface ClauseGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ClauseArgs
  readonly type: Prisma.ClauseGetPayload<this['_A']>
}

interface ReportGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ReportArgs
  readonly type: Prisma.ReportGetPayload<this['_A']>
}

interface Report_to_clauseGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Report_to_clauseArgs
  readonly type: Prisma.Report_to_clauseGetPayload<this['_A']>
}

export const tableSchemas = {
  clause: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "label",
        "TEXT"
      ],
      [
        "value",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("report_to_clause", "", "", "report_to_clause", "ClauseToReport_to_clause", "many"),
    ],
    modelSchema: (ClauseCreateInputSchema as any)
      .partial()
      .or((ClauseUncheckedCreateInputSchema as any).partial()),
    createSchema: ClauseCreateArgsSchema,
    createManySchema: ClauseCreateManyArgsSchema,
    findUniqueSchema: ClauseFindUniqueArgsSchema,
    findSchema: ClauseFindFirstArgsSchema,
    updateSchema: ClauseUpdateArgsSchema,
    updateManySchema: ClauseUpdateManyArgsSchema,
    upsertSchema: ClauseUpsertArgsSchema,
    deleteSchema: ClauseDeleteArgsSchema,
    deleteManySchema: ClauseDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ClauseCreateInputSchema>,
    Prisma.ClauseCreateArgs['data'],
    Prisma.ClauseUpdateArgs['data'],
    Prisma.ClauseFindFirstArgs['select'],
    Prisma.ClauseFindFirstArgs['where'],
    Prisma.ClauseFindUniqueArgs['where'],
    Omit<Prisma.ClauseInclude, '_count'>,
    Prisma.ClauseFindFirstArgs['orderBy'],
    Prisma.ClauseScalarFieldEnum,
    ClauseGetPayload
  >,
  report: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "title",
        "TEXT"
      ],
      [
        "redacted_by",
        "TEXT"
      ],
      [
        "created_by_id",
        "TEXT"
      ],
      [
        "meet_date",
        "TIMESTAMP"
      ],
      [
        "meet_link",
        "TEXT"
      ],
      [
        "applicant_name",
        "TEXT"
      ],
      [
        "applicant_type",
        "TEXT"
      ],
      [
        "project_status",
        "TEXT"
      ],
      [
        "project_cadastral_ref",
        "TEXT"
      ],
      [
        "project_land_contact",
        "TEXT"
      ],
      [
        "project_space_type",
        "TEXT"
      ],
      [
        "project_nature",
        "TEXT"
      ],
      [
        "project_description",
        "TEXT"
      ],
      [
        "decision",
        "TEXT"
      ],
      [
        "decision_comment",
        "TEXT"
      ],
      [
        "contacts",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "updated_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
      new Relation("report_to_clause", "", "", "report_to_clause", "ReportToReport_to_clause", "many"),
    ],
    modelSchema: (ReportCreateInputSchema as any)
      .partial()
      .or((ReportUncheckedCreateInputSchema as any).partial()),
    createSchema: ReportCreateArgsSchema,
    createManySchema: ReportCreateManyArgsSchema,
    findUniqueSchema: ReportFindUniqueArgsSchema,
    findSchema: ReportFindFirstArgsSchema,
    updateSchema: ReportUpdateArgsSchema,
    updateManySchema: ReportUpdateManyArgsSchema,
    upsertSchema: ReportUpsertArgsSchema,
    deleteSchema: ReportDeleteArgsSchema,
    deleteManySchema: ReportDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ReportCreateInputSchema>,
    Prisma.ReportCreateArgs['data'],
    Prisma.ReportUpdateArgs['data'],
    Prisma.ReportFindFirstArgs['select'],
    Prisma.ReportFindFirstArgs['where'],
    Prisma.ReportFindUniqueArgs['where'],
    Omit<Prisma.ReportInclude, '_count'>,
    Prisma.ReportFindFirstArgs['orderBy'],
    Prisma.ReportScalarFieldEnum,
    ReportGetPayload
  >,
  report_to_clause: {
    fields: new Map([
      [
        "id",
        "TEXT"
      ],
      [
        "report_id",
        "TEXT"
      ],
      [
        "clause_id",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("clause", "clause_id", "id", "clause", "ClauseToReport_to_clause", "one"),
      new Relation("report", "report_id", "id", "report", "ReportToReport_to_clause", "one"),
    ],
    modelSchema: (Report_to_clauseCreateInputSchema as any)
      .partial()
      .or((Report_to_clauseUncheckedCreateInputSchema as any).partial()),
    createSchema: Report_to_clauseCreateArgsSchema,
    createManySchema: Report_to_clauseCreateManyArgsSchema,
    findUniqueSchema: Report_to_clauseFindUniqueArgsSchema,
    findSchema: Report_to_clauseFindFirstArgsSchema,
    updateSchema: Report_to_clauseUpdateArgsSchema,
    updateManySchema: Report_to_clauseUpdateManyArgsSchema,
    upsertSchema: Report_to_clauseUpsertArgsSchema,
    deleteSchema: Report_to_clauseDeleteArgsSchema,
    deleteManySchema: Report_to_clauseDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Report_to_clauseCreateInputSchema>,
    Prisma.Report_to_clauseCreateArgs['data'],
    Prisma.Report_to_clauseUpdateArgs['data'],
    Prisma.Report_to_clauseFindFirstArgs['select'],
    Prisma.Report_to_clauseFindFirstArgs['where'],
    Prisma.Report_to_clauseFindUniqueArgs['where'],
    Omit<Prisma.Report_to_clauseInclude, '_count'>,
    Prisma.Report_to_clauseFindFirstArgs['orderBy'],
    Prisma.Report_to_clauseScalarFieldEnum,
    Report_to_clauseGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
