import type { INodeProperties } from 'n8n-workflow';

export const mdvNotificationsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mdv Notifications"
					]
				}
			},
			"options": [
				{
					"name": "Patch Mdv Notifications By Payroll Administration ID",
					"value": "Patch Mdv Notifications By Payroll Administration ID",
					"action": "MDV notifications",
					"description": "__Activity name :__ PatchMdvNotificationsByPayrollAdministrationId\n\nMdv notifications\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/payrollAdministrations/{{$parameter[\"payrollAdministrationId\"]}}/mdvNotifications"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/payrollAdministrations/{payrollAdministrationId}/mdvNotifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mdv Notifications"
					],
					"operation": [
						"Patch Mdv Notifications By Payroll Administration ID"
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
						"Mdv Notifications"
					],
					"operation": [
						"Patch Mdv Notifications By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Administration ID",
			"name": "payrollAdministrationId",
			"required": true,
			"description": "The unique identifier of an administration",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Mdv Notifications"
					],
					"operation": [
						"Patch Mdv Notifications By Payroll Administration ID"
					]
				}
			}
		},
];
