/**
 * @author Ed Spencer
 * @class Ext.data.JsonWriter
 * @extends Ext.data.Writer
 * 
 * <p>Writer that outputs model data in JSON format</p>
 */
Ext.data.JsonWriter = Ext.extend(Ext.data.Writer, {
    /**
     * @cfg {String} root The key under which the records in this Writer will be placed. Defaults to 'records'.
     * Example generated request:
<pre><code>
{'records': [{name: 'my record'}, {name: 'another record'}]}
</code></pre>
     */
    root: undefined,

	allowSingle: true,
    
    
/**
     * @cfg {Boolean} encode True to use Ext.encode() on the data before sending. Defaults to false.
     */
    encode: false,
    
    //inherit docs
    writeRecords: function(request, data) {
        var root = this.root;
		
		if (this.allowSingle && data.length == 1) {
            // convert to single object format
            data = data[0];
        }
		
		if (this.encode === true) {
            data = Ext.encode(data);
        }
        
        request.jsonData = request.jsonData || {};
        
		if (root){
			request.jsonData[this.root] = data;
		} else {
			request.jsonData = data;
		}
				
        return request;

    }
});

Ext.data.WriterMgr.registerType('json', Ext.data.JsonWriter);
