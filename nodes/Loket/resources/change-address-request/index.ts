import type { INodeProperties } from 'n8n-workflow';

export const changeAddressRequestDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Change Address Request"
					]
				}
			},
			"options": [
				{
					"name": "Post Change Address Request By Employee ID",
					"value": "Post Change Address Request By Employee ID",
					"action": "Start the change address workflow for an employee",
					"description": "__Activity name:__ PostChangeAddressRequestByEmployeeId\n  \n\nAllows the user to submit a change address request. Request because this request will trigger a workflow that might require the change to be approved.\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/changeaddressrequest"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/changeaddressrequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Change Address Request"
					],
					"operation": [
						"Post Change Address Request By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Change Address Request"
					],
					"operation": [
						"Post Change Address Request By Employee ID"
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
						"Change Address Request"
					],
					"operation": [
						"Post Change Address Request By Employee ID"
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
						"Change Address Request"
					],
					"operation": [
						"Post Change Address Request By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Change Address Request"
					],
					"operation": [
						"Post Change Address Request By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "We move house September 26th",
			"description": "An extra comment for the change request",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Change Address Request"
					],
					"operation": [
						"Post Change Address Request By Employee ID"
					]
				}
			}
		},
];
