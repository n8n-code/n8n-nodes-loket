import type { INodeProperties } from 'n8n-workflow';

export const journalRunResultsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Results"
					]
				}
			},
			"options": [
				{
					"name": "Get Journal Run Results By Journal Run ID",
					"value": "Get Journal Run Results By Journal Run ID",
					"action": "Get journal results for a journal run",
					"description": "__Activity name :__ GetJournalRunResultsByJournalRunId\n\nReturns the journal run results for the journal run. Journal runs with journalRunStatus = 0,1,2,3 dont have results and this endpoint will return an error if called for a journal run with that status.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/journalruns/{{$parameter[\"journalrunId\"]}}/results"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/journalruns/{journalrunId}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Results"
					],
					"operation": [
						"Get Journal Run Results By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Results"
					],
					"operation": [
						"Get Journal Run Results By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Results"
					],
					"operation": [
						"Get Journal Run Results By Journal Run ID"
					]
				}
			}
		},
		{
			"displayName": "Journalrun ID",
			"name": "journalrunId",
			"required": true,
			"description": "The unique identifier of the payroll run",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Journal Run Results"
					],
					"operation": [
						"Get Journal Run Results By Journal Run ID"
					]
				}
			}
		},
];
