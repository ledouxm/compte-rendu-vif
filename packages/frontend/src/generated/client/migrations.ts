export default [
  {
    "statements": [
      "CREATE TABLE \"report\" (\n  \"id\" TEXT NOT NULL,\n  \"title\" TEXT NOT NULL,\n  \"redacted_by\" TEXT NOT NULL,\n  \"created_by_id\" TEXT NOT NULL,\n  \"meet_date\" TEXT NOT NULL,\n  \"meet_link\" TEXT NOT NULL,\n  \"applicant_name\" TEXT NOT NULL,\n  \"applicant_type\" TEXT NOT NULL,\n  \"project_status\" TEXT NOT NULL,\n  \"project_cadastral_ref\" TEXT NOT NULL,\n  \"project_land_contact\" TEXT NOT NULL,\n  \"project_space_type\" TEXT NOT NULL,\n  \"project_nature\" TEXT NOT NULL,\n  \"project_description\" TEXT NOT NULL,\n  \"decision\" TEXT NOT NULL,\n  \"decision_comment\" TEXT NOT NULL,\n  \"contacts\" TEXT NOT NULL,\n  \"created_at\" TEXT NOT NULL,\n  \"updated_at\" TEXT NOT NULL,\n  CONSTRAINT \"report_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "CREATE TABLE \"report_to_clause\" (\n  \"id\" TEXT NOT NULL,\n  \"report_id\" TEXT NOT NULL,\n  \"clause_id\" TEXT NOT NULL,\n  CONSTRAINT \"report_to_clause_clause_id_fkey\" FOREIGN KEY (\"clause_id\") REFERENCES \"clause\" (\"id\") ON DELETE CASCADE,\n  CONSTRAINT \"report_to_clause_report_id_fkey\" FOREIGN KEY (\"report_id\") REFERENCES \"report\" (\"id\") ON DELETE CASCADE,\n  CONSTRAINT \"report_to_clause_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "CREATE TABLE \"clause\" (\n  \"id\" TEXT NOT NULL,\n  \"label\" TEXT NOT NULL,\n  \"value\" TEXT NOT NULL,\n  CONSTRAINT \"clause_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.report', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_report_primarykey;",
      "CREATE TRIGGER update_ensure_main_report_primarykey\n  BEFORE UPDATE ON \"main\".\"report\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_report_into_oplog;",
      "CREATE TRIGGER insert_main_report_into_oplog\n   AFTER INSERT ON \"main\".\"report\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'report', 'INSERT', json_object('id', new.\"id\"), json_object('applicant_name', new.\"applicant_name\", 'applicant_type', new.\"applicant_type\", 'contacts', new.\"contacts\", 'created_at', new.\"created_at\", 'created_by_id', new.\"created_by_id\", 'decision', new.\"decision\", 'decision_comment', new.\"decision_comment\", 'id', new.\"id\", 'meet_date', new.\"meet_date\", 'meet_link', new.\"meet_link\", 'project_cadastral_ref', new.\"project_cadastral_ref\", 'project_description', new.\"project_description\", 'project_land_contact', new.\"project_land_contact\", 'project_nature', new.\"project_nature\", 'project_space_type', new.\"project_space_type\", 'project_status', new.\"project_status\", 'redacted_by', new.\"redacted_by\", 'title', new.\"title\", 'updated_at', new.\"updated_at\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_report_into_oplog;",
      "CREATE TRIGGER update_main_report_into_oplog\n   AFTER UPDATE ON \"main\".\"report\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'report', 'UPDATE', json_object('id', new.\"id\"), json_object('applicant_name', new.\"applicant_name\", 'applicant_type', new.\"applicant_type\", 'contacts', new.\"contacts\", 'created_at', new.\"created_at\", 'created_by_id', new.\"created_by_id\", 'decision', new.\"decision\", 'decision_comment', new.\"decision_comment\", 'id', new.\"id\", 'meet_date', new.\"meet_date\", 'meet_link', new.\"meet_link\", 'project_cadastral_ref', new.\"project_cadastral_ref\", 'project_description', new.\"project_description\", 'project_land_contact', new.\"project_land_contact\", 'project_nature', new.\"project_nature\", 'project_space_type', new.\"project_space_type\", 'project_status', new.\"project_status\", 'redacted_by', new.\"redacted_by\", 'title', new.\"title\", 'updated_at', new.\"updated_at\"), json_object('applicant_name', old.\"applicant_name\", 'applicant_type', old.\"applicant_type\", 'contacts', old.\"contacts\", 'created_at', old.\"created_at\", 'created_by_id', old.\"created_by_id\", 'decision', old.\"decision\", 'decision_comment', old.\"decision_comment\", 'id', old.\"id\", 'meet_date', old.\"meet_date\", 'meet_link', old.\"meet_link\", 'project_cadastral_ref', old.\"project_cadastral_ref\", 'project_description', old.\"project_description\", 'project_land_contact', old.\"project_land_contact\", 'project_nature', old.\"project_nature\", 'project_space_type', old.\"project_space_type\", 'project_status', old.\"project_status\", 'redacted_by', old.\"redacted_by\", 'title', old.\"title\", 'updated_at', old.\"updated_at\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_report_into_oplog;",
      "CREATE TRIGGER delete_main_report_into_oplog\n   AFTER DELETE ON \"main\".\"report\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'report', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('applicant_name', old.\"applicant_name\", 'applicant_type', old.\"applicant_type\", 'contacts', old.\"contacts\", 'created_at', old.\"created_at\", 'created_by_id', old.\"created_by_id\", 'decision', old.\"decision\", 'decision_comment', old.\"decision_comment\", 'id', old.\"id\", 'meet_date', old.\"meet_date\", 'meet_link', old.\"meet_link\", 'project_cadastral_ref', old.\"project_cadastral_ref\", 'project_description', old.\"project_description\", 'project_land_contact', old.\"project_land_contact\", 'project_nature', old.\"project_nature\", 'project_space_type', old.\"project_space_type\", 'project_status', old.\"project_status\", 'redacted_by', old.\"redacted_by\", 'title', old.\"title\", 'updated_at', old.\"updated_at\"), NULL);\nEND;",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.report_to_clause', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_report_to_clause_primarykey;",
      "CREATE TRIGGER update_ensure_main_report_to_clause_primarykey\n  BEFORE UPDATE ON \"main\".\"report_to_clause\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_report_to_clause_into_oplog;",
      "CREATE TRIGGER insert_main_report_to_clause_into_oplog\n   AFTER INSERT ON \"main\".\"report_to_clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report_to_clause')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'report_to_clause', 'INSERT', json_object('id', new.\"id\"), json_object('clause_id', new.\"clause_id\", 'id', new.\"id\", 'report_id', new.\"report_id\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_report_to_clause_into_oplog;",
      "CREATE TRIGGER update_main_report_to_clause_into_oplog\n   AFTER UPDATE ON \"main\".\"report_to_clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report_to_clause')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'report_to_clause', 'UPDATE', json_object('id', new.\"id\"), json_object('clause_id', new.\"clause_id\", 'id', new.\"id\", 'report_id', new.\"report_id\"), json_object('clause_id', old.\"clause_id\", 'id', old.\"id\", 'report_id', old.\"report_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_report_to_clause_into_oplog;",
      "CREATE TRIGGER delete_main_report_to_clause_into_oplog\n   AFTER DELETE ON \"main\".\"report_to_clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report_to_clause')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'report_to_clause', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('clause_id', old.\"clause_id\", 'id', old.\"id\", 'report_id', old.\"report_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS compensation_insert_main_report_to_clause_clause_id_into_oplog;",
      "CREATE TRIGGER compensation_insert_main_report_to_clause_clause_id_into_oplog\n  AFTER INSERT ON \"main\".\"report_to_clause\"\n  WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clause') AND\n       1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'clause', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"clause\" WHERE \"id\" = new.\"clause_id\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_update_main_report_to_clause_clause_id_into_oplog;",
      "CREATE TRIGGER compensation_update_main_report_to_clause_clause_id_into_oplog\n   AFTER UPDATE ON \"main\".\"report_to_clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clause') AND\n        1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'clause', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"clause\" WHERE \"id\" = new.\"clause_id\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_insert_main_report_to_clause_report_id_into_oplog;",
      "CREATE TRIGGER compensation_insert_main_report_to_clause_report_id_into_oplog\n  AFTER INSERT ON \"main\".\"report_to_clause\"\n  WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report') AND\n       1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'report', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"report\" WHERE \"id\" = new.\"report_id\";\nEND;",
      "DROP TRIGGER IF EXISTS compensation_update_main_report_to_clause_report_id_into_oplog;",
      "CREATE TRIGGER compensation_update_main_report_to_clause_report_id_into_oplog\n   AFTER UPDATE ON \"main\".\"report_to_clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.report') AND\n        1 == (SELECT value from _electric_meta WHERE key == 'compensations')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  SELECT 'main', 'report', 'COMPENSATION', json_object('id', \"id\"), json_object('id', \"id\"), NULL, NULL\n  FROM \"main\".\"report\" WHERE \"id\" = new.\"report_id\";\nEND;",
      "INSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.clause', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_clause_primarykey;",
      "CREATE TRIGGER update_ensure_main_clause_primarykey\n  BEFORE UPDATE ON \"main\".\"clause\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_clause_into_oplog;",
      "CREATE TRIGGER insert_main_clause_into_oplog\n   AFTER INSERT ON \"main\".\"clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clause')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'clause', 'INSERT', json_object('id', new.\"id\"), json_object('id', new.\"id\", 'label', new.\"label\", 'value', new.\"value\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_clause_into_oplog;",
      "CREATE TRIGGER update_main_clause_into_oplog\n   AFTER UPDATE ON \"main\".\"clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clause')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'clause', 'UPDATE', json_object('id', new.\"id\"), json_object('id', new.\"id\", 'label', new.\"label\", 'value', new.\"value\"), json_object('id', old.\"id\", 'label', old.\"label\", 'value', old.\"value\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_clause_into_oplog;",
      "CREATE TRIGGER delete_main_clause_into_oplog\n   AFTER DELETE ON \"main\".\"clause\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.clause')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'clause', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('id', old.\"id\", 'label', old.\"label\", 'value', old.\"value\"), NULL);\nEND;"
    ],
    "version": "1"
  }
]