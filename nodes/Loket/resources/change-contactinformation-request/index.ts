import type { INodeProperties } from 'n8n-workflow';

export const changeContactinformationRequestDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Change Contactinformation Request"
					]
				}
			},
			"options": [
				{
					"name": "Post Change Contact Information Request By Employee ID",
					"value": "Post Change Contact Information Request By Employee ID",
					"action": "Start the change contactinformation workflow for an employee",
					"description": "__Activity name:__ PostChangeContactInformationRequestByEmployeeId\n  \n\nAllows the user to submit a change contactinformation request. Request because this request will trigger a workflow that might require the change to be approved.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/changecontactinformationrequest"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/changecontactinformationrequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Change Contactinformation Request"
					],
					"operation": [
						"Post Change Contact Information Request By Employee ID"
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
						"Change Contactinformation Request"
					],
					"operation": [
						"Post Change Contact Information Request By Employee ID"
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
						"Change Contactinformation Request"
					],
					"operation": [
						"Post Change Contact Information Request By Employee ID"
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
						"Change Contactinformation Request"
					],
					"operation": [
						"Post Change Contact Information Request By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "Changed my mobile phone number.",
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
						"Change Contactinformation Request"
					],
					"operation": [
						"Post Change Contact Information Request By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Contact Information",
			"name": "contactInformation",
			"type": "json",
			"default": "{\n  \"emailAddress\": \"info@loket.nl\",\n  \"faxNumber\": \"+31 13-1234561\",\n  \"mobilePhoneNumber\": \"+31 6-1231456\",\n  \"phoneNumber\": \"+31 13-1234567\"\n}",
			"routing": {
				"send": {
					"property": "contactInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Change Contactinformation Request"
					],
					"operation": [
						"Post Change Contact Information Request By Employee ID"
					]
				}
			}
		},
];
