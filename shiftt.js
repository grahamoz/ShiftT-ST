var App = new Ext.Application({
    name : 'ShiftT',
    useLoadMask : true,
    launch : function() {
    
        ShiftT.views.shifttrosterToolbar = new Ext.Toolbar({
            id: 'shifttrosterToolbar',
            layout: 'hbox',
            title: 'ShiftT',
            items: [
                
                { xtype: 'spacer' },
	    	{    
                        id: 'setupButton',
                        text: 'Setup',
                        ui: 'action',
                        handler: function () {              
                                ShiftT.views.viewport.setActiveItem('shifttSetupForm', {type: 'slide', direction: 'left'});
                        }
                }
            ]
      
        });

        ShiftT.views.shifttbottomToolbar = new Ext.Toolbar({
            id: 'shifttbottomToolbar',
            layout: 'hbox',
            dock: 'bottom',
            title: '',
            items: [
                
                { xtype: 'spacer' },
	    	{    
                        id: 'setupFormButton',
                        text: 'Setup Form',
                        ui: 'action',
                        handler: function () {              
                            ShiftT.views.viewport.setActiveItem('shifttSetupForm', {type: 'slide', direction: 'left'});
                        }
                }
            ]
      
        });

        ShiftT.views.shifttsetupToolbar = new Ext.Toolbar({
            id: 'shifttsetupToolbar',
            layout: 'hbox',
            title: 'ShiftT Settings',
            
            items: [
                { xtype: 'spacer' },
		{
                    id: 'backButton',
                    text: 'Back',
                    ui: 'action',
                    handler: function () {              
                        ShiftT.views.viewport.setActiveItem('shifttrosterContainer', {type: 'slide', direction: 'right'});
                    }
                }
            ]
            
        });

        ShiftT.views.shifttrosterContainer = new Ext.Panel({
            id : 'shifttrosterContainer',
            layout : 'fit',
            html: 'This is the shift roster container',
            items: [
                {
                    xtype: 'textfield',
                    name : 'RosterType',
                    label: 'Roster Type',
                    value : 'unknown'
                }
            ],
                
            dockedItems: [ShiftT.views.shifttrosterToolbar,
                ShiftT.views.shifttbottomToolbar
            ],
            
            
        });

        Ext.regModel('demo', {
            fields: [
                {name: 'data', type: 'string'}
            ]
        });
        
        ShiftT.views.shifttsetupContainer = new Ext.Panel({
            id : 'shifttsetupContainer',
            layout : 'fit',
            html: 'This is the shift setup container',
            dockedItems: [ShiftT.views.shifttsetupToolbar
                ]
        });
  
        ShiftT.views.shifttSetupForm = new Ext.form.FormPanel({
            id: 'shifttSetupForm',
            dockedItems: [ShiftT.views.shifttsetupToolbar
                ],
            
            items: [
                {
                    xtype: 'textfield',
                    name : 'test',
                    label: 'test text',
                    value : 'junk'
                },
                {
                    xtype: 'selectfield',
                    name : 'RosterType',
                    label: 'Roster Type',
                    options: [
                        {
                            text: 'Select..', value: 'Select'
                        },
                        {
                            text: '4 on, 4 off (SM)', value: '4on4off'
                        },
                        {
                            text: 'next roster', value: 'next'
                        }
                    ],
                    listeners: {
                        change: {
                            fn: function(){
                                console.log('select fired');
                                
                                ShiftT.views.shifttSetupForm.setValues(
                                    {
                                        test : 'test for me'
                                    }
                                );
                                values = ShiftT.views.shifttSetupForm.getValues();
                                
                                ShiftT.views.shifttSetupForm.setValues(
                                    {
                                        test :  values.RosterType
                                    }
                                );
                                
                            }
                        }
                    }
                }
            ]
            
        });

        ShiftT.views.viewport = new Ext.Panel({
            fullscreen: true,
            layout : 'card',
            cardAnimation : 'slide',
			
            items: [
                ShiftT.views.shifttrosterContainer,
                ShiftT.views.shifttsetupContainer,
                ShiftT.views.shifttSetupForm
            ]

        });
        
    }
})


