CREATE          proc [dbo].[sp_App_Arq_Dsr_Expurgo] ( @InidMov int, @inParametro int, @inFlgVal int )  
as  
  
 set nocount on  
 if @inParametro != -1  
 begin     
  select  
  count(doc.iniddoc) as Pai,  
  0     as Lote,   
  0   as Destino,  
  sum(doc.dcvalbat) as Total   
  
  from   
       tblmdoc      as doc with (nolock),  
       tblmloteentr as lot with (nolock),  
       tblcexcecoes as exc with (nolock),  
       tblcconf    as conf  with (nolock)
       Good morning, explai this code below please
  where   
          doc.inidmov      = @InidMov  
  and   doc.inidmov      = lot.inidmov  
  and   doc.inidloteentr = lot.inidloteentr  
  and   doc.inidexcimp   = exc.inidexc  
  and   doc.inbcoApres <> conf.inidbco  
  and   doc.inidstat     = 200  
  and   exc.vcDescr      = 'EXP'  
  and   doc.btdel        = 0  
  and   doc.inidlotesai  is null
  order by Pai, lote, Destino, Total  
  
 end  
 else  
 begin  
  
  
  select   
   distinct lot.inidrem  
  from   
       tblmdoc     as doc with (nolock),  
       tblmloteentr as lot with (nolock),  
       tblcexcecoes as exc with (nolock),  
       tblcconf    as conf with (nolock)  
         
  where   
        doc.inidmov      = @InidMov  
  and   doc.inidmov      = lot.inidmov  
  and   doc.inidloteentr = lot.inidloteentr  
  and   doc.inidexcimp   = exc.inidexc  
  and   doc.inbcoApres  <> conf.inidbco   
  and   doc.inidstat     = 200  
  and   exc.vcDescr      = 'EXP'  
  and   doc.btdel        = 0  
  order by lot.inidrem  