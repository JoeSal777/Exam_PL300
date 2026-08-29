window.PL300_QUESTIONS = [
  {
    "id": "q001",
    "topic": "storage_connections",
    "type": "single",
    "stem": "A semantic model needs very fast report interaction. The source changes once nightly and fits comfortably in memory.\n\nWhich option is the best answer?",
    "options": [
      "Update source credentials",
      "DirectLake",
      "DirectQuery",
      "Import"
    ],
    "correct": 3,
    "explanation": "Import is usually the best starting point when refresh latency is acceptable and fast in-memory interaction is desired.",
    "optionNotes": [
      "Not best here: Update source credentials addresses a different requirement in this concept. The connectivity path exists; the changed authentication secret should be updated first.",
      "Not best here: DirectLake addresses a different requirement in this concept. DirectLake is the Fabric storage mode designed around OneLake data.",
      "Not best here: DirectQuery addresses a different requirement in this concept. DirectQuery keeps data at the source and can query it during report interaction.",
      "Correct: Import is usually the best starting point when refresh latency is acceptable and fast in-memory interaction is desired."
    ]
  },
  {
    "id": "q002",
    "topic": "storage_connections",
    "type": "single",
    "stem": "Users must see source changes within minutes and the data must remain in a supported source rather than be fully imported.\n\nWhich option is the best answer?",
    "options": [
      "Update source credentials",
      "Import",
      "DirectQuery",
      "DirectLake"
    ],
    "correct": 2,
    "explanation": "DirectQuery keeps data at the source and can query it during report interaction.",
    "optionNotes": [
      "Not best here: Update source credentials addresses a different requirement in this concept. The connectivity path exists; the changed authentication secret should be updated first.",
      "Not best here: Import addresses a different requirement in this concept. Import is usually the best starting point when refresh latency is acceptable and fast in-memory interaction is desired.",
      "Correct: DirectQuery keeps data at the source and can query it during report interaction.",
      "Not best here: DirectLake addresses a different requirement in this concept. DirectLake is the Fabric storage mode designed around OneLake data."
    ]
  },
  {
    "id": "q003",
    "topic": "storage_connections",
    "type": "single",
    "stem": "The model is built on Fabric Delta tables in OneLake and should use the storage mode designed for that architecture.\n\nWhich option is the best answer?",
    "options": [
      "Import",
      "DirectQuery",
      "DirectLake",
      "Shared semantic model"
    ],
    "correct": 2,
    "explanation": "DirectLake is the Fabric storage mode designed around OneLake data.",
    "optionNotes": [
      "Not best here: Import addresses a different requirement in this concept. Import is usually the best starting point when refresh latency is acceptable and fast in-memory interaction is desired.",
      "Not best here: DirectQuery addresses a different requirement in this concept. DirectQuery keeps data at the source and can query it during report interaction.",
      "Correct: DirectLake is the Fabric storage mode designed around OneLake data.",
      "Not best here: Shared semantic model addresses a different requirement in this concept. A shared semantic model avoids duplicating core business logic in many PBIX models."
    ]
  },
  {
    "id": "q004",
    "topic": "storage_connections",
    "type": "single",
    "stem": "Several teams must build reports from the same centrally governed business measures and relationships.\n\nWhich option is the best answer?",
    "options": [
      "DirectLake",
      "Shared semantic model",
      "Update source credentials",
      "DirectQuery"
    ],
    "correct": 1,
    "explanation": "A shared semantic model avoids duplicating core business logic in many PBIX models.",
    "optionNotes": [
      "Not best here: DirectLake addresses a different requirement in this concept. DirectLake is the Fabric storage mode designed around OneLake data.",
      "Correct: A shared semantic model avoids duplicating core business logic in many PBIX models.",
      "Not best here: Update source credentials addresses a different requirement in this concept. The connectivity path exists; the changed authentication secret should be updated first.",
      "Not best here: DirectQuery addresses a different requirement in this concept. DirectQuery keeps data at the source and can query it during report interaction."
    ]
  },
  {
    "id": "q005",
    "topic": "storage_connections",
    "type": "single",
    "stem": "A scheduled SQL refresh worked yesterday. The gateway is online, but the database password was changed today.\n\nWhich option is the best answer?",
    "options": [
      "DirectQuery",
      "Import",
      "DirectLake",
      "Update source credentials"
    ],
    "correct": 3,
    "explanation": "The connectivity path exists; the changed authentication secret should be updated first.",
    "optionNotes": [
      "Not best here: DirectQuery addresses a different requirement in this concept. DirectQuery keeps data at the source and can query it during report interaction.",
      "Not best here: Import addresses a different requirement in this concept. Import is usually the best starting point when refresh latency is acceptable and fast in-memory interaction is desired.",
      "Not best here: DirectLake addresses a different requirement in this concept. DirectLake is the Fabric storage mode designed around OneLake data.",
      "Correct: The connectivity path exists; the changed authentication secret should be updated first."
    ]
  },
  {
    "id": "q006",
    "topic": "profiling_types",
    "type": "single",
    "stem": "CustomerID appears unique in the profiling results, but the profile is currently based only on the first 1,000 rows and uniqueness must be confirmed.\n\nWhich option is the best answer?",
    "options": [
      "Change Type using Locale",
      "Investigate duplicate dimension keys",
      "Replace Errors",
      "Profile the entire dataset"
    ],
    "correct": 3,
    "explanation": "Switch profiling to the entire dataset before making a full-table conclusion.",
    "optionNotes": [
      "Not best here: Change Type using Locale addresses a different requirement in this concept. Locale-aware conversion is the safest way to interpret ambiguous regional formats.",
      "Not best here: Investigate duplicate dimension keys addresses a different requirement in this concept. The intended one-side business key must be unique; investigate and resolve unexpected duplicates.",
      "Not best here: Replace Errors addresses a different requirement in this concept. Replace Errors keeps the rows, unlike Remove Errors.",
      "Correct: Switch profiling to the entire dataset before making a full-table conclusion."
    ]
  },
  {
    "id": "q007",
    "topic": "profiling_types",
    "type": "single",
    "stem": "A transformation creates errors in a column, but every business row must remain in the dataset.\n\nWhich option is the best answer?",
    "options": [
      "Investigate duplicate dimension keys",
      "Profile the entire dataset",
      "Replace Errors",
      "Text data type"
    ],
    "correct": 2,
    "explanation": "Replace Errors keeps the rows, unlike Remove Errors.",
    "optionNotes": [
      "Not best here: Investigate duplicate dimension keys addresses a different requirement in this concept. The intended one-side business key must be unique; investigate and resolve unexpected duplicates.",
      "Not best here: Profile the entire dataset addresses a different requirement in this concept. Switch profiling to the entire dataset before making a full-table conclusion.",
      "Correct: Replace Errors keeps the rows, unlike Remove Errors.",
      "Not best here: Text data type addresses a different requirement in this concept. Text preserves the identifier format and avoids meaningless numeric aggregation."
    ]
  },
  {
    "id": "q008",
    "topic": "profiling_types",
    "type": "single",
    "stem": "A text date such as 03/04/2026 must be interpreted using day/month/year rather than month/day/year.\n\nWhich option is the best answer?",
    "options": [
      "Change Type using Locale",
      "Replace Errors",
      "Investigate duplicate dimension keys",
      "Text data type"
    ],
    "correct": 0,
    "explanation": "Locale-aware conversion is the safest way to interpret ambiguous regional formats.",
    "optionNotes": [
      "Correct: Locale-aware conversion is the safest way to interpret ambiguous regional formats.",
      "Not best here: Replace Errors addresses a different requirement in this concept. Replace Errors keeps the rows, unlike Remove Errors.",
      "Not best here: Investigate duplicate dimension keys addresses a different requirement in this concept. The intended one-side business key must be unique; investigate and resolve unexpected duplicates.",
      "Not best here: Text data type addresses a different requirement in this concept. Text preserves the identifier format and avoids meaningless numeric aggregation."
    ]
  },
  {
    "id": "q009",
    "topic": "profiling_types",
    "type": "single",
    "stem": "A postal code such as 00124 must retain its leading zeros and should never be summed.\n\nWhich option is the best answer?",
    "options": [
      "Replace Errors",
      "Text data type",
      "Profile the entire dataset",
      "Investigate duplicate dimension keys"
    ],
    "correct": 1,
    "explanation": "Text preserves the identifier format and avoids meaningless numeric aggregation.",
    "optionNotes": [
      "Not best here: Replace Errors addresses a different requirement in this concept. Replace Errors keeps the rows, unlike Remove Errors.",
      "Correct: Text preserves the identifier format and avoids meaningless numeric aggregation.",
      "Not best here: Profile the entire dataset addresses a different requirement in this concept. Switch profiling to the entire dataset before making a full-table conclusion.",
      "Not best here: Investigate duplicate dimension keys addresses a different requirement in this concept. The intended one-side business key must be unique; investigate and resolve unexpected duplicates."
    ]
  },
  {
    "id": "q010",
    "topic": "profiling_types",
    "type": "single",
    "stem": "A customer dimension is intended to be on the one side of a relationship, but profiling finds repeated CustomerID values.\n\nWhich option is the best answer?",
    "options": [
      "Change Type using Locale",
      "Text data type",
      "Profile the entire dataset",
      "Investigate duplicate dimension keys"
    ],
    "correct": 3,
    "explanation": "The intended one-side business key must be unique; investigate and resolve unexpected duplicates.",
    "optionNotes": [
      "Not best here: Change Type using Locale addresses a different requirement in this concept. Locale-aware conversion is the safest way to interpret ambiguous regional formats.",
      "Not best here: Text data type addresses a different requirement in this concept. Text preserves the identifier format and avoids meaningless numeric aggregation.",
      "Not best here: Profile the entire dataset addresses a different requirement in this concept. Switch profiling to the entire dataset before making a full-table conclusion.",
      "Correct: The intended one-side business key must be unique; investigate and resolve unexpected duplicates."
    ]
  },
  {
    "id": "q011",
    "topic": "transformations_m",
    "type": "single",
    "stem": "Create a new RiskBand column using simple if/then business rules without hand-writing M.\n\nWhich option is the best answer?",
    "options": [
      "Custom Column",
      "Conditional Column",
      "Unpivot Other Columns",
      "Pivot"
    ],
    "correct": 1,
    "explanation": "Conditional Column is the direct UI feature for rule-based values.",
    "optionNotes": [
      "Not best here: Custom Column addresses a different requirement in this concept. Custom Column is appropriate when an expression must be written.",
      "Correct: Conditional Column is the direct UI feature for rule-based values.",
      "Not best here: Unpivot Other Columns addresses a different requirement in this concept. Unpivot Other Columns keeps identifier columns fixed while turning current and future period columns into rows.",
      "Not best here: Pivot addresses a different requirement in this concept. Pivot converts row values into columns."
    ]
  },
  {
    "id": "q012",
    "topic": "transformations_m",
    "type": "single",
    "stem": "Create Revenue as Quantity multiplied by UnitPrice by entering an M expression.\n\nWhich option is the best answer?",
    "options": [
      "Unpivot Other Columns",
      "Custom Column",
      "Pivot",
      "Table.SelectRows with each"
    ],
    "correct": 1,
    "explanation": "Custom Column is appropriate when an expression must be written.",
    "optionNotes": [
      "Not best here: Unpivot Other Columns addresses a different requirement in this concept. Unpivot Other Columns keeps identifier columns fixed while turning current and future period columns into rows.",
      "Correct: Custom Column is appropriate when an expression must be written.",
      "Not best here: Pivot addresses a different requirement in this concept. Pivot converts row values into columns.",
      "Not best here: Table.SelectRows with each addresses a different requirement in this concept. Table.SelectRows uses a row predicate, commonly written with each."
    ]
  },
  {
    "id": "q013",
    "topic": "transformations_m",
    "type": "single",
    "stem": "A spreadsheet has Customer plus Jan, Feb, Mar, and new month columns will be added in future. You need Month and Amount rows.\n\nWhich option is the best answer?",
    "options": [
      "Custom Column",
      "Pivot",
      "Conditional Column",
      "Unpivot Other Columns"
    ],
    "correct": 3,
    "explanation": "Unpivot Other Columns keeps identifier columns fixed while turning current and future period columns into rows.",
    "optionNotes": [
      "Not best here: Custom Column addresses a different requirement in this concept. Custom Column is appropriate when an expression must be written.",
      "Not best here: Pivot addresses a different requirement in this concept. Pivot converts row values into columns.",
      "Not best here: Conditional Column addresses a different requirement in this concept. Conditional Column is the direct UI feature for rule-based values.",
      "Correct: Unpivot Other Columns keeps identifier columns fixed while turning current and future period columns into rows."
    ]
  },
  {
    "id": "q014",
    "topic": "transformations_m",
    "type": "single",
    "stem": "A Status column contains Open, Closed and Pending values and each status must become its own output column.\n\nWhich option is the best answer?",
    "options": [
      "Pivot",
      "Conditional Column",
      "Custom Column",
      "Table.SelectRows with each"
    ],
    "correct": 0,
    "explanation": "Pivot converts row values into columns.",
    "optionNotes": [
      "Correct: Pivot converts row values into columns.",
      "Not best here: Conditional Column addresses a different requirement in this concept. Conditional Column is the direct UI feature for rule-based values.",
      "Not best here: Custom Column addresses a different requirement in this concept. Custom Column is appropriate when an expression must be written.",
      "Not best here: Table.SelectRows with each addresses a different requirement in this concept. Table.SelectRows uses a row predicate, commonly written with each."
    ]
  },
  {
    "id": "q015",
    "topic": "transformations_m",
    "type": "single",
    "stem": "You need an M expression that filters a table to rows where Amount is at least 500.\n\nWhich option is the best answer?",
    "options": [
      "Unpivot Other Columns",
      "Table.SelectRows with each",
      "Custom Column",
      "Pivot"
    ],
    "correct": 1,
    "explanation": "Table.SelectRows uses a row predicate, commonly written with each.",
    "optionNotes": [
      "Not best here: Unpivot Other Columns addresses a different requirement in this concept. Unpivot Other Columns keeps identifier columns fixed while turning current and future period columns into rows.",
      "Correct: Table.SelectRows uses a row predicate, commonly written with each.",
      "Not best here: Custom Column addresses a different requirement in this concept. Custom Column is appropriate when an expression must be written.",
      "Not best here: Pivot addresses a different requirement in this concept. Pivot converts row values into columns."
    ]
  },
  {
    "id": "q016",
    "topic": "merge_append",
    "type": "single",
    "stem": "Twelve monthly tables have the same columns and must become one annual fact table.\n\nWhich option is the best answer?",
    "options": [
      "Append",
      "Left Anti join",
      "Folder connector + Combine Files",
      "Full Outer join"
    ],
    "correct": 0,
    "explanation": "Append stacks compatible rows.",
    "optionNotes": [
      "Correct: Append stacks compatible rows.",
      "Not best here: Left Anti join addresses a different requirement in this concept. Left Anti returns left-side rows with no match.",
      "Not best here: Folder connector + Combine Files addresses a different requirement in this concept. The folder pattern is designed for recurring same-schema file ingestion.",
      "Not best here: Full Outer join addresses a different requirement in this concept. Full Outer returns all rows from both sides."
    ]
  },
  {
    "id": "q017",
    "topic": "merge_append",
    "type": "single",
    "stem": "CustomerName must be added to Sales by matching CustomerID.\n\nWhich option is the best answer?",
    "options": [
      "Folder connector + Combine Files",
      "Append",
      "Merge",
      "Left Anti join"
    ],
    "correct": 2,
    "explanation": "Merge joins columns based on key values.",
    "optionNotes": [
      "Not best here: Folder connector + Combine Files addresses a different requirement in this concept. The folder pattern is designed for recurring same-schema file ingestion.",
      "Not best here: Append addresses a different requirement in this concept. Append stacks compatible rows.",
      "Correct: Merge joins columns based on key values.",
      "Not best here: Left Anti join addresses a different requirement in this concept. Left Anti returns left-side rows with no match."
    ]
  },
  {
    "id": "q018",
    "topic": "merge_append",
    "type": "single",
    "stem": "Return customers that exist in Customers but have no matching rows in Orders.\n\nWhich option is the best answer?",
    "options": [
      "Merge",
      "Append",
      "Left Anti join",
      "Full Outer join"
    ],
    "correct": 2,
    "explanation": "Left Anti returns left-side rows with no match.",
    "optionNotes": [
      "Not best here: Merge addresses a different requirement in this concept. Merge joins columns based on key values.",
      "Not best here: Append addresses a different requirement in this concept. Append stacks compatible rows.",
      "Correct: Left Anti returns left-side rows with no match.",
      "Not best here: Full Outer join addresses a different requirement in this concept. Full Outer returns all rows from both sides."
    ]
  },
  {
    "id": "q019",
    "topic": "merge_append",
    "type": "single",
    "stem": "Reconcile two lists and retain matched rows plus unmatched rows from both lists.\n\nWhich option is the best answer?",
    "options": [
      "Left Anti join",
      "Append",
      "Merge",
      "Full Outer join"
    ],
    "correct": 3,
    "explanation": "Full Outer returns all rows from both sides.",
    "optionNotes": [
      "Not best here: Left Anti join addresses a different requirement in this concept. Left Anti returns left-side rows with no match.",
      "Not best here: Append addresses a different requirement in this concept. Append stacks compatible rows.",
      "Not best here: Merge addresses a different requirement in this concept. Merge joins columns based on key values.",
      "Correct: Full Outer returns all rows from both sides."
    ]
  },
  {
    "id": "q020",
    "topic": "merge_append",
    "type": "single",
    "stem": "A folder receives a new same-schema CSV every month and the refresh should automatically include future files.\n\nWhich option is the best answer?",
    "options": [
      "Folder connector + Combine Files",
      "Merge",
      "Left Anti join",
      "Append"
    ],
    "correct": 0,
    "explanation": "The folder pattern is designed for recurring same-schema file ingestion.",
    "optionNotes": [
      "Correct: The folder pattern is designed for recurring same-schema file ingestion.",
      "Not best here: Merge addresses a different requirement in this concept. Merge joins columns based on key values.",
      "Not best here: Left Anti join addresses a different requirement in this concept. Left Anti returns left-side rows with no match.",
      "Not best here: Append addresses a different requirement in this concept. Append stacks compatible rows."
    ]
  },
  {
    "id": "q021",
    "topic": "query_folding",
    "type": "single",
    "stem": "A SQL query stops folding after a custom step, while a later date filter dramatically reduces rows.\n\nWhich option is the best answer?",
    "options": [
      "View Native Query / folding indicator",
      "Remove an unnecessary Index step",
      "Move the restrictive filter earlier",
      "Remove unused columns early"
    ],
    "correct": 2,
    "explanation": "Move the filter before the folding break if the logic remains equivalent.",
    "optionNotes": [
      "Not best here: View Native Query / folding indicator addresses a different requirement in this concept. Use the available native query/folding inspection feature.",
      "Not best here: Remove an unnecessary Index step addresses a different requirement in this concept. Removing unnecessary work can improve refresh and preserve folding opportunities.",
      "Correct: Move the filter before the folding break if the logic remains equivalent.",
      "Not best here: Remove unused columns early addresses a different requirement in this concept. Selecting only required columns early reduces transfer and processing."
    ]
  },
  {
    "id": "q022",
    "topic": "query_folding",
    "type": "single",
    "stem": "A source has 80 columns but the model needs only 12 and the source can perform projection.\n\nWhich option is the best answer?",
    "options": [
      "Remove an unnecessary Index step",
      "Move the restrictive filter earlier",
      "Remove unused columns early",
      "Source-side filtering"
    ],
    "correct": 2,
    "explanation": "Selecting only required columns early reduces transfer and processing.",
    "optionNotes": [
      "Not best here: Remove an unnecessary Index step addresses a different requirement in this concept. Removing unnecessary work can improve refresh and preserve folding opportunities.",
      "Not best here: Move the restrictive filter earlier addresses a different requirement in this concept. Move the filter before the folding break if the logic remains equivalent.",
      "Correct: Selecting only required columns early reduces transfer and processing.",
      "Not best here: Source-side filtering addresses a different requirement in this concept. Delegating a supported restrictive filter to the source reduces transferred data."
    ]
  },
  {
    "id": "q023",
    "topic": "query_folding",
    "type": "single",
    "stem": "You need to verify whether supported Power Query steps are being delegated to SQL.\n\nWhich option is the best answer?",
    "options": [
      "Remove an unnecessary Index step",
      "Move the restrictive filter earlier",
      "Source-side filtering",
      "View Native Query / folding indicator"
    ],
    "correct": 3,
    "explanation": "Use the available native query/folding inspection feature.",
    "optionNotes": [
      "Not best here: Remove an unnecessary Index step addresses a different requirement in this concept. Removing unnecessary work can improve refresh and preserve folding opportunities.",
      "Not best here: Move the restrictive filter earlier addresses a different requirement in this concept. Move the filter before the folding break if the logic remains equivalent.",
      "Not best here: Source-side filtering addresses a different requirement in this concept. Delegating a supported restrictive filter to the source reduces transferred data.",
      "Correct: Use the available native query/folding inspection feature."
    ]
  },
  {
    "id": "q024",
    "topic": "query_folding",
    "type": "single",
    "stem": "An Index column is not used anywhere and appears before important source filters in a large query.\n\nWhich option is the best answer?",
    "options": [
      "Source-side filtering",
      "Remove an unnecessary Index step",
      "Remove unused columns early",
      "Move the restrictive filter earlier"
    ],
    "correct": 1,
    "explanation": "Removing unnecessary work can improve refresh and preserve folding opportunities.",
    "optionNotes": [
      "Not best here: Source-side filtering addresses a different requirement in this concept. Delegating a supported restrictive filter to the source reduces transferred data.",
      "Correct: Removing unnecessary work can improve refresh and preserve folding opportunities.",
      "Not best here: Remove unused columns early addresses a different requirement in this concept. Selecting only required columns early reduces transfer and processing.",
      "Not best here: Move the restrictive filter earlier addresses a different requirement in this concept. Move the filter before the folding break if the logic remains equivalent."
    ]
  },
  {
    "id": "q025",
    "topic": "query_folding",
    "type": "single",
    "stem": "A relational source contains 200 million rows but only the latest year is required.\n\nWhich option is the best answer?",
    "options": [
      "Source-side filtering",
      "Remove unused columns early",
      "Move the restrictive filter earlier",
      "View Native Query / folding indicator"
    ],
    "correct": 0,
    "explanation": "Delegating a supported restrictive filter to the source reduces transferred data.",
    "optionNotes": [
      "Correct: Delegating a supported restrictive filter to the source reduces transferred data.",
      "Not best here: Remove unused columns early addresses a different requirement in this concept. Selecting only required columns early reduces transfer and processing.",
      "Not best here: Move the restrictive filter earlier addresses a different requirement in this concept. Move the filter before the folding break if the logic remains equivalent.",
      "Not best here: View Native Query / folding indicator addresses a different requirement in this concept. Use the available native query/folding inspection feature."
    ]
  },
  {
    "id": "q026",
    "topic": "refresh_parameters",
    "type": "single",
    "stem": "A single query must switch cleanly between DEV-SQL and PROD-SQL without rewriting the M source expression.\n\nWhich option is the best answer?",
    "options": [
      "Reference query",
      "Disable Enable load",
      "Detect data changes",
      "Power Query parameter"
    ],
    "correct": 3,
    "explanation": "A Power Query parameter can hold the server/environment value.",
    "optionNotes": [
      "Not best here: Reference query addresses a different requirement in this concept. Reference starts from the upstream query output and follows upstream changes.",
      "Not best here: Disable Enable load addresses a different requirement in this concept. Disable loading for helper/staging queries.",
      "Not best here: Detect data changes addresses a different requirement in this concept. Detect data changes can use the modification timestamp to avoid needless partition refresh.",
      "Correct: A Power Query parameter can hold the server/environment value."
    ]
  },
  {
    "id": "q027",
    "topic": "refresh_parameters",
    "type": "single",
    "stem": "A large fact table needs policy-based incremental refresh in Power BI.\n\nWhich option is the best answer?",
    "options": [
      "Power Query parameter",
      "Reference query",
      "Disable Enable load",
      "RangeStart and RangeEnd"
    ],
    "correct": 3,
    "explanation": "Incremental refresh uses these Date/Time parameters to define filtered ranges.",
    "optionNotes": [
      "Not best here: Power Query parameter addresses a different requirement in this concept. A Power Query parameter can hold the server/environment value.",
      "Not best here: Reference query addresses a different requirement in this concept. Reference starts from the upstream query output and follows upstream changes.",
      "Not best here: Disable Enable load addresses a different requirement in this concept. Disable loading for helper/staging queries.",
      "Correct: Incremental refresh uses these Date/Time parameters to define filtered ranges."
    ]
  },
  {
    "id": "q028",
    "topic": "refresh_parameters",
    "type": "single",
    "stem": "Rows from old periods can be updated and a LastModifiedDate column records changes.\n\nWhich option is the best answer?",
    "options": [
      "Disable Enable load",
      "Reference query",
      "RangeStart and RangeEnd",
      "Detect data changes"
    ],
    "correct": 3,
    "explanation": "Detect data changes can use the modification timestamp to avoid needless partition refresh.",
    "optionNotes": [
      "Not best here: Disable Enable load addresses a different requirement in this concept. Disable loading for helper/staging queries.",
      "Not best here: Reference query addresses a different requirement in this concept. Reference starts from the upstream query output and follows upstream changes.",
      "Not best here: RangeStart and RangeEnd addresses a different requirement in this concept. Incremental refresh uses these Date/Time parameters to define filtered ranges.",
      "Correct: Detect data changes can use the modification timestamp to avoid needless partition refresh."
    ]
  },
  {
    "id": "q029",
    "topic": "refresh_parameters",
    "type": "single",
    "stem": "A staging query feeds three final queries but must not appear as a model table.\n\nWhich option is the best answer?",
    "options": [
      "Disable Enable load",
      "Reference query",
      "RangeStart and RangeEnd",
      "Detect data changes"
    ],
    "correct": 0,
    "explanation": "Disable loading for helper/staging queries.",
    "optionNotes": [
      "Correct: Disable loading for helper/staging queries.",
      "Not best here: Reference query addresses a different requirement in this concept. Reference starts from the upstream query output and follows upstream changes.",
      "Not best here: RangeStart and RangeEnd addresses a different requirement in this concept. Incremental refresh uses these Date/Time parameters to define filtered ranges.",
      "Not best here: Detect data changes addresses a different requirement in this concept. Detect data changes can use the modification timestamp to avoid needless partition refresh."
    ]
  },
  {
    "id": "q030",
    "topic": "refresh_parameters",
    "type": "single",
    "stem": "Three downstream queries should begin from one staging query and inherit future staging changes.\n\nWhich option is the best answer?",
    "options": [
      "Power Query parameter",
      "RangeStart and RangeEnd",
      "Reference query",
      "Disable Enable load"
    ],
    "correct": 2,
    "explanation": "Reference starts from the upstream query output and follows upstream changes.",
    "optionNotes": [
      "Not best here: Power Query parameter addresses a different requirement in this concept. A Power Query parameter can hold the server/environment value.",
      "Not best here: RangeStart and RangeEnd addresses a different requirement in this concept. Incremental refresh uses these Date/Time parameters to define filtered ranges.",
      "Correct: Reference starts from the upstream query output and follows upstream changes.",
      "Not best here: Disable Enable load addresses a different requirement in this concept. Disable loading for helper/staging queries."
    ]
  },
  {
    "id": "q031",
    "topic": "star_grain",
    "type": "single",
    "stem": "You want a maintainable analytical model with clear Product, Customer and Date dimensions surrounding Sales.\n\nWhich option is the best answer?",
    "options": [
      "Dimension table",
      "Star schema",
      "Define the fact grain",
      "Keep transaction-level detail"
    ],
    "correct": 1,
    "explanation": "A star schema is the standard Power BI analytical design.",
    "optionNotes": [
      "Not best here: Dimension table addresses a different requirement in this concept. Descriptive product attributes belong in a dimension.",
      "Correct: A star schema is the standard Power BI analytical design.",
      "Not best here: Define the fact grain addresses a different requirement in this concept. Grain is foundational to correct facts, keys and aggregations.",
      "Not best here: Keep transaction-level detail addresses a different requirement in this concept. Pre-aggregating to monthly totals would remove required detail."
    ]
  },
  {
    "id": "q032",
    "topic": "star_grain",
    "type": "single",
    "stem": "Before choosing keys and measures, you must determine exactly what one row in FactSales represents.\n\nWhich option is the best answer?",
    "options": [
      "Star schema",
      "Define the fact grain",
      "Dimension table",
      "Bridge table"
    ],
    "correct": 1,
    "explanation": "Grain is foundational to correct facts, keys and aggregations.",
    "optionNotes": [
      "Not best here: Star schema addresses a different requirement in this concept. A star schema is the standard Power BI analytical design.",
      "Correct: Grain is foundational to correct facts, keys and aggregations.",
      "Not best here: Dimension table addresses a different requirement in this concept. Descriptive product attributes belong in a dimension.",
      "Not best here: Bridge table addresses a different requirement in this concept. A bridge represents the many-to-many association cleanly."
    ]
  },
  {
    "id": "q033",
    "topic": "star_grain",
    "type": "single",
    "stem": "The report must later calculate distinct TransactionID and distinct CustomerID from individual sales events.\n\nWhich option is the best answer?",
    "options": [
      "Bridge table",
      "Keep transaction-level detail",
      "Define the fact grain",
      "Dimension table"
    ],
    "correct": 1,
    "explanation": "Pre-aggregating to monthly totals would remove required detail.",
    "optionNotes": [
      "Not best here: Bridge table addresses a different requirement in this concept. A bridge represents the many-to-many association cleanly.",
      "Correct: Pre-aggregating to monthly totals would remove required detail.",
      "Not best here: Define the fact grain addresses a different requirement in this concept. Grain is foundational to correct facts, keys and aggregations.",
      "Not best here: Dimension table addresses a different requirement in this concept. Descriptive product attributes belong in a dimension."
    ]
  },
  {
    "id": "q034",
    "topic": "star_grain",
    "type": "single",
    "stem": "ProductName, Brand, Category and Color describe products and should filter sales facts.\n\nWhich option is the best answer?",
    "options": [
      "Dimension table",
      "Define the fact grain",
      "Bridge table",
      "Star schema"
    ],
    "correct": 0,
    "explanation": "Descriptive product attributes belong in a dimension.",
    "optionNotes": [
      "Correct: Descriptive product attributes belong in a dimension.",
      "Not best here: Define the fact grain addresses a different requirement in this concept. Grain is foundational to correct facts, keys and aggregations.",
      "Not best here: Bridge table addresses a different requirement in this concept. A bridge represents the many-to-many association cleanly.",
      "Not best here: Star schema addresses a different requirement in this concept. A star schema is the standard Power BI analytical design."
    ]
  },
  {
    "id": "q035",
    "topic": "star_grain",
    "type": "single",
    "stem": "A consultant can work on many projects and each project can have many consultants; the relationship must be modeled analytically.\n\nWhich option is the best answer?",
    "options": [
      "Keep transaction-level detail",
      "Bridge table",
      "Dimension table",
      "Star schema"
    ],
    "correct": 1,
    "explanation": "A bridge represents the many-to-many association cleanly.",
    "optionNotes": [
      "Not best here: Keep transaction-level detail addresses a different requirement in this concept. Pre-aggregating to monthly totals would remove required detail.",
      "Correct: A bridge represents the many-to-many association cleanly.",
      "Not best here: Dimension table addresses a different requirement in this concept. Descriptive product attributes belong in a dimension.",
      "Not best here: Star schema addresses a different requirement in this concept. A star schema is the standard Power BI analytical design."
    ]
  },
  {
    "id": "q036",
    "topic": "relationships",
    "type": "single",
    "stem": "Customer contains one unique row per customer and Sales contains many transactions per customer.\n\nWhich option is the best answer?",
    "options": [
      "Use bidirectional only for a justified scenario",
      "Single-direction filtering",
      "One-to-many relationship",
      "Do not expect Product slicer to shrink"
    ],
    "correct": 2,
    "explanation": "The dimension-to-fact pattern is one customer to many sales rows.",
    "optionNotes": [
      "Not best here: Use bidirectional only for a justified scenario addresses a different requirement in this concept. Bidirectional is a targeted tool, not the default.",
      "Not best here: Single-direction filtering addresses a different requirement in this concept. Single direction from dimension to fact is the default best practice.",
      "Correct: The dimension-to-fact pattern is one customer to many sales rows.",
      "Not best here: Do not expect Product slicer to shrink addresses a different requirement in this concept. The Customer filter reaches Sales but cannot propagate backward from Sales to Product."
    ]
  },
  {
    "id": "q037",
    "topic": "relationships",
    "type": "single",
    "stem": "A normal star model needs Product selections to filter Sales without allowing Sales to filter Product back.\n\nWhich option is the best answer?",
    "options": [
      "Use bidirectional only for a justified scenario",
      "One-to-many relationship",
      "Investigate duplicates on the one side",
      "Single-direction filtering"
    ],
    "correct": 3,
    "explanation": "Single direction from dimension to fact is the default best practice.",
    "optionNotes": [
      "Not best here: Use bidirectional only for a justified scenario addresses a different requirement in this concept. Bidirectional is a targeted tool, not the default.",
      "Not best here: One-to-many relationship addresses a different requirement in this concept. The dimension-to-fact pattern is one customer to many sales rows.",
      "Not best here: Investigate duplicates on the one side addresses a different requirement in this concept. The one-side key must be made truly unique or the model design reconsidered.",
      "Correct: Single direction from dimension to fact is the default best practice."
    ]
  },
  {
    "id": "q038",
    "topic": "relationships",
    "type": "single",
    "stem": "Power BI cannot create the intended one-to-many relationship because CustomerID repeats in Customer.\n\nWhich option is the best answer?",
    "options": [
      "Investigate duplicates on the one side",
      "Use bidirectional only for a justified scenario",
      "Single-direction filtering",
      "One-to-many relationship"
    ],
    "correct": 0,
    "explanation": "The one-side key must be made truly unique or the model design reconsidered.",
    "optionNotes": [
      "Correct: The one-side key must be made truly unique or the model design reconsidered.",
      "Not best here: Use bidirectional only for a justified scenario addresses a different requirement in this concept. Bidirectional is a targeted tool, not the default.",
      "Not best here: Single-direction filtering addresses a different requirement in this concept. Single direction from dimension to fact is the default best practice.",
      "Not best here: One-to-many relationship addresses a different requirement in this concept. The dimension-to-fact pattern is one customer to many sales rows."
    ]
  },
  {
    "id": "q039",
    "topic": "relationships",
    "type": "single",
    "stem": "Customer → Sales ← Product uses single-direction relationships. A Country selection is made in Customer.\n\nWhich option is the best answer?",
    "options": [
      "Use bidirectional only for a justified scenario",
      "Single-direction filtering",
      "One-to-many relationship",
      "Do not expect Product slicer to shrink"
    ],
    "correct": 3,
    "explanation": "The Customer filter reaches Sales but cannot propagate backward from Sales to Product.",
    "optionNotes": [
      "Not best here: Use bidirectional only for a justified scenario addresses a different requirement in this concept. Bidirectional is a targeted tool, not the default.",
      "Not best here: Single-direction filtering addresses a different requirement in this concept. Single direction from dimension to fact is the default best practice.",
      "Not best here: One-to-many relationship addresses a different requirement in this concept. The dimension-to-fact pattern is one customer to many sales rows.",
      "Correct: The Customer filter reaches Sales but cannot propagate backward from Sales to Product."
    ]
  },
  {
    "id": "q040",
    "topic": "relationships",
    "type": "single",
    "stem": "A specific model requirement genuinely needs filters to propagate both ways and ambiguity has been evaluated.\n\nWhich option is the best answer?",
    "options": [
      "Investigate duplicates on the one side",
      "Use bidirectional only for a justified scenario",
      "One-to-many relationship",
      "Do not expect Product slicer to shrink"
    ],
    "correct": 1,
    "explanation": "Bidirectional is a targeted tool, not the default.",
    "optionNotes": [
      "Not best here: Investigate duplicates on the one side addresses a different requirement in this concept. The one-side key must be made truly unique or the model design reconsidered.",
      "Correct: Bidirectional is a targeted tool, not the default.",
      "Not best here: One-to-many relationship addresses a different requirement in this concept. The dimension-to-fact pattern is one customer to many sales rows.",
      "Not best here: Do not expect Product slicer to shrink addresses a different requirement in this concept. The Customer filter reaches Sales but cannot propagate backward from Sales to Product."
    ]
  },
  {
    "id": "q041",
    "topic": "date_roles",
    "type": "single",
    "stem": "Jan, Feb, Mar must display chronologically instead of alphabetically.\n\nWhich option is the best answer?",
    "options": [
      "Sequential YearMonth sort key",
      "Separate role-playing Date dimensions",
      "USERELATIONSHIP",
      "Sort Month Name by Month Number"
    ],
    "correct": 3,
    "explanation": "Sort by Column with a month-number field.",
    "optionNotes": [
      "Not best here: Sequential YearMonth sort key addresses a different requirement in this concept. A key such as 202501, 202502, … gives unique chronology.",
      "Not best here: Separate role-playing Date dimensions addresses a different requirement in this concept. Independent simultaneous date roles are best represented by separate dimensions.",
      "Not best here: USERELATIONSHIP addresses a different requirement in this concept. USERELATIONSHIP activates the inactive relationship for the calculation.",
      "Correct: Sort by Column with a month-number field."
    ]
  },
  {
    "id": "q042",
    "topic": "date_roles",
    "type": "single",
    "stem": "Jan 2025 through Dec 2026 must sort correctly across years.\n\nWhich option is the best answer?",
    "options": [
      "Sort Month Name by Month Number",
      "USERELATIONSHIP",
      "Sequential YearMonth sort key",
      "Separate role-playing Date dimensions"
    ],
    "correct": 2,
    "explanation": "A key such as 202501, 202502, … gives unique chronology.",
    "optionNotes": [
      "Not best here: Sort Month Name by Month Number addresses a different requirement in this concept. Sort by Column with a month-number field.",
      "Not best here: USERELATIONSHIP addresses a different requirement in this concept. USERELATIONSHIP activates the inactive relationship for the calculation.",
      "Correct: A key such as 202501, 202502, … gives unique chronology.",
      "Not best here: Separate role-playing Date dimensions addresses a different requirement in this concept. Independent simultaneous date roles are best represented by separate dimensions."
    ]
  },
  {
    "id": "q043",
    "topic": "date_roles",
    "type": "single",
    "stem": "Date filters Sales by OrderDate actively, but a measure must calculate sales using the existing inactive ShipDate relationship.\n\nWhich option is the best answer?",
    "options": [
      "Sequential YearMonth sort key",
      "USERELATIONSHIP",
      "Mark/use a common Date table",
      "Sort Month Name by Month Number"
    ],
    "correct": 1,
    "explanation": "USERELATIONSHIP activates the inactive relationship for the calculation.",
    "optionNotes": [
      "Not best here: Sequential YearMonth sort key addresses a different requirement in this concept. A key such as 202501, 202502, … gives unique chronology.",
      "Correct: USERELATIONSHIP activates the inactive relationship for the calculation.",
      "Not best here: Mark/use a common Date table addresses a different requirement in this concept. A common Date table provides reusable calendar attributes and date context.",
      "Not best here: Sort Month Name by Month Number addresses a different requirement in this concept. Sort by Column with a month-number field."
    ]
  },
  {
    "id": "q044",
    "topic": "date_roles",
    "type": "single",
    "stem": "Users need an Order Date slicer and Ship Date slicer that filter independently at the same time.\n\nWhich option is the best answer?",
    "options": [
      "USERELATIONSHIP",
      "Mark/use a common Date table",
      "Sort Month Name by Month Number",
      "Separate role-playing Date dimensions"
    ],
    "correct": 3,
    "explanation": "Independent simultaneous date roles are best represented by separate dimensions.",
    "optionNotes": [
      "Not best here: USERELATIONSHIP addresses a different requirement in this concept. USERELATIONSHIP activates the inactive relationship for the calculation.",
      "Not best here: Mark/use a common Date table addresses a different requirement in this concept. A common Date table provides reusable calendar attributes and date context.",
      "Not best here: Sort Month Name by Month Number addresses a different requirement in this concept. Sort by Column with a month-number field.",
      "Correct: Independent simultaneous date roles are best represented by separate dimensions."
    ]
  },
  {
    "id": "q045",
    "topic": "date_roles",
    "type": "single",
    "stem": "Time intelligence and consistent calendar slicing require a dedicated model date dimension.\n\nWhich option is the best answer?",
    "options": [
      "Sort Month Name by Month Number",
      "USERELATIONSHIP",
      "Mark/use a common Date table",
      "Separate role-playing Date dimensions"
    ],
    "correct": 2,
    "explanation": "A common Date table provides reusable calendar attributes and date context.",
    "optionNotes": [
      "Not best here: Sort Month Name by Month Number addresses a different requirement in this concept. Sort by Column with a month-number field.",
      "Not best here: USERELATIONSHIP addresses a different requirement in this concept. USERELATIONSHIP activates the inactive relationship for the calculation.",
      "Correct: A common Date table provides reusable calendar attributes and date context.",
      "Not best here: Separate role-playing Date dimensions addresses a different requirement in this concept. Independent simultaneous date roles are best represented by separate dimensions."
    ]
  },
  {
    "id": "q046",
    "topic": "calc_objects",
    "type": "single",
    "stem": "Profit Margin % must recalculate when Year, Region and Product slicers change.\n\nWhich option is the best answer?",
    "options": [
      "Power Query/source transformation",
      "Measure",
      "Quick measure",
      "Calculated table"
    ],
    "correct": 1,
    "explanation": "Measures respond dynamically to filter context.",
    "optionNotes": [
      "Not best here: Power Query/source transformation addresses a different requirement in this concept. Static shaping is usually better upstream or in Power Query.",
      "Correct: Measures respond dynamically to filter context.",
      "Not best here: Quick measure addresses a different requirement in this concept. Quick measures generate reusable DAX patterns.",
      "Not best here: Calculated table addresses a different requirement in this concept. Calculated tables are DAX-created model objects."
    ]
  },
  {
    "id": "q047",
    "topic": "calc_objects",
    "type": "single",
    "stem": "Each customer needs a persistent AgeBand category to place on a slicer.\n\nWhich option is the best answer?",
    "options": [
      "Quick measure",
      "Calculated column",
      "Measure",
      "Power Query/source transformation"
    ],
    "correct": 1,
    "explanation": "A row-level stored category fits a column.",
    "optionNotes": [
      "Not best here: Quick measure addresses a different requirement in this concept. Quick measures generate reusable DAX patterns.",
      "Correct: A row-level stored category fits a column.",
      "Not best here: Measure addresses a different requirement in this concept. Measures respond dynamically to filter context.",
      "Not best here: Power Query/source transformation addresses a different requirement in this concept. Static shaping is usually better upstream or in Power Query."
    ]
  },
  {
    "id": "q048",
    "topic": "calc_objects",
    "type": "single",
    "stem": "A table must be generated in the semantic model using DAX during model processing.\n\nWhich option is the best answer?",
    "options": [
      "Quick measure",
      "Calculated column",
      "Calculated table",
      "Measure"
    ],
    "correct": 2,
    "explanation": "Calculated tables are DAX-created model objects.",
    "optionNotes": [
      "Not best here: Quick measure addresses a different requirement in this concept. Quick measures generate reusable DAX patterns.",
      "Not best here: Calculated column addresses a different requirement in this concept. A row-level stored category fits a column.",
      "Correct: Calculated tables are DAX-created model objects.",
      "Not best here: Measure addresses a different requirement in this concept. Measures respond dynamically to filter context."
    ]
  },
  {
    "id": "q049",
    "topic": "calc_objects",
    "type": "single",
    "stem": "A static cleaned ProductCategory value can be created before load and does not need dynamic report context.\n\nWhich option is the best answer?",
    "options": [
      "Calculated table",
      "Power Query/source transformation",
      "Calculated column",
      "Measure"
    ],
    "correct": 1,
    "explanation": "Static shaping is usually better upstream or in Power Query.",
    "optionNotes": [
      "Not best here: Calculated table addresses a different requirement in this concept. Calculated tables are DAX-created model objects.",
      "Correct: Static shaping is usually better upstream or in Power Query.",
      "Not best here: Calculated column addresses a different requirement in this concept. A row-level stored category fits a column.",
      "Not best here: Measure addresses a different requirement in this concept. Measures respond dynamically to filter context."
    ]
  },
  {
    "id": "q050",
    "topic": "calc_objects",
    "type": "single",
    "stem": "An analyst wants Power BI to generate a supported common DAX pattern that can then be inspected and learned from.\n\nWhich option is the best answer?",
    "options": [
      "Calculated table",
      "Power Query/source transformation",
      "Calculated column",
      "Quick measure"
    ],
    "correct": 3,
    "explanation": "Quick measures generate reusable DAX patterns.",
    "optionNotes": [
      "Not best here: Calculated table addresses a different requirement in this concept. Calculated tables are DAX-created model objects.",
      "Not best here: Power Query/source transformation addresses a different requirement in this concept. Static shaping is usually better upstream or in Power Query.",
      "Not best here: Calculated column addresses a different requirement in this concept. A row-level stored category fits a column.",
      "Correct: Quick measures generate reusable DAX patterns."
    ]
  },
  {
    "id": "q051",
    "topic": "performance_properties",
    "type": "single",
    "stem": "A 150-million-row fact table contains a nearly unique free-form Comment field never used in reports or calculations.\n\nWhich option is the best answer?",
    "options": [
      "DAX query view",
      "Reduce granularity",
      "Performance Analyzer",
      "Remove high-cardinality text"
    ],
    "correct": 3,
    "explanation": "Unused high-cardinality text can consume disproportionate model memory.",
    "optionNotes": [
      "Not best here: DAX query view addresses a different requirement in this concept. DAX query view is the model-side environment for DAX queries.",
      "Not best here: Reduce granularity addresses a different requirement in this concept. Reducing unnecessary distinct values improves compression.",
      "Not best here: Performance Analyzer addresses a different requirement in this concept. Performance Analyzer provides visual/query/render timings.",
      "Correct: Unused high-cardinality text can consume disproportionate model memory."
    ]
  },
  {
    "id": "q052",
    "topic": "performance_properties",
    "type": "single",
    "stem": "A timestamp is stored to milliseconds but all analysis is by Date only.\n\nWhich option is the best answer?",
    "options": [
      "DAX query view",
      "Performance Analyzer",
      "Reduce granularity",
      "Don't summarize"
    ],
    "correct": 2,
    "explanation": "Reducing unnecessary distinct values improves compression.",
    "optionNotes": [
      "Not best here: DAX query view addresses a different requirement in this concept. DAX query view is the model-side environment for DAX queries.",
      "Not best here: Performance Analyzer addresses a different requirement in this concept. Performance Analyzer provides visual/query/render timings.",
      "Correct: Reducing unnecessary distinct values improves compression.",
      "Not best here: Don't summarize addresses a different requirement in this concept. Default summarization should reflect the field's meaning."
    ]
  },
  {
    "id": "q053",
    "topic": "performance_properties",
    "type": "single",
    "stem": "EmployeeID is numeric but is an identifier rather than an additive measure.\n\nWhich option is the best answer?",
    "options": [
      "Reduce granularity",
      "Performance Analyzer",
      "DAX query view",
      "Don't summarize"
    ],
    "correct": 3,
    "explanation": "Default summarization should reflect the field's meaning.",
    "optionNotes": [
      "Not best here: Reduce granularity addresses a different requirement in this concept. Reducing unnecessary distinct values improves compression.",
      "Not best here: Performance Analyzer addresses a different requirement in this concept. Performance Analyzer provides visual/query/render timings.",
      "Not best here: DAX query view addresses a different requirement in this concept. DAX query view is the model-side environment for DAX queries.",
      "Correct: Default summarization should reflect the field's meaning."
    ]
  },
  {
    "id": "q054",
    "topic": "performance_properties",
    "type": "single",
    "stem": "Users report that changing a slicer makes one report page slow and you need to identify the slow visuals/queries.\n\nWhich option is the best answer?",
    "options": [
      "Performance Analyzer",
      "DAX query view",
      "Reduce granularity",
      "Remove high-cardinality text"
    ],
    "correct": 0,
    "explanation": "Performance Analyzer provides visual/query/render timings.",
    "optionNotes": [
      "Correct: Performance Analyzer provides visual/query/render timings.",
      "Not best here: DAX query view addresses a different requirement in this concept. DAX query view is the model-side environment for DAX queries.",
      "Not best here: Reduce granularity addresses a different requirement in this concept. Reducing unnecessary distinct values improves compression.",
      "Not best here: Remove high-cardinality text addresses a different requirement in this concept. Unused high-cardinality text can consume disproportionate model memory."
    ]
  },
  {
    "id": "q055",
    "topic": "performance_properties",
    "type": "single",
    "stem": "You need to author and run an EVALUATE query against the semantic model to inspect grouped measure results.\n\nWhich option is the best answer?",
    "options": [
      "Performance Analyzer",
      "DAX query view",
      "Don't summarize",
      "Remove high-cardinality text"
    ],
    "correct": 1,
    "explanation": "DAX query view is the model-side environment for DAX queries.",
    "optionNotes": [
      "Not best here: Performance Analyzer addresses a different requirement in this concept. Performance Analyzer provides visual/query/render timings.",
      "Correct: DAX query view is the model-side environment for DAX queries.",
      "Not best here: Don't summarize addresses a different requirement in this concept. Default summarization should reflect the field's meaning.",
      "Not best here: Remove high-cardinality text addresses a different requirement in this concept. Unused high-cardinality text can consume disproportionate model memory."
    ]
  },
  {
    "id": "q056",
    "topic": "context_calculate",
    "type": "single",
    "stem": "A measure changes when users choose Year and Region slicers even though the measure is simply SUM(Sales[Amount]).\n\nWhich option is the best answer?",
    "options": [
      "CALCULATE",
      "Filter context",
      "Context transition",
      "Row context"
    ],
    "correct": 1,
    "explanation": "Measures are evaluated under the current filter context.",
    "optionNotes": [
      "Not best here: CALCULATE addresses a different requirement in this concept. CALCULATE modifies filter context before evaluating the expression.",
      "Correct: Measures are evaluated under the current filter context.",
      "Not best here: Context transition addresses a different requirement in this concept. CALCULATE can convert row context into filter context.",
      "Not best here: Row context addresses a different requirement in this concept. Calculated columns naturally have a current-row context."
    ]
  },
  {
    "id": "q057",
    "topic": "context_calculate",
    "type": "single",
    "stem": "A calculated column evaluates an expression for the current Sales row.\n\nWhich option is the best answer?",
    "options": [
      "Row context",
      "No extra CALCULATE required",
      "Filter context",
      "Context transition"
    ],
    "correct": 0,
    "explanation": "Calculated columns naturally have a current-row context.",
    "optionNotes": [
      "Correct: Calculated columns naturally have a current-row context.",
      "Not best here: No extra CALCULATE required addresses a different requirement in this concept. A normal measure already respects filter context.",
      "Not best here: Filter context addresses a different requirement in this concept. Measures are evaluated under the current filter context.",
      "Not best here: Context transition addresses a different requirement in this concept. CALCULATE can convert row context into filter context."
    ]
  },
  {
    "id": "q058",
    "topic": "context_calculate",
    "type": "single",
    "stem": "A measure must return Total Sales only for Product[Color] = Blue while preserving other relevant filters.\n\nWhich option is the best answer?",
    "options": [
      "Row context",
      "CALCULATE",
      "No extra CALCULATE required",
      "Context transition"
    ],
    "correct": 1,
    "explanation": "CALCULATE modifies filter context before evaluating the expression.",
    "optionNotes": [
      "Not best here: Row context addresses a different requirement in this concept. Calculated columns naturally have a current-row context.",
      "Correct: CALCULATE modifies filter context before evaluating the expression.",
      "Not best here: No extra CALCULATE required addresses a different requirement in this concept. A normal measure already respects filter context.",
      "Not best here: Context transition addresses a different requirement in this concept. CALCULATE can convert row context into filter context."
    ]
  },
  {
    "id": "q059",
    "topic": "context_calculate",
    "type": "single",
    "stem": "Inside row context, the current row must become filters so a measure can be evaluated for that entity.\n\nWhich option is the best answer?",
    "options": [
      "CALCULATE",
      "Context transition",
      "Row context",
      "Filter context"
    ],
    "correct": 1,
    "explanation": "CALCULATE can convert row context into filter context.",
    "optionNotes": [
      "Not best here: CALCULATE addresses a different requirement in this concept. CALCULATE modifies filter context before evaluating the expression.",
      "Correct: CALCULATE can convert row context into filter context.",
      "Not best here: Row context addresses a different requirement in this concept. Calculated columns naturally have a current-row context.",
      "Not best here: Filter context addresses a different requirement in this concept. Measures are evaluated under the current filter context."
    ]
  },
  {
    "id": "q060",
    "topic": "context_calculate",
    "type": "single",
    "stem": "Total Sales = SUM(Sales[Amount]) should respond to report slicers.\n\nWhich option is the best answer?",
    "options": [
      "No extra CALCULATE required",
      "Context transition",
      "CALCULATE",
      "Filter context"
    ],
    "correct": 0,
    "explanation": "A normal measure already respects filter context.",
    "optionNotes": [
      "Correct: A normal measure already respects filter context.",
      "Not best here: Context transition addresses a different requirement in this concept. CALCULATE can convert row context into filter context.",
      "Not best here: CALCULATE addresses a different requirement in this concept. CALCULATE modifies filter context before evaluating the expression.",
      "Not best here: Filter context addresses a different requirement in this concept. Measures are evaluated under the current filter context."
    ]
  },
  {
    "id": "q061",
    "topic": "filters_dax",
    "type": "single",
    "stem": "A matrix needs Category Sales divided by total across categories while preserving Year, Region and Customer Segment filters.\n\nWhich option is the best answer?",
    "options": [
      "REMOVEFILTERS()",
      "KEEPFILTERS",
      "CALCULATE same-column replacement",
      "REMOVEFILTERS(Product[Category])"
    ],
    "correct": 3,
    "explanation": "Remove only the category filter from the denominator.",
    "optionNotes": [
      "Not best here: REMOVEFILTERS() addresses a different requirement in this concept. REMOVEFILTERS with no target clears filters broadly; use it only when that is truly required.",
      "Not best here: KEEPFILTERS addresses a different requirement in this concept. KEEPFILTERS changes replacement behavior to intersection.",
      "Not best here: CALCULATE same-column replacement addresses a different requirement in this concept. The new same-column Boolean filter normally replaces Red with Blue.",
      "Correct: Remove only the category filter from the denominator."
    ]
  },
  {
    "id": "q062",
    "topic": "filters_dax",
    "type": "single",
    "stem": "A CALCULATE filter for Blue products should intersect with any existing Product[Color] filter rather than overwrite it.\n\nWhich option is the best answer?",
    "options": [
      "REMOVEFILTERS()",
      "KEEPFILTERS",
      "CALCULATE same-column replacement",
      "ALLEXCEPT"
    ],
    "correct": 1,
    "explanation": "KEEPFILTERS changes replacement behavior to intersection.",
    "optionNotes": [
      "Not best here: REMOVEFILTERS() addresses a different requirement in this concept. REMOVEFILTERS with no target clears filters broadly; use it only when that is truly required.",
      "Correct: KEEPFILTERS changes replacement behavior to intersection.",
      "Not best here: CALCULATE same-column replacement addresses a different requirement in this concept. The new same-column Boolean filter normally replaces Red with Blue.",
      "Not best here: ALLEXCEPT addresses a different requirement in this concept. ALLEXCEPT preserves only the listed columns within the specified table."
    ]
  },
  {
    "id": "q063",
    "topic": "filters_dax",
    "type": "single",
    "stem": "Remove all filters from Customer except Customer[Region].\n\nWhich option is the best answer?",
    "options": [
      "REMOVEFILTERS(Product[Category])",
      "CALCULATE same-column replacement",
      "KEEPFILTERS",
      "ALLEXCEPT"
    ],
    "correct": 3,
    "explanation": "ALLEXCEPT preserves only the listed columns within the specified table.",
    "optionNotes": [
      "Not best here: REMOVEFILTERS(Product[Category]) addresses a different requirement in this concept. Remove only the category filter from the denominator.",
      "Not best here: CALCULATE same-column replacement addresses a different requirement in this concept. The new same-column Boolean filter normally replaces Red with Blue.",
      "Not best here: KEEPFILTERS addresses a different requirement in this concept. KEEPFILTERS changes replacement behavior to intersection.",
      "Correct: ALLEXCEPT preserves only the listed columns within the specified table."
    ]
  },
  {
    "id": "q064",
    "topic": "filters_dax",
    "type": "single",
    "stem": "The current visual filters Color to Red, but a measure explicitly evaluates Product[Color] = Blue without KEEPFILTERS.\n\nWhich option is the best answer?",
    "options": [
      "ALLEXCEPT",
      "REMOVEFILTERS()",
      "CALCULATE same-column replacement",
      "KEEPFILTERS"
    ],
    "correct": 2,
    "explanation": "The new same-column Boolean filter normally replaces Red with Blue.",
    "optionNotes": [
      "Not best here: ALLEXCEPT addresses a different requirement in this concept. ALLEXCEPT preserves only the listed columns within the specified table.",
      "Not best here: REMOVEFILTERS() addresses a different requirement in this concept. REMOVEFILTERS with no target clears filters broadly; use it only when that is truly required.",
      "Correct: The new same-column Boolean filter normally replaces Red with Blue.",
      "Not best here: KEEPFILTERS addresses a different requirement in this concept. KEEPFILTERS changes replacement behavior to intersection."
    ]
  },
  {
    "id": "q065",
    "topic": "filters_dax",
    "type": "single",
    "stem": "A denominator intentionally needs the grand total with all current model filters cleared.\n\nWhich option is the best answer?",
    "options": [
      "REMOVEFILTERS(Product[Category])",
      "REMOVEFILTERS()",
      "CALCULATE same-column replacement",
      "KEEPFILTERS"
    ],
    "correct": 1,
    "explanation": "REMOVEFILTERS with no target clears filters broadly; use it only when that is truly required.",
    "optionNotes": [
      "Not best here: REMOVEFILTERS(Product[Category]) addresses a different requirement in this concept. Remove only the category filter from the denominator.",
      "Correct: REMOVEFILTERS with no target clears filters broadly; use it only when that is truly required.",
      "Not best here: CALCULATE same-column replacement addresses a different requirement in this concept. The new same-column Boolean filter normally replaces Red with Blue.",
      "Not best here: KEEPFILTERS addresses a different requirement in this concept. KEEPFILTERS changes replacement behavior to intersection."
    ]
  },
  {
    "id": "q066",
    "topic": "iterators",
    "type": "single",
    "stem": "Revenue must be Quantity × UnitPrice for each row, then summed; there is no Revenue column.\n\nWhich option is the best answer?",
    "options": [
      "VALUES",
      "FILTER",
      "AVERAGEX + VALUES",
      "SUMX"
    ],
    "correct": 3,
    "explanation": "SUMX evaluates a row expression and aggregates the results.",
    "optionNotes": [
      "Not best here: VALUES addresses a different requirement in this concept. VALUES returns distinct visible values.",
      "Not best here: FILTER addresses a different requirement in this concept. FILTER evaluates a condition row by row and returns matching rows.",
      "Not best here: AVERAGEX + VALUES addresses a different requirement in this concept. Iterate the visible customer set and average the measure evaluated per customer.",
      "Correct: SUMX evaluates a row expression and aggregates the results."
    ]
  },
  {
    "id": "q067",
    "topic": "iterators",
    "type": "single",
    "stem": "Calculate each customer's total sales first, then average those customer totals.\n\nWhich option is the best answer?",
    "options": [
      "FILTER",
      "SUM",
      "AVERAGEX + VALUES",
      "SUMX"
    ],
    "correct": 2,
    "explanation": "Iterate the visible customer set and average the measure evaluated per customer.",
    "optionNotes": [
      "Not best here: FILTER addresses a different requirement in this concept. FILTER evaluates a condition row by row and returns matching rows.",
      "Not best here: SUM addresses a different requirement in this concept. SUM is simpler than an iterator when no row expression is needed.",
      "Correct: Iterate the visible customer set and average the measure evaluated per customer.",
      "Not best here: SUMX addresses a different requirement in this concept. SUMX evaluates a row expression and aggregates the results."
    ]
  },
  {
    "id": "q068",
    "topic": "iterators",
    "type": "single",
    "stem": "Return the distinct Product categories currently visible after all report filters.\n\nWhich option is the best answer?",
    "options": [
      "SUM",
      "SUMX",
      "AVERAGEX + VALUES",
      "VALUES"
    ],
    "correct": 3,
    "explanation": "VALUES returns distinct visible values.",
    "optionNotes": [
      "Not best here: SUM addresses a different requirement in this concept. SUM is simpler than an iterator when no row expression is needed.",
      "Not best here: SUMX addresses a different requirement in this concept. SUMX evaluates a row expression and aggregates the results.",
      "Not best here: AVERAGEX + VALUES addresses a different requirement in this concept. Iterate the visible customer set and average the measure evaluated per customer.",
      "Correct: VALUES returns distinct visible values."
    ]
  },
  {
    "id": "q069",
    "topic": "iterators",
    "type": "single",
    "stem": "Create a table expression containing only Sales rows where Amount > 1000.\n\nWhich option is the best answer?",
    "options": [
      "AVERAGEX + VALUES",
      "FILTER",
      "VALUES",
      "SUMX"
    ],
    "correct": 1,
    "explanation": "FILTER evaluates a condition row by row and returns matching rows.",
    "optionNotes": [
      "Not best here: AVERAGEX + VALUES addresses a different requirement in this concept. Iterate the visible customer set and average the measure evaluated per customer.",
      "Correct: FILTER evaluates a condition row by row and returns matching rows.",
      "Not best here: VALUES addresses a different requirement in this concept. VALUES returns distinct visible values.",
      "Not best here: SUMX addresses a different requirement in this concept. SUMX evaluates a row expression and aggregates the results."
    ]
  },
  {
    "id": "q070",
    "topic": "iterators",
    "type": "single",
    "stem": "Add the existing Sales[Amount] column under current filter context.\n\nWhich option is the best answer?",
    "options": [
      "FILTER",
      "AVERAGEX + VALUES",
      "VALUES",
      "SUM"
    ],
    "correct": 3,
    "explanation": "SUM is simpler than an iterator when no row expression is needed.",
    "optionNotes": [
      "Not best here: FILTER addresses a different requirement in this concept. FILTER evaluates a condition row by row and returns matching rows.",
      "Not best here: AVERAGEX + VALUES addresses a different requirement in this concept. Iterate the visible customer set and average the measure evaluated per customer.",
      "Not best here: VALUES addresses a different requirement in this concept. VALUES returns distinct visible values.",
      "Correct: SUM is simpler than an iterator when no row expression is needed."
    ]
  },
  {
    "id": "q071",
    "topic": "variables",
    "type": "single",
    "stem": "A complex measure repeats the same prior-year calculation three times and needs to be made clearer.\n\nWhich option is the best answer?",
    "options": [
      "VAR",
      "DIVIDE",
      "Use variables for debugging/readability",
      "RETURN"
    ],
    "correct": 0,
    "explanation": "Variables improve readability and can reuse an intermediate result.",
    "optionNotes": [
      "Correct: Variables improve readability and can reuse an intermediate result.",
      "Not best here: DIVIDE addresses a different requirement in this concept. DIVIDE safely handles problematic denominators.",
      "Not best here: Use variables for debugging/readability addresses a different requirement in this concept. Naming intermediate results makes DAX easier to inspect and maintain.",
      "Not best here: RETURN addresses a different requirement in this concept. RETURN supplies the final expression after VAR declarations."
    ]
  },
  {
    "id": "q072",
    "topic": "variables",
    "type": "single",
    "stem": "A variable stores [Total Sales] before a later CALCULATE changes context.\n\nWhich option is the best answer?",
    "options": [
      "Stored scalar behavior",
      "RETURN",
      "Use variables for debugging/readability",
      "VAR"
    ],
    "correct": 0,
    "explanation": "The variable keeps the result evaluated where it was defined.",
    "optionNotes": [
      "Correct: The variable keeps the result evaluated where it was defined.",
      "Not best here: RETURN addresses a different requirement in this concept. RETURN supplies the final expression after VAR declarations.",
      "Not best here: Use variables for debugging/readability addresses a different requirement in this concept. Naming intermediate results makes DAX easier to inspect and maintain.",
      "Not best here: VAR addresses a different requirement in this concept. Variables improve readability and can reuse an intermediate result."
    ]
  },
  {
    "id": "q073",
    "topic": "variables",
    "type": "single",
    "stem": "Profit Margin must avoid divide-by-zero errors when Sales is blank or zero.\n\nWhich option is the best answer?",
    "options": [
      "RETURN",
      "Use variables for debugging/readability",
      "Stored scalar behavior",
      "DIVIDE"
    ],
    "correct": 3,
    "explanation": "DIVIDE safely handles problematic denominators.",
    "optionNotes": [
      "Not best here: RETURN addresses a different requirement in this concept. RETURN supplies the final expression after VAR declarations.",
      "Not best here: Use variables for debugging/readability addresses a different requirement in this concept. Naming intermediate results makes DAX easier to inspect and maintain.",
      "Not best here: Stored scalar behavior addresses a different requirement in this concept. The variable keeps the result evaluated where it was defined.",
      "Correct: DIVIDE safely handles problematic denominators."
    ]
  },
  {
    "id": "q074",
    "topic": "variables",
    "type": "single",
    "stem": "After defining CurrentSales and PriorSales variables, the measure must output the final YoY expression.\n\nWhich option is the best answer?",
    "options": [
      "VAR",
      "DIVIDE",
      "Stored scalar behavior",
      "RETURN"
    ],
    "correct": 3,
    "explanation": "RETURN supplies the final expression after VAR declarations.",
    "optionNotes": [
      "Not best here: VAR addresses a different requirement in this concept. Variables improve readability and can reuse an intermediate result.",
      "Not best here: DIVIDE addresses a different requirement in this concept. DIVIDE safely handles problematic denominators.",
      "Not best here: Stored scalar behavior addresses a different requirement in this concept. The variable keeps the result evaluated where it was defined.",
      "Correct: RETURN supplies the final expression after VAR declarations."
    ]
  },
  {
    "id": "q075",
    "topic": "variables",
    "type": "single",
    "stem": "A long measure is hard to understand and contains several logical intermediate steps.\n\nWhich option is the best answer?",
    "options": [
      "VAR",
      "Use variables for debugging/readability",
      "DIVIDE",
      "Stored scalar behavior"
    ],
    "correct": 1,
    "explanation": "Naming intermediate results makes DAX easier to inspect and maintain.",
    "optionNotes": [
      "Not best here: VAR addresses a different requirement in this concept. Variables improve readability and can reuse an intermediate result.",
      "Correct: Naming intermediate results makes DAX easier to inspect and maintain.",
      "Not best here: DIVIDE addresses a different requirement in this concept. DIVIDE safely handles problematic denominators.",
      "Not best here: Stored scalar behavior addresses a different requirement in this concept. The variable keeps the result evaluated where it was defined."
    ]
  },
  {
    "id": "q076",
    "topic": "time_intelligence",
    "type": "single",
    "stem": "Return sales for the same visible dates one year earlier.\n\nWhich option is the best answer?",
    "options": [
      "SAMEPERIODLASTYEAR",
      "DATEADD",
      "Dedicated Date table",
      "(Current - Prior) / Prior"
    ],
    "correct": 0,
    "explanation": "SAMEPERIODLASTYEAR shifts the current date set one year back.",
    "optionNotes": [
      "Correct: SAMEPERIODLASTYEAR shifts the current date set one year back.",
      "Not best here: DATEADD addresses a different requirement in this concept. DATEADD provides a flexible interval shift.",
      "Not best here: Dedicated Date table addresses a different requirement in this concept. A common Date dimension provides a stable date context.",
      "Not best here: (Current - Prior) / Prior addresses a different requirement in this concept. Growth is measured relative to the prior-period baseline."
    ]
  },
  {
    "id": "q077",
    "topic": "time_intelligence",
    "type": "single",
    "stem": "Return the previous month using the current Date context and a one-month shift.\n\nWhich option is the best answer?",
    "options": [
      "Dedicated Date table",
      "TOTALYTD",
      "(Current - Prior) / Prior",
      "DATEADD"
    ],
    "correct": 3,
    "explanation": "DATEADD provides a flexible interval shift.",
    "optionNotes": [
      "Not best here: Dedicated Date table addresses a different requirement in this concept. A common Date dimension provides a stable date context.",
      "Not best here: TOTALYTD addresses a different requirement in this concept. TOTALYTD applies a year-to-date date set.",
      "Not best here: (Current - Prior) / Prior addresses a different requirement in this concept. Growth is measured relative to the prior-period baseline.",
      "Correct: DATEADD provides a flexible interval shift."
    ]
  },
  {
    "id": "q078",
    "topic": "time_intelligence",
    "type": "single",
    "stem": "Return total sales from the start of the year through the current visible date.\n\nWhich option is the best answer?",
    "options": [
      "SAMEPERIODLASTYEAR",
      "DATEADD",
      "(Current - Prior) / Prior",
      "TOTALYTD"
    ],
    "correct": 3,
    "explanation": "TOTALYTD applies a year-to-date date set.",
    "optionNotes": [
      "Not best here: SAMEPERIODLASTYEAR addresses a different requirement in this concept. SAMEPERIODLASTYEAR shifts the current date set one year back.",
      "Not best here: DATEADD addresses a different requirement in this concept. DATEADD provides a flexible interval shift.",
      "Not best here: (Current - Prior) / Prior addresses a different requirement in this concept. Growth is measured relative to the prior-period baseline.",
      "Correct: TOTALYTD applies a year-to-date date set."
    ]
  },
  {
    "id": "q079",
    "topic": "time_intelligence",
    "type": "single",
    "stem": "Calculate the standard percentage growth from prior-year sales to current-year sales.\n\nWhich option is the best answer?",
    "options": [
      "Dedicated Date table",
      "DATEADD",
      "(Current - Prior) / Prior",
      "SAMEPERIODLASTYEAR"
    ],
    "correct": 2,
    "explanation": "Growth is measured relative to the prior-period baseline.",
    "optionNotes": [
      "Not best here: Dedicated Date table addresses a different requirement in this concept. A common Date dimension provides a stable date context.",
      "Not best here: DATEADD addresses a different requirement in this concept. DATEADD provides a flexible interval shift.",
      "Correct: Growth is measured relative to the prior-period baseline.",
      "Not best here: SAMEPERIODLASTYEAR addresses a different requirement in this concept. SAMEPERIODLASTYEAR shifts the current date set one year back."
    ]
  },
  {
    "id": "q080",
    "topic": "time_intelligence",
    "type": "single",
    "stem": "Several time-intelligence measures must work consistently across the model.\n\nWhich option is the best answer?",
    "options": [
      "(Current - Prior) / Prior",
      "TOTALYTD",
      "Dedicated Date table",
      "SAMEPERIODLASTYEAR"
    ],
    "correct": 2,
    "explanation": "A common Date dimension provides a stable date context.",
    "optionNotes": [
      "Not best here: (Current - Prior) / Prior addresses a different requirement in this concept. Growth is measured relative to the prior-period baseline.",
      "Not best here: TOTALYTD addresses a different requirement in this concept. TOTALYTD applies a year-to-date date set.",
      "Correct: A common Date dimension provides a stable date context.",
      "Not best here: SAMEPERIODLASTYEAR addresses a different requirement in this concept. SAMEPERIODLASTYEAR shifts the current date set one year back."
    ]
  },
  {
    "id": "q081",
    "topic": "semiadd_calcgroups",
    "type": "single",
    "stem": "Daily account balances must show month-end balance rather than the sum of all daily balances.\n\nWhich option is the best answer?",
    "options": [
      "EVALUATE",
      "Calculation group",
      "Latest valid snapshot",
      "Last date with fact data"
    ],
    "correct": 2,
    "explanation": "Snapshot balances are semi-additive across time.",
    "optionNotes": [
      "Not best here: EVALUATE addresses a different requirement in this concept. EVALUATE returns table expressions in a DAX query.",
      "Not best here: Calculation group addresses a different requirement in this concept. A calculation group centralizes recurring transformations.",
      "Correct: Snapshot balances are semi-additive across time.",
      "Not best here: Last date with fact data addresses a different requirement in this concept. Closing logic should identify the latest applicable data date."
    ]
  },
  {
    "id": "q082",
    "topic": "semiadd_calcgroups",
    "type": "single",
    "stem": "The Date table extends to Dec 31 but the latest balance snapshot is Dec 28.\n\nWhich option is the best answer?",
    "options": [
      "EVALUATE",
      "Latest valid snapshot",
      "SELECTEDMEASURE()",
      "Last date with fact data"
    ],
    "correct": 3,
    "explanation": "Closing logic should identify the latest applicable data date.",
    "optionNotes": [
      "Not best here: EVALUATE addresses a different requirement in this concept. EVALUATE returns table expressions in a DAX query.",
      "Not best here: Latest valid snapshot addresses a different requirement in this concept. Snapshot balances are semi-additive across time.",
      "Not best here: SELECTEDMEASURE() addresses a different requirement in this concept. SELECTEDMEASURE is designed for calculation groups.",
      "Correct: Closing logic should identify the latest applicable data date."
    ]
  },
  {
    "id": "q083",
    "topic": "semiadd_calcgroups",
    "type": "single",
    "stem": "Thirty base measures each need Current, YTD, Prior Year and YoY variants.\n\nWhich option is the best answer?",
    "options": [
      "Last date with fact data",
      "SELECTEDMEASURE()",
      "Calculation group",
      "EVALUATE"
    ],
    "correct": 2,
    "explanation": "A calculation group centralizes recurring transformations.",
    "optionNotes": [
      "Not best here: Last date with fact data addresses a different requirement in this concept. Closing logic should identify the latest applicable data date.",
      "Not best here: SELECTEDMEASURE() addresses a different requirement in this concept. SELECTEDMEASURE is designed for calculation groups.",
      "Correct: A calculation group centralizes recurring transformations.",
      "Not best here: EVALUATE addresses a different requirement in this concept. EVALUATE returns table expressions in a DAX query."
    ]
  },
  {
    "id": "q084",
    "topic": "semiadd_calcgroups",
    "type": "single",
    "stem": "A calculation item must refer generically to whichever base measure is currently being transformed.\n\nWhich option is the best answer?",
    "options": [
      "EVALUATE",
      "SELECTEDMEASURE()",
      "Last date with fact data",
      "Calculation group"
    ],
    "correct": 1,
    "explanation": "SELECTEDMEASURE is designed for calculation groups.",
    "optionNotes": [
      "Not best here: EVALUATE addresses a different requirement in this concept. EVALUATE returns table expressions in a DAX query.",
      "Correct: SELECTEDMEASURE is designed for calculation groups.",
      "Not best here: Last date with fact data addresses a different requirement in this concept. Closing logic should identify the latest applicable data date.",
      "Not best here: Calculation group addresses a different requirement in this concept. A calculation group centralizes recurring transformations."
    ]
  },
  {
    "id": "q085",
    "topic": "semiadd_calcgroups",
    "type": "single",
    "stem": "A DAX query in DAX query view must return a summarized table result.\n\nWhich option is the best answer?",
    "options": [
      "Calculation group",
      "EVALUATE",
      "Latest valid snapshot",
      "Last date with fact data"
    ],
    "correct": 1,
    "explanation": "EVALUATE returns table expressions in a DAX query.",
    "optionNotes": [
      "Not best here: Calculation group addresses a different requirement in this concept. A calculation group centralizes recurring transformations.",
      "Correct: EVALUATE returns table expressions in a DAX query.",
      "Not best here: Latest valid snapshot addresses a different requirement in this concept. Snapshot balances are semi-additive across time.",
      "Not best here: Last date with fact data addresses a different requirement in this concept. Closing logic should identify the latest applicable data date."
    ]
  },
  {
    "id": "q086",
    "topic": "visual_choice",
    "type": "single",
    "stem": "Show monthly sales movement across the last 24 months.\n\nWhich option is the best answer?",
    "options": [
      "Line chart",
      "Gauge",
      "Matrix",
      "Scatter chart"
    ],
    "correct": 0,
    "explanation": "Line charts emphasize ordered trends over time.",
    "optionNotes": [
      "Correct: Line charts emphasize ordered trends over time.",
      "Not best here: Gauge addresses a different requirement in this concept. Gauge emphasizes progress toward a goal/range.",
      "Not best here: Matrix addresses a different requirement in this concept. Matrix supports hierarchical cross-tab analysis.",
      "Not best here: Scatter chart addresses a different requirement in this concept. Scatter charts compare two numeric axes and reveal relationships."
    ]
  },
  {
    "id": "q087",
    "topic": "visual_choice",
    "type": "single",
    "stem": "Compare total sales across 12 product categories.\n\nWhich option is the best answer?",
    "options": [
      "Gauge",
      "Scatter chart",
      "Line chart",
      "Bar/column chart"
    ],
    "correct": 3,
    "explanation": "Bars/columns provide clear category comparison.",
    "optionNotes": [
      "Not best here: Gauge addresses a different requirement in this concept. Gauge emphasizes progress toward a goal/range.",
      "Not best here: Scatter chart addresses a different requirement in this concept. Scatter charts compare two numeric axes and reveal relationships.",
      "Not best here: Line chart addresses a different requirement in this concept. Line charts emphasize ordered trends over time.",
      "Correct: Bars/columns provide clear category comparison."
    ]
  },
  {
    "id": "q088",
    "topic": "visual_choice",
    "type": "single",
    "stem": "Show Region > Store hierarchy in rows and Year in columns with expand/collapse.\n\nWhich option is the best answer?",
    "options": [
      "Scatter chart",
      "Line chart",
      "Matrix",
      "Gauge"
    ],
    "correct": 2,
    "explanation": "Matrix supports hierarchical cross-tab analysis.",
    "optionNotes": [
      "Not best here: Scatter chart addresses a different requirement in this concept. Scatter charts compare two numeric axes and reveal relationships.",
      "Not best here: Line chart addresses a different requirement in this concept. Line charts emphasize ordered trends over time.",
      "Correct: Matrix supports hierarchical cross-tab analysis.",
      "Not best here: Gauge addresses a different requirement in this concept. Gauge emphasizes progress toward a goal/range."
    ]
  },
  {
    "id": "q089",
    "topic": "visual_choice",
    "type": "single",
    "stem": "Assess the relationship between Advertising Spend and Revenue across campaigns.\n\nWhich option is the best answer?",
    "options": [
      "Gauge",
      "Bar/column chart",
      "Matrix",
      "Scatter chart"
    ],
    "correct": 3,
    "explanation": "Scatter charts compare two numeric axes and reveal relationships.",
    "optionNotes": [
      "Not best here: Gauge addresses a different requirement in this concept. Gauge emphasizes progress toward a goal/range.",
      "Not best here: Bar/column chart addresses a different requirement in this concept. Bars/columns provide clear category comparison.",
      "Not best here: Matrix addresses a different requirement in this concept. Matrix supports hierarchical cross-tab analysis.",
      "Correct: Scatter charts compare two numeric axes and reveal relationships."
    ]
  },
  {
    "id": "q090",
    "topic": "visual_choice",
    "type": "single",
    "stem": "Show current production output against a target and acceptable range.\n\nWhich option is the best answer?",
    "options": [
      "Gauge",
      "Scatter chart",
      "Matrix",
      "Bar/column chart"
    ],
    "correct": 0,
    "explanation": "Gauge emphasizes progress toward a goal/range.",
    "optionNotes": [
      "Correct: Gauge emphasizes progress toward a goal/range.",
      "Not best here: Scatter chart addresses a different requirement in this concept. Scatter charts compare two numeric axes and reveal relationships.",
      "Not best here: Matrix addresses a different requirement in this concept. Matrix supports hierarchical cross-tab analysis.",
      "Not best here: Bar/column chart addresses a different requirement in this concept. Bars/columns provide clear category comparison."
    ]
  },
  {
    "id": "q091",
    "topic": "filters_interactions",
    "type": "single",
    "stem": "Selecting a bar should cause the target visual to show only matching data.\n\nWhich option is the best answer?",
    "options": [
      "Sync slicers",
      "Top N filter",
      "Page-level filter",
      "Filter interaction"
    ],
    "correct": 3,
    "explanation": "Filter restricts the target to matching rows.",
    "optionNotes": [
      "Not best here: Sync slicers addresses a different requirement in this concept. Sync slicers shares slicer state across pages.",
      "Not best here: Top N filter addresses a different requirement in this concept. Top N filters the category set using a ranking measure.",
      "Not best here: Page-level filter addresses a different requirement in this concept. Page-level scope matches the requirement.",
      "Correct: Filter restricts the target to matching rows."
    ]
  },
  {
    "id": "q092",
    "topic": "filters_interactions",
    "type": "single",
    "stem": "Selecting a bar should keep all target categories visible while emphasizing the selected contribution.\n\nWhich option is the best answer?",
    "options": [
      "Sync slicers",
      "Top N filter",
      "Highlight interaction",
      "Filter interaction"
    ],
    "correct": 2,
    "explanation": "Highlight preserves broader visual context.",
    "optionNotes": [
      "Not best here: Sync slicers addresses a different requirement in this concept. Sync slicers shares slicer state across pages.",
      "Not best here: Top N filter addresses a different requirement in this concept. Top N filters the category set using a ranking measure.",
      "Correct: Highlight preserves broader visual context.",
      "Not best here: Filter interaction addresses a different requirement in this concept. Filter restricts the target to matching rows."
    ]
  },
  {
    "id": "q093",
    "topic": "filters_interactions",
    "type": "single",
    "stem": "Show only the ten products with the highest [Sales].\n\nWhich option is the best answer?",
    "options": [
      "Page-level filter",
      "Top N filter",
      "Filter interaction",
      "Sync slicers"
    ],
    "correct": 1,
    "explanation": "Top N filters the category set using a ranking measure.",
    "optionNotes": [
      "Not best here: Page-level filter addresses a different requirement in this concept. Page-level scope matches the requirement.",
      "Correct: Top N filters the category set using a ranking measure.",
      "Not best here: Filter interaction addresses a different requirement in this concept. Filter restricts the target to matching rows.",
      "Not best here: Sync slicers addresses a different requirement in this concept. Sync slicers shares slicer state across pages."
    ]
  },
  {
    "id": "q094",
    "topic": "filters_interactions",
    "type": "single",
    "stem": "The same Year selection must apply to five report pages.\n\nWhich option is the best answer?",
    "options": [
      "Filter interaction",
      "Top N filter",
      "Highlight interaction",
      "Sync slicers"
    ],
    "correct": 3,
    "explanation": "Sync slicers shares slicer state across pages.",
    "optionNotes": [
      "Not best here: Filter interaction addresses a different requirement in this concept. Filter restricts the target to matching rows.",
      "Not best here: Top N filter addresses a different requirement in this concept. Top N filters the category set using a ranking measure.",
      "Not best here: Highlight interaction addresses a different requirement in this concept. Highlight preserves broader visual context.",
      "Correct: Sync slicers shares slicer state across pages."
    ]
  },
  {
    "id": "q095",
    "topic": "filters_interactions",
    "type": "single",
    "stem": "A filter should affect every visual on one page but not other report pages.\n\nWhich option is the best answer?",
    "options": [
      "Page-level filter",
      "Top N filter",
      "Highlight interaction",
      "Sync slicers"
    ],
    "correct": 0,
    "explanation": "Page-level scope matches the requirement.",
    "optionNotes": [
      "Correct: Page-level scope matches the requirement.",
      "Not best here: Top N filter addresses a different requirement in this concept. Top N filters the category set using a ranking measure.",
      "Not best here: Highlight interaction addresses a different requirement in this concept. Highlight preserves broader visual context.",
      "Not best here: Sync slicers addresses a different requirement in this concept. Sync slicers shares slicer state across pages."
    ]
  },
  {
    "id": "q096",
    "topic": "bookmarks_nav",
    "type": "single",
    "stem": "Toggle a help panel on/off while preserving the user's slicer selections.\n\nWhich option is the best answer?",
    "options": [
      "Reset-filters bookmark with Data",
      "Drillthrough",
      "Report page tooltip",
      "Bookmark without Data"
    ],
    "correct": 3,
    "explanation": "Avoid capturing Data so filter state is not reset.",
    "optionNotes": [
      "Not best here: Reset-filters bookmark with Data addresses a different requirement in this concept. The bookmark needs to capture the desired Data state.",
      "Not best here: Drillthrough addresses a different requirement in this concept. Drillthrough passes selected context to a target page.",
      "Not best here: Report page tooltip addresses a different requirement in this concept. Report page tooltips are built for rich hover experiences.",
      "Correct: Avoid capturing Data so filter state is not reset."
    ]
  },
  {
    "id": "q097",
    "topic": "bookmarks_nav",
    "type": "single",
    "stem": "A button must restore the report to a saved default slicer/filter state.\n\nWhich option is the best answer?",
    "options": [
      "Reset-filters bookmark with Data",
      "Drillthrough",
      "Selection pane",
      "Report page tooltip"
    ],
    "correct": 0,
    "explanation": "The bookmark needs to capture the desired Data state.",
    "optionNotes": [
      "Correct: The bookmark needs to capture the desired Data state.",
      "Not best here: Drillthrough addresses a different requirement in this concept. Drillthrough passes selected context to a target page.",
      "Not best here: Selection pane addresses a different requirement in this concept. The Selection pane manages visibility and layering.",
      "Not best here: Report page tooltip addresses a different requirement in this concept. Report page tooltips are built for rich hover experiences."
    ]
  },
  {
    "id": "q098",
    "topic": "bookmarks_nav",
    "type": "single",
    "stem": "Control which overlapping visuals are visible and their layer order.\n\nWhich option is the best answer?",
    "options": [
      "Bookmark without Data",
      "Reset-filters bookmark with Data",
      "Report page tooltip",
      "Selection pane"
    ],
    "correct": 3,
    "explanation": "The Selection pane manages visibility and layering.",
    "optionNotes": [
      "Not best here: Bookmark without Data addresses a different requirement in this concept. Avoid capturing Data so filter state is not reset.",
      "Not best here: Reset-filters bookmark with Data addresses a different requirement in this concept. The bookmark needs to capture the desired Data state.",
      "Not best here: Report page tooltip addresses a different requirement in this concept. Report page tooltips are built for rich hover experiences.",
      "Correct: The Selection pane manages visibility and layering."
    ]
  },
  {
    "id": "q099",
    "topic": "bookmarks_nav",
    "type": "single",
    "stem": "Hover over a product and show contextual mini visuals without leaving the page.\n\nWhich option is the best answer?",
    "options": [
      "Bookmark without Data",
      "Reset-filters bookmark with Data",
      "Drillthrough",
      "Report page tooltip"
    ],
    "correct": 3,
    "explanation": "Report page tooltips are built for rich hover experiences.",
    "optionNotes": [
      "Not best here: Bookmark without Data addresses a different requirement in this concept. Avoid capturing Data so filter state is not reset.",
      "Not best here: Reset-filters bookmark with Data addresses a different requirement in this concept. The bookmark needs to capture the desired Data state.",
      "Not best here: Drillthrough addresses a different requirement in this concept. Drillthrough passes selected context to a target page.",
      "Correct: Report page tooltips are built for rich hover experiences."
    ]
  },
  {
    "id": "q100",
    "topic": "bookmarks_nav",
    "type": "single",
    "stem": "Right-click a customer and navigate to a Customer Detail page already filtered to that customer.\n\nWhich option is the best answer?",
    "options": [
      "Selection pane",
      "Drillthrough",
      "Report page tooltip",
      "Reset-filters bookmark with Data"
    ],
    "correct": 1,
    "explanation": "Drillthrough passes selected context to a target page.",
    "optionNotes": [
      "Not best here: Selection pane addresses a different requirement in this concept. The Selection pane manages visibility and layering.",
      "Correct: Drillthrough passes selected context to a target page.",
      "Not best here: Report page tooltip addresses a different requirement in this concept. Report page tooltips are built for rich hover experiences.",
      "Not best here: Reset-filters bookmark with Data addresses a different requirement in this concept. The bookmark needs to capture the desired Data state."
    ]
  },
  {
    "id": "q101",
    "topic": "access_mobile",
    "type": "single",
    "stem": "Values below 0 should be red and values above 0 green using fixed thresholds.\n\nWhich option is the best answer?",
    "options": [
      "Rules-based conditional formatting",
      "Alt text",
      "Mobile layout",
      "Personalize visuals"
    ],
    "correct": 0,
    "explanation": "Rules are appropriate for discrete thresholds.",
    "optionNotes": [
      "Correct: Rules are appropriate for discrete thresholds.",
      "Not best here: Alt text addresses a different requirement in this concept. Alt text provides a textual description for assistive technology.",
      "Not best here: Mobile layout addresses a different requirement in this concept. Mobile layout optimizes arrangement for phones.",
      "Not best here: Personalize visuals addresses a different requirement in this concept. Personalize visuals enables user-specific exploration changes."
    ]
  },
  {
    "id": "q102",
    "topic": "access_mobile",
    "type": "single",
    "stem": "A screen reader must understand the purpose of a chart.\n\nWhich option is the best answer?",
    "options": [
      "Rules-based conditional formatting",
      "Personalize visuals",
      "Logical tab order",
      "Alt text"
    ],
    "correct": 3,
    "explanation": "Alt text provides a textual description for assistive technology.",
    "optionNotes": [
      "Not best here: Rules-based conditional formatting addresses a different requirement in this concept. Rules are appropriate for discrete thresholds.",
      "Not best here: Personalize visuals addresses a different requirement in this concept. Personalize visuals enables user-specific exploration changes.",
      "Not best here: Logical tab order addresses a different requirement in this concept. Tab order controls keyboard navigation order.",
      "Correct: Alt text provides a textual description for assistive technology."
    ]
  },
  {
    "id": "q103",
    "topic": "access_mobile",
    "type": "single",
    "stem": "Keyboard users must move through visuals in a meaningful sequence.\n\nWhich option is the best answer?",
    "options": [
      "Rules-based conditional formatting",
      "Mobile layout",
      "Logical tab order",
      "Personalize visuals"
    ],
    "correct": 2,
    "explanation": "Tab order controls keyboard navigation order.",
    "optionNotes": [
      "Not best here: Rules-based conditional formatting addresses a different requirement in this concept. Rules are appropriate for discrete thresholds.",
      "Not best here: Mobile layout addresses a different requirement in this concept. Mobile layout optimizes arrangement for phones.",
      "Correct: Tab order controls keyboard navigation order.",
      "Not best here: Personalize visuals addresses a different requirement in this concept. Personalize visuals enables user-specific exploration changes."
    ]
  },
  {
    "id": "q104",
    "topic": "access_mobile",
    "type": "single",
    "stem": "The same report needs a specifically arranged phone experience.\n\nWhich option is the best answer?",
    "options": [
      "Logical tab order",
      "Mobile layout",
      "Personalize visuals",
      "Alt text"
    ],
    "correct": 1,
    "explanation": "Mobile layout optimizes arrangement for phones.",
    "optionNotes": [
      "Not best here: Logical tab order addresses a different requirement in this concept. Tab order controls keyboard navigation order.",
      "Correct: Mobile layout optimizes arrangement for phones.",
      "Not best here: Personalize visuals addresses a different requirement in this concept. Personalize visuals enables user-specific exploration changes.",
      "Not best here: Alt text addresses a different requirement in this concept. Alt text provides a textual description for assistive technology."
    ]
  },
  {
    "id": "q105",
    "topic": "access_mobile",
    "type": "single",
    "stem": "Consumers should swap fields or visual types for personal exploration without editing the published report.\n\nWhich option is the best answer?",
    "options": [
      "Alt text",
      "Rules-based conditional formatting",
      "Personalize visuals",
      "Logical tab order"
    ],
    "correct": 2,
    "explanation": "Personalize visuals enables user-specific exploration changes.",
    "optionNotes": [
      "Not best here: Alt text addresses a different requirement in this concept. Alt text provides a textual description for assistive technology.",
      "Not best here: Rules-based conditional formatting addresses a different requirement in this concept. Rules are appropriate for discrete thresholds.",
      "Correct: Personalize visuals enables user-specific exploration changes.",
      "Not best here: Logical tab order addresses a different requirement in this concept. Tab order controls keyboard navigation order."
    ]
  },
  {
    "id": "q106",
    "topic": "analytics",
    "type": "single",
    "stem": "Draw a fixed target of 95% across a chart.\n\nWhich option is the best answer?",
    "options": [
      "Clustering",
      "Anomaly detection",
      "Constant/reference line",
      "Error bars"
    ],
    "correct": 2,
    "explanation": "A constant/reference line displays a fixed goal.",
    "optionNotes": [
      "Not best here: Clustering addresses a different requirement in this concept. Clustering discovers similarity-based groups.",
      "Not best here: Anomaly detection addresses a different requirement in this concept. Anomaly detection identifies unusual historical points.",
      "Correct: A constant/reference line displays a fixed goal.",
      "Not best here: Error bars addresses a different requirement in this concept. Error bars communicate uncertainty."
    ]
  },
  {
    "id": "q107",
    "topic": "analytics",
    "type": "single",
    "stem": "Estimate future monthly demand based on historical time-series values.\n\nWhich option is the best answer?",
    "options": [
      "Anomaly detection",
      "Forecast",
      "Clustering",
      "Error bars"
    ],
    "correct": 1,
    "explanation": "Forecasting projects future values.",
    "optionNotes": [
      "Not best here: Anomaly detection addresses a different requirement in this concept. Anomaly detection identifies unusual historical points.",
      "Correct: Forecasting projects future values.",
      "Not best here: Clustering addresses a different requirement in this concept. Clustering discovers similarity-based groups.",
      "Not best here: Error bars addresses a different requirement in this concept. Error bars communicate uncertainty."
    ]
  },
  {
    "id": "q108",
    "topic": "analytics",
    "type": "single",
    "stem": "Show uncertainty or variation around plotted estimates.\n\nWhich option is the best answer?",
    "options": [
      "Error bars",
      "Forecast",
      "Anomaly detection",
      "Constant/reference line"
    ],
    "correct": 0,
    "explanation": "Error bars communicate uncertainty.",
    "optionNotes": [
      "Correct: Error bars communicate uncertainty.",
      "Not best here: Forecast addresses a different requirement in this concept. Forecasting projects future values.",
      "Not best here: Anomaly detection addresses a different requirement in this concept. Anomaly detection identifies unusual historical points.",
      "Not best here: Constant/reference line addresses a different requirement in this concept. A constant/reference line displays a fixed goal."
    ]
  },
  {
    "id": "q109",
    "topic": "analytics",
    "type": "single",
    "stem": "Automatically flag unexpected spikes or drops in a line chart.\n\nWhich option is the best answer?",
    "options": [
      "Forecast",
      "Error bars",
      "Clustering",
      "Anomaly detection"
    ],
    "correct": 3,
    "explanation": "Anomaly detection identifies unusual historical points.",
    "optionNotes": [
      "Not best here: Forecast addresses a different requirement in this concept. Forecasting projects future values.",
      "Not best here: Error bars addresses a different requirement in this concept. Error bars communicate uncertainty.",
      "Not best here: Clustering addresses a different requirement in this concept. Clustering discovers similarity-based groups.",
      "Correct: Anomaly detection identifies unusual historical points."
    ]
  },
  {
    "id": "q110",
    "topic": "analytics",
    "type": "single",
    "stem": "Let Power BI identify natural groups of similar points in a scatter plot.\n\nWhich option is the best answer?",
    "options": [
      "Clustering",
      "Error bars",
      "Anomaly detection",
      "Constant/reference line"
    ],
    "correct": 0,
    "explanation": "Clustering discovers similarity-based groups.",
    "optionNotes": [
      "Correct: Clustering discovers similarity-based groups.",
      "Not best here: Error bars addresses a different requirement in this concept. Error bars communicate uncertainty.",
      "Not best here: Anomaly detection addresses a different requirement in this concept. Anomaly detection identifies unusual historical points.",
      "Not best here: Constant/reference line addresses a different requirement in this concept. A constant/reference line displays a fixed goal."
    ]
  },
  {
    "id": "q111",
    "topic": "ai_copilot",
    "type": "single",
    "stem": "Identify which factors most strongly influence employee turnover.\n\nWhich option is the best answer?",
    "options": [
      "Copilot report-page assistance",
      "Decomposition tree",
      "Narrative / Copilot summary",
      "Key influencers"
    ],
    "correct": 3,
    "explanation": "Key influencers ranks drivers of an outcome.",
    "optionNotes": [
      "Not best here: Copilot report-page assistance addresses a different requirement in this concept. The current scope explicitly includes Copilot-assisted report-page creation and suggestions.",
      "Not best here: Decomposition tree addresses a different requirement in this concept. Decomposition tree supports flexible multi-dimensional root-cause exploration.",
      "Not best here: Narrative / Copilot summary addresses a different requirement in this concept. Narrative/Copilot summary features generate text insights.",
      "Correct: Key influencers ranks drivers of an outcome."
    ]
  },
  {
    "id": "q112",
    "topic": "ai_copilot",
    "type": "single",
    "stem": "Let users break Profit down by Region, Product, Channel and Segment in any order with AI high/low suggestions.\n\nWhich option is the best answer?",
    "options": [
      "Narrative / Copilot summary",
      "Copilot report-page assistance",
      "Key influencers",
      "Decomposition tree"
    ],
    "correct": 3,
    "explanation": "Decomposition tree supports flexible multi-dimensional root-cause exploration.",
    "optionNotes": [
      "Not best here: Narrative / Copilot summary addresses a different requirement in this concept. Narrative/Copilot summary features generate text insights.",
      "Not best here: Copilot report-page assistance addresses a different requirement in this concept. The current scope explicitly includes Copilot-assisted report-page creation and suggestions.",
      "Not best here: Key influencers addresses a different requirement in this concept. Key influencers ranks drivers of an outcome.",
      "Correct: Decomposition tree supports flexible multi-dimensional root-cause exploration."
    ]
  },
  {
    "id": "q113",
    "topic": "ai_copilot",
    "type": "single",
    "stem": "A consumer types 'sales by region this year' and wants Power BI to generate a visual.\n\nWhich option is the best answer?",
    "options": [
      "Narrative / Copilot summary",
      "Q&A",
      "Decomposition tree",
      "Key influencers"
    ],
    "correct": 1,
    "explanation": "Q&A responds to natural-language questions.",
    "optionNotes": [
      "Not best here: Narrative / Copilot summary addresses a different requirement in this concept. Narrative/Copilot summary features generate text insights.",
      "Correct: Q&A responds to natural-language questions.",
      "Not best here: Decomposition tree addresses a different requirement in this concept. Decomposition tree supports flexible multi-dimensional root-cause exploration.",
      "Not best here: Key influencers addresses a different requirement in this concept. Key influencers ranks drivers of an outcome."
    ]
  },
  {
    "id": "q114",
    "topic": "ai_copilot",
    "type": "single",
    "stem": "Generate an explanatory text summary of important patterns in the report or semantic model.\n\nWhich option is the best answer?",
    "options": [
      "Narrative / Copilot summary",
      "Copilot report-page assistance",
      "Q&A",
      "Key influencers"
    ],
    "correct": 0,
    "explanation": "Narrative/Copilot summary features generate text insights.",
    "optionNotes": [
      "Correct: Narrative/Copilot summary features generate text insights.",
      "Not best here: Copilot report-page assistance addresses a different requirement in this concept. The current scope explicitly includes Copilot-assisted report-page creation and suggestions.",
      "Not best here: Q&A addresses a different requirement in this concept. Q&A responds to natural-language questions.",
      "Not best here: Key influencers addresses a different requirement in this concept. Key influencers ranks drivers of an outcome."
    ]
  },
  {
    "id": "q115",
    "topic": "ai_copilot",
    "type": "single",
    "stem": "An author wants AI to suggest/create content for a new report page.\n\nWhich option is the best answer?",
    "options": [
      "Key influencers",
      "Copilot report-page assistance",
      "Narrative / Copilot summary",
      "Decomposition tree"
    ],
    "correct": 1,
    "explanation": "The current scope explicitly includes Copilot-assisted report-page creation and suggestions.",
    "optionNotes": [
      "Not best here: Key influencers addresses a different requirement in this concept. Key influencers ranks drivers of an outcome.",
      "Correct: The current scope explicitly includes Copilot-assisted report-page creation and suggestions.",
      "Not best here: Narrative / Copilot summary addresses a different requirement in this concept. Narrative/Copilot summary features generate text insights.",
      "Not best here: Decomposition tree addresses a different requirement in this concept. Decomposition tree supports flexible multi-dimensional root-cause exploration."
    ]
  },
  {
    "id": "q116",
    "topic": "paginated_visualcalc",
    "type": "single",
    "stem": "A regulatory statement must print across hundreds of pages with exact margins and repeating headers.\n\nWhich option is the best answer?",
    "options": [
      "Power BI Report Builder",
      "Semantic-model measure",
      "Standard Power BI report",
      "Paginated report"
    ],
    "correct": 3,
    "explanation": "Paginated reports are designed for precise multi-page output.",
    "optionNotes": [
      "Not best here: Power BI Report Builder addresses a different requirement in this concept. Report Builder is the paginated-report authoring tool.",
      "Not best here: Semantic-model measure addresses a different requirement in this concept. Reusable business logic belongs in the semantic model.",
      "Not best here: Standard Power BI report addresses a different requirement in this concept. Standard reports are optimized for interactive analysis.",
      "Correct: Paginated reports are designed for precise multi-page output."
    ]
  },
  {
    "id": "q117",
    "topic": "paginated_visualcalc",
    "type": "single",
    "stem": "An author needs the tool used to create an RDL paginated report for the Power BI service.\n\nWhich option is the best answer?",
    "options": [
      "Power BI Report Builder",
      "Standard Power BI report",
      "Semantic-model measure",
      "Visual calculation"
    ],
    "correct": 0,
    "explanation": "Report Builder is the paginated-report authoring tool.",
    "optionNotes": [
      "Correct: Report Builder is the paginated-report authoring tool.",
      "Not best here: Standard Power BI report addresses a different requirement in this concept. Standard reports are optimized for interactive analysis.",
      "Not best here: Semantic-model measure addresses a different requirement in this concept. Reusable business logic belongs in the semantic model.",
      "Not best here: Visual calculation addresses a different requirement in this concept. Visual calculations are local to a visual."
    ]
  },
  {
    "id": "q118",
    "topic": "paginated_visualcalc",
    "type": "single",
    "stem": "Users primarily need interactive slicing, exploration and modern visuals rather than print-ready pagination.\n\nWhich option is the best answer?",
    "options": [
      "Power BI Report Builder",
      "Paginated report",
      "Standard Power BI report",
      "Visual calculation"
    ],
    "correct": 2,
    "explanation": "Standard reports are optimized for interactive analysis.",
    "optionNotes": [
      "Not best here: Power BI Report Builder addresses a different requirement in this concept. Report Builder is the paginated-report authoring tool.",
      "Not best here: Paginated report addresses a different requirement in this concept. Paginated reports are designed for precise multi-page output.",
      "Correct: Standard reports are optimized for interactive analysis.",
      "Not best here: Visual calculation addresses a different requirement in this concept. Visual calculations are local to a visual."
    ]
  },
  {
    "id": "q119",
    "topic": "paginated_visualcalc",
    "type": "single",
    "stem": "A running sum is needed only inside one matrix and depends on the visual's displayed structure.\n\nWhich option is the best answer?",
    "options": [
      "Semantic-model measure",
      "Standard Power BI report",
      "Visual calculation",
      "Paginated report"
    ],
    "correct": 2,
    "explanation": "Visual calculations are local to a visual.",
    "optionNotes": [
      "Not best here: Semantic-model measure addresses a different requirement in this concept. Reusable business logic belongs in the semantic model.",
      "Not best here: Standard Power BI report addresses a different requirement in this concept. Standard reports are optimized for interactive analysis.",
      "Correct: Visual calculations are local to a visual.",
      "Not best here: Paginated report addresses a different requirement in this concept. Paginated reports are designed for precise multi-page output."
    ]
  },
  {
    "id": "q120",
    "topic": "paginated_visualcalc",
    "type": "single",
    "stem": "The same Margin % definition must be reused consistently across many visuals and reports.\n\nWhich option is the best answer?",
    "options": [
      "Visual calculation",
      "Power BI Report Builder",
      "Paginated report",
      "Semantic-model measure"
    ],
    "correct": 3,
    "explanation": "Reusable business logic belongs in the semantic model.",
    "optionNotes": [
      "Not best here: Visual calculation addresses a different requirement in this concept. Visual calculations are local to a visual.",
      "Not best here: Power BI Report Builder addresses a different requirement in this concept. Report Builder is the paginated-report authoring tool.",
      "Not best here: Paginated report addresses a different requirement in this concept. Paginated reports are designed for precise multi-page output.",
      "Correct: Reusable business logic belongs in the semantic model."
    ]
  },
  {
    "id": "q121",
    "topic": "workspaces_apps",
    "type": "single",
    "stem": "A user must consume workspace content and remain restricted by RLS without editing content.\n\nWhich option is the best answer?",
    "options": [
      "Viewer",
      "Contributor",
      "App audiences",
      "Power BI App"
    ],
    "correct": 0,
    "explanation": "Viewer is the least-privileged consumption role and normal RLS role context.",
    "optionNotes": [
      "Correct: Viewer is the least-privileged consumption role and normal RLS role context.",
      "Not best here: Contributor addresses a different requirement in this concept. Contributor supports content authoring with less authority than Member/Admin.",
      "Not best here: App audiences addresses a different requirement in this concept. Audiences control which app content each group sees.",
      "Not best here: Power BI App addresses a different requirement in this concept. Apps are designed for curated distribution."
    ]
  },
  {
    "id": "q122",
    "topic": "workspaces_apps",
    "type": "single",
    "stem": "A report developer needs to create/edit workspace content but does not need the highest workspace administration rights.\n\nWhich option is the best answer?",
    "options": [
      "Direct sharing / item access",
      "Power BI App",
      "Contributor",
      "App audiences"
    ],
    "correct": 2,
    "explanation": "Contributor supports content authoring with less authority than Member/Admin.",
    "optionNotes": [
      "Not best here: Direct sharing / item access addresses a different requirement in this concept. Targeted item sharing is appropriate for a small audience.",
      "Not best here: Power BI App addresses a different requirement in this concept. Apps are designed for curated distribution.",
      "Correct: Contributor supports content authoring with less authority than Member/Admin.",
      "Not best here: App audiences addresses a different requirement in this concept. Audiences control which app content each group sees."
    ]
  },
  {
    "id": "q123",
    "topic": "workspaces_apps",
    "type": "single",
    "stem": "Hundreds of consumers need a curated bundle of approved reports from a workspace.\n\nWhich option is the best answer?",
    "options": [
      "Power BI App",
      "Direct sharing / item access",
      "App audiences",
      "Contributor"
    ],
    "correct": 0,
    "explanation": "Apps are designed for curated distribution.",
    "optionNotes": [
      "Correct: Apps are designed for curated distribution.",
      "Not best here: Direct sharing / item access addresses a different requirement in this concept. Targeted item sharing is appropriate for a small audience.",
      "Not best here: App audiences addresses a different requirement in this concept. Audiences control which app content each group sees.",
      "Not best here: Contributor addresses a different requirement in this concept. Contributor supports content authoring with less authority than Member/Admin."
    ]
  },
  {
    "id": "q124",
    "topic": "workspaces_apps",
    "type": "single",
    "stem": "Finance and Sales should use one app but see different sets of reports.\n\nWhich option is the best answer?",
    "options": [
      "Viewer",
      "Contributor",
      "App audiences",
      "Power BI App"
    ],
    "correct": 2,
    "explanation": "Audiences control which app content each group sees.",
    "optionNotes": [
      "Not best here: Viewer addresses a different requirement in this concept. Viewer is the least-privileged consumption role and normal RLS role context.",
      "Not best here: Contributor addresses a different requirement in this concept. Contributor supports content authoring with less authority than Member/Admin.",
      "Correct: Audiences control which app content each group sees.",
      "Not best here: Power BI App addresses a different requirement in this concept. Apps are designed for curated distribution."
    ]
  },
  {
    "id": "q125",
    "topic": "workspaces_apps",
    "type": "single",
    "stem": "Only three named users need access to one report and no broader app packaging is required.\n\nWhich option is the best answer?",
    "options": [
      "Contributor",
      "Viewer",
      "Power BI App",
      "Direct sharing / item access"
    ],
    "correct": 3,
    "explanation": "Targeted item sharing is appropriate for a small audience.",
    "optionNotes": [
      "Not best here: Contributor addresses a different requirement in this concept. Contributor supports content authoring with less authority than Member/Admin.",
      "Not best here: Viewer addresses a different requirement in this concept. Viewer is the least-privileged consumption role and normal RLS role context.",
      "Not best here: Power BI App addresses a different requirement in this concept. Apps are designed for curated distribution.",
      "Correct: Targeted item sharing is appropriate for a small audience."
    ]
  },
  {
    "id": "q126",
    "topic": "dashboards_tiles",
    "type": "single",
    "stem": "Executives need a single-page Power BI Service monitoring canvas containing important pinned items from multiple reports.\n\nWhich option is the best answer?",
    "options": [
      "Power BI service",
      "Tile",
      "Standalone tile",
      "Dashboard"
    ],
    "correct": 3,
    "explanation": "A dashboard is the Service's single-page monitoring canvas.",
    "optionNotes": [
      "Not best here: Power BI service addresses a different requirement in this concept. Dashboard authoring is a Service capability.",
      "Not best here: Tile addresses a different requirement in this concept. Pinned dashboard items are tiles.",
      "Not best here: Standalone tile addresses a different requirement in this concept. Standalone tiles can contain text/web content and other supported media.",
      "Correct: A dashboard is the Service's single-page monitoring canvas."
    ]
  },
  {
    "id": "q127",
    "topic": "dashboards_tiles",
    "type": "single",
    "stem": "A report visual should appear as a snapshot on a dashboard.\n\nWhich option is the best answer?",
    "options": [
      "Open underlying report from a tile",
      "Dashboard",
      "Tile",
      "Power BI service"
    ],
    "correct": 2,
    "explanation": "Pinned dashboard items are tiles.",
    "optionNotes": [
      "Not best here: Open underlying report from a tile addresses a different requirement in this concept. Tiles can link users to underlying reports or configured destinations.",
      "Not best here: Dashboard addresses a different requirement in this concept. A dashboard is the Service's single-page monitoring canvas.",
      "Correct: Pinned dashboard items are tiles.",
      "Not best here: Power BI service addresses a different requirement in this concept. Dashboard authoring is a Service capability."
    ]
  },
  {
    "id": "q128",
    "topic": "dashboards_tiles",
    "type": "single",
    "stem": "Add explanatory text and a web link directly to a dashboard without creating a report visual.\n\nWhich option is the best answer?",
    "options": [
      "Open underlying report from a tile",
      "Tile",
      "Power BI service",
      "Standalone tile"
    ],
    "correct": 3,
    "explanation": "Standalone tiles can contain text/web content and other supported media.",
    "optionNotes": [
      "Not best here: Open underlying report from a tile addresses a different requirement in this concept. Tiles can link users to underlying reports or configured destinations.",
      "Not best here: Tile addresses a different requirement in this concept. Pinned dashboard items are tiles.",
      "Not best here: Power BI service addresses a different requirement in this concept. Dashboard authoring is a Service capability.",
      "Correct: Standalone tiles can contain text/web content and other supported media."
    ]
  },
  {
    "id": "q129",
    "topic": "dashboards_tiles",
    "type": "single",
    "stem": "A user asks where dashboards are authored.\n\nWhich option is the best answer?",
    "options": [
      "Dashboard",
      "Power BI service",
      "Open underlying report from a tile",
      "Standalone tile"
    ],
    "correct": 1,
    "explanation": "Dashboard authoring is a Service capability.",
    "optionNotes": [
      "Not best here: Dashboard addresses a different requirement in this concept. A dashboard is the Service's single-page monitoring canvas.",
      "Correct: Dashboard authoring is a Service capability.",
      "Not best here: Open underlying report from a tile addresses a different requirement in this concept. Tiles can link users to underlying reports or configured destinations.",
      "Not best here: Standalone tile addresses a different requirement in this concept. Standalone tiles can contain text/web content and other supported media."
    ]
  },
  {
    "id": "q130",
    "topic": "dashboards_tiles",
    "type": "single",
    "stem": "A dashboard KPI should act as a high-level entry point to more detailed report analysis.\n\nWhich option is the best answer?",
    "options": [
      "Open underlying report from a tile",
      "Tile",
      "Power BI service",
      "Standalone tile"
    ],
    "correct": 0,
    "explanation": "Tiles can link users to underlying reports or configured destinations.",
    "optionNotes": [
      "Correct: Tiles can link users to underlying reports or configured destinations.",
      "Not best here: Tile addresses a different requirement in this concept. Pinned dashboard items are tiles.",
      "Not best here: Power BI service addresses a different requirement in this concept. Dashboard authoring is a Service capability.",
      "Not best here: Standalone tile addresses a different requirement in this concept. Standalone tiles can contain text/web content and other supported media."
    ]
  },
  {
    "id": "q131",
    "topic": "alerts_subscriptions",
    "type": "single",
    "stem": "Send a report snapshot/link to a manager every Monday morning.\n\nWhich option is the best answer?",
    "options": [
      "Refreshed data",
      "Personal alert",
      "Data alert",
      "Subscription"
    ],
    "correct": 3,
    "explanation": "Subscriptions provide scheduled delivery.",
    "optionNotes": [
      "Not best here: Refreshed data addresses a different requirement in this concept. Alerts are evaluated as data refreshes.",
      "Not best here: Personal alert addresses a different requirement in this concept. Classic dashboard alerts belong to the user who creates them.",
      "Not best here: Data alert addresses a different requirement in this concept. Data alerts monitor supported dashboard metrics against thresholds.",
      "Correct: Subscriptions provide scheduled delivery."
    ]
  },
  {
    "id": "q132",
    "topic": "alerts_subscriptions",
    "type": "single",
    "stem": "Notify a user when a dashboard KPI falls below 90.\n\nWhich option is the best answer?",
    "options": [
      "Refreshed data",
      "Data alert",
      "Card/KPI/Gauge dashboard tile",
      "Subscription"
    ],
    "correct": 1,
    "explanation": "Data alerts monitor supported dashboard metrics against thresholds.",
    "optionNotes": [
      "Not best here: Refreshed data addresses a different requirement in this concept. Alerts are evaluated as data refreshes.",
      "Correct: Data alerts monitor supported dashboard metrics against thresholds.",
      "Not best here: Card/KPI/Gauge dashboard tile addresses a different requirement in this concept. Classic dashboard alerts are supported for these metric tile types.",
      "Not best here: Subscription addresses a different requirement in this concept. Subscriptions provide scheduled delivery."
    ]
  },
  {
    "id": "q133",
    "topic": "alerts_subscriptions",
    "type": "single",
    "stem": "You need a classic Power BI dashboard tile type that supports threshold alerts.\n\nWhich option is the best answer?",
    "options": [
      "Refreshed data",
      "Subscription",
      "Card/KPI/Gauge dashboard tile",
      "Personal alert"
    ],
    "correct": 2,
    "explanation": "Classic dashboard alerts are supported for these metric tile types.",
    "optionNotes": [
      "Not best here: Refreshed data addresses a different requirement in this concept. Alerts are evaluated as data refreshes.",
      "Not best here: Subscription addresses a different requirement in this concept. Subscriptions provide scheduled delivery.",
      "Correct: Classic dashboard alerts are supported for these metric tile types.",
      "Not best here: Personal alert addresses a different requirement in this concept. Classic dashboard alerts belong to the user who creates them."
    ]
  },
  {
    "id": "q134",
    "topic": "alerts_subscriptions",
    "type": "single",
    "stem": "An alert should evaluate the latest value after the semantic model refreshes.\n\nWhich option is the best answer?",
    "options": [
      "Card/KPI/Gauge dashboard tile",
      "Personal alert",
      "Subscription",
      "Refreshed data"
    ],
    "correct": 3,
    "explanation": "Alerts are evaluated as data refreshes.",
    "optionNotes": [
      "Not best here: Card/KPI/Gauge dashboard tile addresses a different requirement in this concept. Classic dashboard alerts are supported for these metric tile types.",
      "Not best here: Personal alert addresses a different requirement in this concept. Classic dashboard alerts belong to the user who creates them.",
      "Not best here: Subscription addresses a different requirement in this concept. Subscriptions provide scheduled delivery.",
      "Correct: Alerts are evaluated as data refreshes."
    ]
  },
  {
    "id": "q135",
    "topic": "alerts_subscriptions",
    "type": "single",
    "stem": "One user creates an alert and asks whether all dashboard viewers automatically receive it.\n\nWhich option is the best answer?",
    "options": [
      "Subscription",
      "Card/KPI/Gauge dashboard tile",
      "Personal alert",
      "Data alert"
    ],
    "correct": 2,
    "explanation": "Classic dashboard alerts belong to the user who creates them.",
    "optionNotes": [
      "Not best here: Subscription addresses a different requirement in this concept. Subscriptions provide scheduled delivery.",
      "Not best here: Card/KPI/Gauge dashboard tile addresses a different requirement in this concept. Classic dashboard alerts are supported for these metric tile types.",
      "Correct: Classic dashboard alerts belong to the user who creates them.",
      "Not best here: Data alert addresses a different requirement in this concept. Data alerts monitor supported dashboard metrics against thresholds."
    ]
  },
  {
    "id": "q136",
    "topic": "gateway_refresh",
    "type": "single",
    "stem": "An Import semantic model in the Service must refresh from an on-premises SQL Server.\n\nWhich option is the best answer?",
    "options": [
      "Scheduled refresh",
      "Refresh history",
      "On-premises data gateway",
      "Standard gateway mode"
    ],
    "correct": 2,
    "explanation": "The gateway provides the Service-to-on-premises connectivity path.",
    "optionNotes": [
      "Not best here: Scheduled refresh addresses a different requirement in this concept. Scheduled refresh updates Import data.",
      "Not best here: Refresh history addresses a different requirement in this concept. Refresh history/error details should guide troubleshooting.",
      "Correct: The gateway provides the Service-to-on-premises connectivity path.",
      "Not best here: Standard gateway mode addresses a different requirement in this concept. Standard mode is the enterprise/shared option."
    ]
  },
  {
    "id": "q137",
    "topic": "gateway_refresh",
    "type": "single",
    "stem": "A centrally managed gateway must serve multiple users and semantic models.\n\nWhich option is the best answer?",
    "options": [
      "Refresh history",
      "Standard gateway mode",
      "Automatic page refresh",
      "Scheduled refresh"
    ],
    "correct": 1,
    "explanation": "Standard mode is the enterprise/shared option.",
    "optionNotes": [
      "Not best here: Refresh history addresses a different requirement in this concept. Refresh history/error details should guide troubleshooting.",
      "Correct: Standard mode is the enterprise/shared option.",
      "Not best here: Automatic page refresh addresses a different requirement in this concept. Automatic page refresh refreshes page visuals on an interval.",
      "Not best here: Scheduled refresh addresses a different requirement in this concept. Scheduled refresh updates Import data."
    ]
  },
  {
    "id": "q138",
    "topic": "gateway_refresh",
    "type": "single",
    "stem": "A scheduled refresh fails and you need the first detailed diagnostic evidence.\n\nWhich option is the best answer?",
    "options": [
      "Automatic page refresh",
      "Refresh history",
      "Scheduled refresh",
      "On-premises data gateway"
    ],
    "correct": 1,
    "explanation": "Refresh history/error details should guide troubleshooting.",
    "optionNotes": [
      "Not best here: Automatic page refresh addresses a different requirement in this concept. Automatic page refresh refreshes page visuals on an interval.",
      "Correct: Refresh history/error details should guide troubleshooting.",
      "Not best here: Scheduled refresh addresses a different requirement in this concept. Scheduled refresh updates Import data.",
      "Not best here: On-premises data gateway addresses a different requirement in this concept. The gateway provides the Service-to-on-premises connectivity path."
    ]
  },
  {
    "id": "q139",
    "topic": "gateway_refresh",
    "type": "single",
    "stem": "An imported model should load updated source rows every morning.\n\nWhich option is the best answer?",
    "options": [
      "Scheduled refresh",
      "On-premises data gateway",
      "Refresh history",
      "Standard gateway mode"
    ],
    "correct": 0,
    "explanation": "Scheduled refresh updates Import data.",
    "optionNotes": [
      "Correct: Scheduled refresh updates Import data.",
      "Not best here: On-premises data gateway addresses a different requirement in this concept. The gateway provides the Service-to-on-premises connectivity path.",
      "Not best here: Refresh history addresses a different requirement in this concept. Refresh history/error details should guide troubleshooting.",
      "Not best here: Standard gateway mode addresses a different requirement in this concept. Standard mode is the enterprise/shared option."
    ]
  },
  {
    "id": "q140",
    "topic": "gateway_refresh",
    "type": "single",
    "stem": "A DirectQuery operations page should re-query visuals every minute.\n\nWhich option is the best answer?",
    "options": [
      "Standard gateway mode",
      "Scheduled refresh",
      "Automatic page refresh",
      "Refresh history"
    ],
    "correct": 2,
    "explanation": "Automatic page refresh refreshes page visuals on an interval.",
    "optionNotes": [
      "Not best here: Standard gateway mode addresses a different requirement in this concept. Standard mode is the enterprise/shared option.",
      "Not best here: Scheduled refresh addresses a different requirement in this concept. Scheduled refresh updates Import data.",
      "Correct: Automatic page refresh refreshes page visuals on an interval.",
      "Not best here: Refresh history addresses a different requirement in this concept. Refresh history/error details should guide troubleshooting."
    ]
  },
  {
    "id": "q141",
    "topic": "permissions_rls",
    "type": "single",
    "stem": "A Viewer must create a new report from an existing published semantic model.\n\nWhich option is the best answer?",
    "options": [
      "USERPRINCIPALNAME()",
      "Union of role permissions",
      "Build permission",
      "RLS role membership in the Service"
    ],
    "correct": 2,
    "explanation": "Build enables creation of new reports/analysis from the model.",
    "optionNotes": [
      "Not best here: USERPRINCIPALNAME() addresses a different requirement in this concept. USERPRINCIPALNAME is commonly used for dynamic user mapping.",
      "Not best here: Union of role permissions addresses a different requirement in this concept. Multiple RLS roles are normally additive, so North and South are both visible.",
      "Correct: Build enables creation of new reports/analysis from the model.",
      "Not best here: RLS role membership in the Service addresses a different requirement in this concept. Role membership is managed against the published semantic model."
    ]
  },
  {
    "id": "q142",
    "topic": "permissions_rls",
    "type": "single",
    "stem": "A user should be allowed to grant another person access to an item.\n\nWhich option is the best answer?",
    "options": [
      "Build permission",
      "Reshare permission",
      "Union of role permissions",
      "RLS role membership in the Service"
    ],
    "correct": 1,
    "explanation": "Reshare is the permission for onward access sharing.",
    "optionNotes": [
      "Not best here: Build permission addresses a different requirement in this concept. Build enables creation of new reports/analysis from the model.",
      "Correct: Reshare is the permission for onward access sharing.",
      "Not best here: Union of role permissions addresses a different requirement in this concept. Multiple RLS roles are normally additive, so North and South are both visible.",
      "Not best here: RLS role membership in the Service addresses a different requirement in this concept. Role membership is managed against the published semantic model."
    ]
  },
  {
    "id": "q143",
    "topic": "permissions_rls",
    "type": "single",
    "stem": "Dynamic RLS must identify the signed-in user and match that user to allowed regions in a mapping table.\n\nWhich option is the best answer?",
    "options": [
      "Reshare permission",
      "Union of role permissions",
      "USERPRINCIPALNAME()",
      "RLS role membership in the Service"
    ],
    "correct": 2,
    "explanation": "USERPRINCIPALNAME is commonly used for dynamic user mapping.",
    "optionNotes": [
      "Not best here: Reshare permission addresses a different requirement in this concept. Reshare is the permission for onward access sharing.",
      "Not best here: Union of role permissions addresses a different requirement in this concept. Multiple RLS roles are normally additive, so North and South are both visible.",
      "Correct: USERPRINCIPALNAME is commonly used for dynamic user mapping.",
      "Not best here: RLS role membership in the Service addresses a different requirement in this concept. Role membership is managed against the published semantic model."
    ]
  },
  {
    "id": "q144",
    "topic": "permissions_rls",
    "type": "single",
    "stem": "The RLS DAX role is already defined and published; users/groups must now be assigned to it.\n\nWhich option is the best answer?",
    "options": [
      "RLS role membership in the Service",
      "Reshare permission",
      "Union of role permissions",
      "USERPRINCIPALNAME()"
    ],
    "correct": 0,
    "explanation": "Role membership is managed against the published semantic model.",
    "optionNotes": [
      "Correct: Role membership is managed against the published semantic model.",
      "Not best here: Reshare permission addresses a different requirement in this concept. Reshare is the permission for onward access sharing.",
      "Not best here: Union of role permissions addresses a different requirement in this concept. Multiple RLS roles are normally additive, so North and South are both visible.",
      "Not best here: USERPRINCIPALNAME() addresses a different requirement in this concept. USERPRINCIPALNAME is commonly used for dynamic user mapping."
    ]
  },
  {
    "id": "q145",
    "topic": "permissions_rls",
    "type": "single",
    "stem": "A user belongs to one role allowing North and another allowing South.\n\nWhich option is the best answer?",
    "options": [
      "USERPRINCIPALNAME()",
      "Build permission",
      "RLS role membership in the Service",
      "Union of role permissions"
    ],
    "correct": 3,
    "explanation": "Multiple RLS roles are normally additive, so North and South are both visible.",
    "optionNotes": [
      "Not best here: USERPRINCIPALNAME() addresses a different requirement in this concept. USERPRINCIPALNAME is commonly used for dynamic user mapping.",
      "Not best here: Build permission addresses a different requirement in this concept. Build enables creation of new reports/analysis from the model.",
      "Not best here: RLS role membership in the Service addresses a different requirement in this concept. Role membership is managed against the published semantic model.",
      "Correct: Multiple RLS roles are normally additive, so North and South are both visible."
    ]
  },
  {
    "id": "q146",
    "topic": "governance_publish",
    "type": "single",
    "stem": "A group must be unable to query the Salary column at all.\n\nWhich option is the best answer?",
    "options": [
      "Object-level security",
      "Sensitivity label",
      "Certified endorsement",
      "Publish/update content"
    ],
    "correct": 0,
    "explanation": "OLS secures model objects such as columns and tables.",
    "optionNotes": [
      "Correct: OLS secures model objects such as columns and tables.",
      "Not best here: Sensitivity label addresses a different requirement in this concept. Sensitivity labels classify/protect content.",
      "Not best here: Certified endorsement addresses a different requirement in this concept. Certified represents stronger formal endorsement.",
      "Not best here: Publish/update content addresses a different requirement in this concept. Publishing/updating content deploys design/model changes; refresh only updates data."
    ]
  },
  {
    "id": "q147",
    "topic": "governance_publish",
    "type": "single",
    "stem": "A semantic model must be classified as Confidential under information-protection policy.\n\nWhich option is the best answer?",
    "options": [
      "Certified endorsement",
      "Publish/update content",
      "Object-level security",
      "Sensitivity label"
    ],
    "correct": 3,
    "explanation": "Sensitivity labels classify/protect content.",
    "optionNotes": [
      "Not best here: Certified endorsement addresses a different requirement in this concept. Certified represents stronger formal endorsement.",
      "Not best here: Publish/update content addresses a different requirement in this concept. Publishing/updating content deploys design/model changes; refresh only updates data.",
      "Not best here: Object-level security addresses a different requirement in this concept. OLS secures model objects such as columns and tables.",
      "Correct: Sensitivity labels classify/protect content."
    ]
  },
  {
    "id": "q148",
    "topic": "governance_publish",
    "type": "single",
    "stem": "A semantic model has completed formal organizational validation and should be marked as authoritative.\n\nWhich option is the best answer?",
    "options": [
      "Certified endorsement",
      "Lineage / impact analysis",
      "Publish/update content",
      "Object-level security"
    ],
    "correct": 0,
    "explanation": "Certified represents stronger formal endorsement.",
    "optionNotes": [
      "Correct: Certified represents stronger formal endorsement.",
      "Not best here: Lineage / impact analysis addresses a different requirement in this concept. Lineage/impact analysis exposes dependencies.",
      "Not best here: Publish/update content addresses a different requirement in this concept. Publishing/updating content deploys design/model changes; refresh only updates data.",
      "Not best here: Object-level security addresses a different requirement in this concept. OLS secures model objects such as columns and tables."
    ]
  },
  {
    "id": "q149",
    "topic": "governance_publish",
    "type": "single",
    "stem": "Before removing a shared model column, you need to identify downstream reports that depend on it.\n\nWhich option is the best answer?",
    "options": [
      "Lineage / impact analysis",
      "Object-level security",
      "Sensitivity label",
      "Certified endorsement"
    ],
    "correct": 0,
    "explanation": "Lineage/impact analysis exposes dependencies.",
    "optionNotes": [
      "Correct: Lineage/impact analysis exposes dependencies.",
      "Not best here: Object-level security addresses a different requirement in this concept. OLS secures model objects such as columns and tables.",
      "Not best here: Sensitivity label addresses a different requirement in this concept. Sensitivity labels classify/protect content.",
      "Not best here: Certified endorsement addresses a different requirement in this concept. Certified represents stronger formal endorsement."
    ]
  },
  {
    "id": "q150",
    "topic": "governance_publish",
    "type": "single",
    "stem": "You added a new report page and DAX measure in Desktop and need those definition changes in the Service.\n\nWhich option is the best answer?",
    "options": [
      "Certified endorsement",
      "Lineage / impact analysis",
      "Publish/update content",
      "Sensitivity label"
    ],
    "correct": 2,
    "explanation": "Publishing/updating content deploys design/model changes; refresh only updates data.",
    "optionNotes": [
      "Not best here: Certified endorsement addresses a different requirement in this concept. Certified represents stronger formal endorsement.",
      "Not best here: Lineage / impact analysis addresses a different requirement in this concept. Lineage/impact analysis exposes dependencies.",
      "Correct: Publishing/updating content deploys design/model changes; refresh only updates data.",
      "Not best here: Sensitivity label addresses a different requirement in this concept. Sensitivity labels classify/protect content."
    ]
  },
  {
    "topic": "workspaces_apps",
    "type": "multi",
    "stem": "A company wants one Power BI app for Finance and Sales. Each group must see different report sets, and users must still see only the rows they are authorized to view. Which TWO features should you configure?",
    "options": [
      "App audiences",
      "Dynamic RLS",
      "Object-level security only",
      "A separate workspace for every user",
      "Bidirectional relationships"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "App audiences control content visibility inside the app; RLS controls row visibility inside the semantic model.",
    "optionNotes": [
      "Correct for app content segmentation.",
      "Correct for row-level data security.",
      "OLS secures model objects, not the required row logic.",
      "Unnecessary and unscalable.",
      "Relationship direction is not a distribution/security control."
    ],
    "id": "q151"
  },
  {
    "topic": "performance_properties",
    "type": "multi",
    "stem": "Which TWO actions usually reduce an Import model's size without changing required analytical results?",
    "options": [
      "Remove unused high-cardinality text columns",
      "Reduce unnecessary data granularity",
      "Hide every column",
      "Enable bidirectional filtering",
      "Duplicate source columns as calculated columns"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Removing unused high-cardinality fields and reducing unnecessary distinct values directly reduce stored model data.",
    "optionNotes": [
      "Correct.",
      "Correct.",
      "Hiding does not remove stored data.",
      "This affects filtering, not model size reduction.",
      "This adds model data."
    ],
    "id": "q152"
  },
  {
    "topic": "access_mobile",
    "type": "multi",
    "stem": "Choose TWO practices that directly improve report accessibility.",
    "options": [
      "Add meaningful alt text",
      "Configure logical tab order",
      "Use color alone for status",
      "Remove all data labels",
      "Use the smallest possible font"
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Alt text supports screen readers and logical tab order supports keyboard navigation.",
    "optionNotes": [
      "Correct.",
      "Correct.",
      "Color alone is an accessibility problem.",
      "Removing labels is not an accessibility strategy.",
      "Tiny text reduces readability."
    ],
    "id": "q153"
  },
  {
    "topic": "gateway_refresh",
    "type": "yesno",
    "stem": "For each statement about refresh and gateways, choose Yes if it is correct.",
    "statements": [
      "An online gateway guarantees stored source credentials are valid.",
      "Scheduled refresh updates imported source data.",
      "DirectQuery to an on-premises source can still require a gateway."
    ],
    "correct": [
      false,
      true,
      true
    ],
    "explanation": "Gateway status and authentication are separate. Scheduled refresh updates Import data, and on-premises DirectQuery connectivity can depend on a gateway.",
    "id": "q154"
  },
  {
    "topic": "permissions_rls",
    "type": "yesno",
    "stem": "For each RLS statement, choose Yes if it is correct.",
    "statements": [
      "Dynamic RLS can use USERPRINCIPALNAME().",
      "Membership in multiple RLS roles normally intersects the role filters.",
      "Hiding a column is equivalent to row-level security."
    ],
    "correct": [
      true,
      false,
      false
    ],
    "explanation": "Dynamic RLS can map the signed-in user; multiple roles are additive; hiding is not a security boundary.",
    "id": "q155"
  },
  {
    "topic": "merge_append",
    "type": "matching",
    "stem": "Match each requirement to the Power Query operation.",
    "prompts": [
      "Stack monthly tables vertically",
      "Add CustomerName by CustomerID",
      "Return left-side rows with no match",
      "Turn Status values into separate columns"
    ],
    "choices": [
      "Append",
      "Merge",
      "Left Anti join",
      "Pivot"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Append stacks rows; Merge joins columns; Left Anti finds unmatched left rows; Pivot creates columns from row values.",
    "id": "q156"
  },
  {
    "topic": "ai_copilot",
    "type": "matching",
    "stem": "Match the analytical goal to the Power BI feature.",
    "prompts": [
      "Find strongest factors driving churn",
      "Break Profit across dimensions in any order",
      "Ask a natural-language question",
      "Identify unexpected spikes in a time series"
    ],
    "choices": [
      "Key influencers",
      "Decomposition tree",
      "Q&A",
      "Anomaly detection"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Each feature is specialized for the stated analytical goal.",
    "id": "q157"
  },
  {
    "topic": "gateway_refresh",
    "type": "ordering",
    "stem": "Put these refresh troubleshooting actions in the most sensible starting order.",
    "items": [
      "Inspect refresh history/error details",
      "Check gateway connectivity if relevant",
      "Validate stored source credentials/permissions",
      "Investigate schema or Power Query changes"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Start with the actual error evidence, then connectivity, authentication/permissions, and model/source changes as indicated.",
    "id": "q158"
  },
  {
    "topic": "star_grain",
    "type": "ordering",
    "stem": "Order these modeling activities from foundational to later refinement.",
    "items": [
      "Define the fact table grain",
      "Identify dimension entities and keys",
      "Create relationships",
      "Optimize/hide authoring fields"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Grain comes first, then entities/keys, relationships and finally optimization/usability refinement.",
    "id": "q159"
  },
  {
    "topic": "paginated_visualcalc",
    "type": "single",
    "case": "A logistics team needs an operational shipment document with exact page breaks, repeating headers and a PDF output that can span hundreds of pages. Interactive exploration is secondary.",
    "stem": "What should you build?",
    "options": [
      "A paginated report",
      "A decomposition tree",
      "A dashboard with tiles",
      "A field parameter"
    ],
    "correct": 0,
    "explanation": "The precision-print and multi-page requirement is a classic paginated-report scenario.",
    "optionNotes": [
      "Correct.",
      "Exploratory root-cause visual, not a print-layout solution.",
      "A monitoring canvas, not a long paginated document.",
      "Switches fields; does not solve pagination."
    ],
    "id": "q160"
  }
];
