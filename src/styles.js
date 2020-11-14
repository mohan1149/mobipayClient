import { StyleSheet ,Dimensions} from 'react-native';
const Styles = StyleSheet.create({
    main_theme:{
        backgroundColor:'#fff',
        flex:1,   
          
    },
    welcome_back: {
      fontSize:32,
      margin:10,
      fontWeight:'800',
      textAlign:'center'
    },
    hi:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'800',
        margin:15,
    },
    secret_pin_label:{
        textAlign:'center',
        //textTransform:'uppercase',
        //fontWeight:'bold',
        fontSize:13,
        opacity:0.5
    },
    logn_form:{
        margin:15,        
    },
    setup_secret_pin:{
        marginTop:40,
    },
    setup_secret_pin_button:{
        padding:10,
        backgroundColor:'black',
        borderRadius:60,         
        alignSelf:'center',        
    },
    login_button:{
        padding:15,
        backgroundColor:'black',
        borderRadius:60,
        width:120,      
        alignSelf:'center'
    },
    signup_button:{
        padding:15,
        backgroundColor:'black',
        borderRadius:60,
        width:120,      
        alignSelf:'center',
        marginTop:20,
    },
    login_button_text:{
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    login_footer_links:{
        marginLeft:15,
        marginRight:15,
    },
    login_footer_links_text:{
        fontSize:16
    },
    aval_bal:{
        fontWeight:'bold'
    },
    aval_bal_val:{
        fontWeight:'bold',
        marginTop:4,
        fontSize:40
    },
    actvity_view:{
        backgroundColor:'black',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingLeft:15,
        paddingTop:20,
        paddingRight:15,
        paddingBottom:20,    
    },
    actvity_title:{
        color:'#fefefe',
        fontWeight:'bold',
        fontSize:20
    },
    actvity_title_black:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    offer_title:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
    },
    actvity_history:{
        color:'#fff',
        fontSize:14,    
        fontWeight:'bold'
    },
    offers_list:{
        color:'black',
        fontSize:14,    
        fontWeight:'bold'
    },
    day_label:{
        color:'#616161',
        textTransform:'uppercase',
        fontWeight:'bold',
        margin:10,

    },
    day:{
        textTransform:'uppercase',
        fontWeight:'bold',
        margin:10,
    },
    balck_listitem:{
        backgroundColor: '#000000',
    },
    black_listitem_avatar:{
        backgroundColor: '#222222',
        padding: 10,
        borderRadius: 15,
    },
    black_listitem_title:{
        color: '#fefefe',
        fontWeight: 'bold'
    },
    white_listitem_title:{
        color: 'black',
        fontWeight: 'bold'
    },
    black_listitem_subtitle:{
        color: '#9696A0'
    },
    black_listitem_right_title:{
        color: '#fefefe',
        fontWeight: 'bold'
    },
    white_listitem_right_title:{
        color: 'black',
        fontWeight: 'bold'
    },
    hero_grid:{    
        padding:5,        
        margin:5,
        width:Dimensions.get('screen').width/5,        
    },
    hero_grid_image_wrapper:{
        borderRadius:16,    
        alignItems:'center'
    },
    hero_grid_image:{
        width:25,
        height:25,        
    },
    hero_grid_title:{
        textAlign:'center',
        fontWeight:'bold',
        margin:5,
        fontSize:12
    },    
    scan_qr_code_title:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
    },
    footer_view:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },
    pay_button:{
        backgroundColor:'black',
        alignSelf:'center',
        padding:12,
        borderRadius:10,
        marginTop:20,
    },
    amount_input:{
        margin:15,
    },
    amount_input_field:{
        borderWidth:2,
        borderRadius:16,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:16,
        marginLeft:40,
        marginRight:40,
        marginTop:30
    },
    vendor_info:{
        marginLeft:40, 
        marginRight:40,
        marginTop:50,
        paddingBottom:20,        
    },
    vendor_icon:{
        alignSelf:'center',
        backgroundColor:'black',
        position:'relative',
        padding:10,
        borderRadius:6,
        zIndex:2,
        top:-30
    },
    vendor_name:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
    },
    no_transactions:{
        alignItems:'center',
        padding:20,

    },
    no_transactions_text:{
        color:'#bcbcbc',
        textTransform:'uppercase',
        fontWeight:'bold',
        padding:10,
    },
    create_accont_text:{
        fontSize:50,
        marginLeft:35,
        marginBottom:0,
        fontWeight:'bold',
    },
    setup_secretpin:{
        fontSize:50,
        marginLeft:35,
        marginBottom:0,
        fontWeight:'bold',
    },
    create_accont_wrapper:{
        marginLeft:30, 
        marginRight:30,
        marginTop:20,
        marginBottom:20,    
    },
    create_accont_name:{        
        borderColor:'#CCC',
        borderBottomWidth:1,
        flex:1,
        fontSize:16,
        marginLeft:25,
        marginRight:10,

    },
    create_accont_phone:{        
        borderBottomWidth:1.5,
        padding:12,
        letterSpacing:1,
        fontSize:20,     
        marginBottom:30,
    }
  });
  
  export default Styles;